import {
  saveAndRender,
  render,
  lists,
  selectedListId,
  listsContainer,
  tasksContainer
} from './modules/saveandrender'
import {
  newTaskForm,
  newTaskInput,
  newTaskDate,
  newTaskDescription,
  newTaskPriority
} from './modules/Logic'

const clearCompleteTasksButton = document.querySelector(
  '[data-clear-complete-tasks-button]'
)

tasksContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    let selectedList = lists.find(list => list.id === selectedListId)
    const selectedTask = selectedList.tasks.find(
      task => task.id === e.target.id
    )
    selectedTask.complete = e.target.checked
    saveAndRender()
  }
})

clearCompleteTasksButton.addEventListener('click', e => {
  let selectedList = lists.find(list => list.id === selectedListId)
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
  saveAndRender()
})

newTaskForm.addEventListener('submit', e => {
  e.preventDefault()
  const taskName = newTaskInput.value
  const taskDate = newTaskDate.value
  const taskDescription = newTaskDescription.value
  const taskPriority = newTaskPriority.value

  if (!(taskName || taskDate || taskDescription || taskPriority)) return
  const task = createTask()
  newTaskInput.value = null
  newTaskDate.value = null
  newTaskDescription.value = null
  newTaskPriority.value = null

  let selectedList = lists.find(list => list.id === selectedListId)
  selectedList.tasks.push(task)
  saveAndRender()
})

function createTask () {
  return {
    id: Date.now().toString(),
    name: newTaskInput.value,
    date: newTaskDate.value,
    priority: newTaskPriority.value,
    description: newTaskDescription.value,
    complete: false
  }
}

render()
