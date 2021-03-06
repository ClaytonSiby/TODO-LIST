/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import {
  saveAndRender,
  render,
  lists,
  selectedListId,
  tasksContainer,
} from './modules/saveandrender';
import {
  newTaskForm,
  newTaskInput,
  newTaskDate,
  newTaskDescription,
  newTaskPriority,
} from './modules/Logic';

const clearCompleteTasksButton = document.querySelector(
  '[data-clear-complete-tasks-button]',
);

if (tasksContainer) {
  tasksContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
      const selectedList = lists.find(list => list.id === selectedListId);
      const selectedTask = selectedList.tasks.find(
        task => task.id === e.target.id,
      );
      selectedTask.complete = e.target.checked;
      saveAndRender();
    }
  });
}

if (clearCompleteTasksButton) {
  clearCompleteTasksButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    saveAndRender();
  });
}

if (newTaskForm) {
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
  });
}

export const createTask = (id, name, date, priority, description, complete) => {
  if (newTaskInput || newTaskDate || newTaskPriority || newTaskDescription) {
    id = Date.now().toString(),
    name = newTaskInput.value,
    date = newTaskDate.value,
    priority = newTaskPriority.value,
    description = newTaskDescription.value,
    complete = false;
  }
  return {
    id,
    name,
    date,
    priority,
    description,
    complete,
  };
};

render();
