const todoInput = document.getElementById('todoInput')
const addbtn = document.getElementById('addbtn')
const clearAllbtn = document.getElementById('clearAllbtn')
const todoList = document.getElementById('todoList')

// load task from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

// Task render function
const renderTasks = () => {
    todoList.innerHTML = ""
    tasks.forEach((task, index) => {
        const li = document.createElement('li')
        li.style.padding = '10px'
        li.style.margin = '6px, 0px'
        li.style.border = '1px solid #ccc'
        li.style.borderRadius = '8px'
        li.style.display = 'flex'
        li.style.justifyContent = 'space-between'
        li.style.alignItems = 'center'

        if (task.done) {
            li.style.textDecoration = 'line-through'
            li.style.color = 'gray'
            li.style.backgroundColor = '#f9f9f9'
        }

    li.innerHTML = `<span>${task.text}</span>
  <button onclick="deleteTask(${index})" style="background:red;color:white; border:none; padding:4px 10px; border-radius:4px;cursor:pointer">Delete</button>`

// done toggle on click
  li.addEventListener('click', ()=> toggleTask(index))

  todoList.appendChild(li)
    });
}

// add task 
addbtn.addEventListener('click', ()=>{
    if (todoInput.value=== '') return

    tasks.push ({text: todoInput.value , done : false})
    localStorage.setItem('tasks', JSON.stringify(tasks))
    todoInput = ''
    renderTasks()
})

// add by Enter 
todoInput.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') addbtn.click()
})

// done toggle
const toggleTask = (index) =>{
    tasks[index].done = !tasks[index].done
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
}

// delete 
const deleteTask = (index) =>{
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
}

// clearAll 
clearAllbtn.addEventListener ('click', ()=>{
    tasks = []
    localStorage.removeItem('tasks')
    renderTasks()
})

// render on page load
renderTasks()