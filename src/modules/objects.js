const CreateObjects = (() => {
  const Project = name => {
    const id = Date.now().toString()
    let tasks = []

    let addNewTask = newTask => tasks.unshift(newTask);

    return { id, name, tasks, addNewTask }
  }

  const Task = (title, dueDate, description, priority) => {
    const id = Date.now().toString()
    let complete = false

    return { id, title, dueDate, description, priority, complete }
  }

  return { Project, Task }
})()

export default CreateObjects
