import '../index';
import './Logic';

export function renderTasks (selectedList) {
  selectedList.tasks.forEach(task => {
    if (task.id != null) {
      const taskElement = document.importNode(taskTemplate.content, true)
      const checkbox = taskElement.querySelector('input')
      checkbox.id = task.id
      checkbox.checked = task.complete
      const label = taskElement.querySelector('label')
      label.htmlFor = task.id

      label.append(task.name, ', ')
      label.append(task.date, ', ')
      label.append(task.description, ', ')
      label.append(task.priority)

      const editButton = document.createElement('p')
      editButton.innerHTML = 'Edit'
      editButton.classList.add('edit')
      editButton.addEventListener('click', () => editTask(task, label))
      const todoTask = taskElement.querySelector('.task')
      todoTask.append(editButton)
      tasksContainer.appendChild(taskElement)
    }
  })
}

export function clearElement (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
