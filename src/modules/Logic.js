import './saveandrender';

export function editTask (task, label) {
  newTaskInput.value = task.name
  newTaskDate.value = task.date
  newTaskPriority.value = task.priority
  newTaskDescription.value = task.description
  task.id = null

  newTaskForm.addEventListener('submit', () => {
    task.name = newTaskInput.value
    task.date = newTaskDate.value
    task.priority = newTaskPriority.value
    task.description = newTaskDescription.value
    label.innerHTML = `${task.name}, ${task.date}, ${task.description}, ${task.priority}`
    saveAndRender()
  })
}
