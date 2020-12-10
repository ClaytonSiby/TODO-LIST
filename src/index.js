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

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

newListForm.addEventListener('submit', e => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});


function createList(name) {
  return { id: Date.now().toString(), name: name, tasks:[] }
}

function saveAndRender() {
  save();
  render();
}


function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
}

function render() {
  clearElement(listsContainer);
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);    
  });
}

function clearElement(element) {
 while(element.firstChild) {
   element.removeChild(element.firstChild);
 }
} 


render();