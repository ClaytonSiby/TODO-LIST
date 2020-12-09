let defaultProject = [];

function Task(title, description, duedate, notes, priority) {   
  this.title = title;
  this.description = description;
  this.duedate = duedate; 
  this.notes = notes;
  this.priority = priority;
}

let submitTask = document.getElementById('submit-task');
let projectName = document.getElementById('project-name').value;
let submitProject = document.getElementById('submit-project');

function createProject() {
  
}

function addTaskToProject(e) {
  e.preventDefault();
  let taskTitle = document.getElementById('task-title').value;
  let taskDescription = document.getElementById('task-description').value;
  let taskduedate = document.getElementById('task-duedate').value;
  let taskNotes = document.getElementById('task-notes').value;
  let taskPriority = document.getElementById('task-priority').value;

  let userTask = new Task(taskTitle, taskDescription, taskduedate, taskNotes, taskPriority);
  
  defaultProject.push(userTask);

  localStorage.setItem('myTask', JSON.stringify(defaultProject));


  taskTitle.value = '';
  taskDescription.value = '';
  taskduedate.value = '';
  taskNotes.value = '';
  taskPriority.value = '';
  
}

submitTask.addEventListener('click', addTaskToProject);
