/* eslint-disable import/no-cycle */
import { saveAndRender } from './saveandrender';

export const newTaskForm = document.querySelector('[data-new-task-form]');
export const newTaskInput = document.querySelector('[data-new-task-title]');
export const newTaskDate = document.querySelector('[data-new-task-date]');
export const newTaskDescription = document.querySelector('[data-new-task-description]');
export const newTaskPriority = document.querySelector('[data-select-priority]');

function editTask(task, label) {
  newTaskInput.value = task.name;
  newTaskDate.value = task.date;
  newTaskPriority.value = task.priority;
  newTaskDescription.value = task.description;
  task.id = null;

  newTaskForm.addEventListener('submit', () => {
    task.name = newTaskInput.value;
    task.date = newTaskDate.value;
    task.priority = newTaskPriority.value;
    task.description = newTaskDescription.value;
    label.innerHTML = `${task.name}, ${task.date}, ${task.description}, ${task.priority}`;
    saveAndRender();
  });
}

export { editTask };