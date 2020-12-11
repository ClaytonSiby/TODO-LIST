import {clearElement, renderTasks} from './rendertasks';

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let deleteListButton = document.querySelector('[data-delete-list-button]');
let newListForm = document.querySelector('[data-new-list-form]');
let newListInput = document.querySelector('[data-new-list-input]');

const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]')
export const listsContainer = document.querySelector('[data-lists]');
export const tasksContainer = document.querySelector('[data-tasks]');

export const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
export const selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

export function save() {    
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

export function render() {
  clearElement(listsContainer);
  renderLists();

  let selectedList = lists.find(list => list.id === selectedListId)
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

export function saveAndRender() {
  save();
  render();
}


listsContainer.addEventListener('click', e => {  
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
})

newListForm.addEventListener('submit', e => {
  e.preventDefault();
  let listName = newListInput.value;
  if (listName == null || listName === '') return;
  let list = createList();
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
})

function createList() {
  return { id: Date.now().toString(), name: newListInput.value, tasks: [] }
}

deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
})

export function renderLists() {
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
    listElement.classList.add('active-list');    
    }
    listsContainer.appendChild(listElement);
  })
}