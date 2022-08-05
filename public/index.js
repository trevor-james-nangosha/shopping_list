const form = document.querySelector('form')
const taskList = document.querySelector('.task-list')
const taskInput = document.querySelector('#task-input')

const addTaskToList = (task) => {
    let paragraph = document.createElement('p')
    paragraph.textContent = task
    taskList.appendChild(paragraph)
}

const clearTaskList = () => {
    taskList.innerHTML = ""
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const task = taskInput.value
    addTaskToList(task)
    taskInput.value = ""
})