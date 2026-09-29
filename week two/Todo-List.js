const todoInput = document.getElementById('todoInput')
const button = document.getElementById('addbtn')
const ul = document.getElementById('todoList')

button.addEventListener('click', ()=>{
    if (todoInput.value==='') {
        alert('Write task!')
        return
    }

  const li = document.createElement('li')
  li.innerText = todoInput.value
  li.style.padding = "8px"
  li.style.margin  = "4px 0"
  li.style.border  = "1px solid #ccc"
  li.style.borderRadius = "6px"
  li.style.cursor  = "pointer"

  li.addEventListener('click',()=>{
      li.style.textDecoration = 'line-through'
      li.style.color='grey'
  })
ul.appendchild(li)
todoInput.value=''

})

