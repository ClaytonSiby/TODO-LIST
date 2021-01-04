/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */


import { clearElement, renderTasks } from './rendertasks';

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
const deleteListButton = document.querySelector('[data-delete-list-button]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
export const listsContainer = document.querySelector('[data-lists]');
export const tasksContainer = document.querySelector('[data-tasks]');

export let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [{ id: '1607751397905', name: 'Default', tasks: [] }];
export let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

export function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

export const createList = (input, id) => {
  return { id: id, name: input, tasks: [] };
}


export function renderLists() {
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add('list-name');
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add('active-list');
    }
    if(listsContainer){
    listsContainer.appendChild(listElement);
    }
  });
}

export function render() {
  clearElement(listsContainer);
  renderLists();

  const selectedList = lists.find(list => list.id === selectedListId);
  if(listDisplayContainer){
    if (selectedListId == null) {
      listDisplayContainer.style.display = 'none';
    } else {
      listDisplayContainer.style.display = '';
      listTitleElement.innerText = selectedList.name;
      clearElement(tasksContainer);
      renderTasks(selectedList);
    }
  }
}

export function saveAndRender() {
  save();
  render();
}

if(listsContainer) {
  listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});
}

if(newListForm) {
  newListForm.addEventListener('submit', e => {
  e.preventDefault();
  const listName = newListInput.value;
  const id = Date.now().toString()
  if (listName == null || listName === '') return;
  const list = createList(listName, id);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});
}

if(deleteListButton) {
  deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});
}

