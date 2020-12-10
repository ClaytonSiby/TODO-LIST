// let defaultProject = [];

// function Task(title, description, duedate, notes, priority) {   
//   this.title = title;
//   this.description = description;
//   this.duedate = duedate; 
//   this.notes = notes;
//   this.priority = priority;
// }

// let submitTask = document.getElementById('submit-task');
// let projectName = document.getElementById('project-name').value;
// let submitProject = document.getElementById('submit-project');

// function createProject() {
  
// }

// function addTaskToProject(e) {
//   e.preventDefault();
//   let taskTitle = document.getElementById('task-title').value;
//   let taskDescription = document.getElementById('task-description').value;
//   let taskduedate = document.getElementById('task-duedate').value;
//   let taskNotes = document.getElementById('task-notes').value;
//   let taskPriority = document.getElementById('task-priority').value;

//   let userTask = new Task(taskTitle, taskDescription, taskduedate, taskNotes, taskPriority);
  
//   defaultProject.push(userTask);

//   localStorage.setItem('myTask', JSON.stringify(defaultProject));


//   taskTitle.value = '';
//   taskDescription.value = '';
//   taskduedate.value = '';
//   taskNotes.value = '';
//   taskPriority.value = '';
  
// }

// submitTask.addEventListener('click', addTaskToProject);

const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');

const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]')


const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');

const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-title]');
const newTaskDate = document.querySelector('[data-new-task-date]');
const newTaskDescription = document.querySelector('[data-new-task-description]');
const newTaskPriority = document.querySelector('[data-select-priority]');
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
})

tasksContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedList = lists.find(list => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    saveAndRender();    
  }
})

clearCompleteTasksButton.addEventListener('click', e => {
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
  saveAndRender();
})

deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
})

newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
})

function createList() {
  return { id: Date.now().toString(), name: newListInput.value, tasks: [] }
}

newTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  const taskDate = newTaskDate.value;
  const taskDescription = newTaskDescription.value;
  const taskPriority = newTaskPriority.value;

  if (!(taskName || taskDate || taskDescription || taskPriority)) return;
  const task = createTask();
  newTaskInput.value = null;
  newTaskDate.value = null;
  newTaskDescription.value = null;
  newTaskPriority.value = null;

  
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
})

function createTask() {
  return {
    id: Date.now().toString(),
    name: newTaskInput.value,
    date: newTaskDate.value,
    priority: newTaskPriority.value,
    description: newTaskDescription.value,
    complete: false,
  };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function render() {
  clearElement(listsContainer)
  renderLists();

  const selectedList = lists.find(list => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name ;   
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    
    
    label.append(task.name, ", ");
    label.append(task.date, ", ");
    label.append(task.description, ", ");
    label.append(task.priority);
    
    const editButton = document.createElement("p");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener("click", () => editTask(task, label));
    const todoTask = taskElement.querySelector(".task");
    todoTask.append(editButton);
    tasksContainer.appendChild(taskElement);
  })
}

function editTask(task, label) {

  newTaskInput.value = task.name;
  newTaskDate.value = task.date;
  newTaskPriority.value = task.priority;
  newTaskDescription.value = task.description;

  newTaskForm.addEventListener("submit", () => {    
    task.name = newTaskInput.value;
    task.date = newTaskDate.value;
    task.priority = newTaskPriority.value;
    task.description = newTaskDescription.value;
    label.innerHTML = `${task.name}, ${task.date}, ${task.description}` ;
    saveAndRender(); 
  });
}

function renderLists() {
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

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();