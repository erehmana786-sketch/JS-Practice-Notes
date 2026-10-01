const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')

const addbtn = document.getElementById('add')
const subbtn = document.getElementById('sub')
const mulbtn = document.getElementById('mul')
const divbtn = document.getElementById('div')

const calcResult = document.getElementById('calcResult')

function isValidInput() {
    if (num1.value.trim()==='' || num2.value.trim()==='') {
        calcResult.innerText = `Please enter both numbers!`
        calcResult.style.color = 'red'
        return false
    }
    return true
}

addbtn.addEventListener('click',()=>{
    if (!isValidInput()) return

    const input1 = Number(num1.value)
    const input2 = Number(num2.value)
    calcResult.innerText = `Result : ${input1+input2}`
    calcResult.style.color = 'green'
    
    
})
subbtn.addEventListener('click',()=>{
    if (!isValidInput()) return

   const input1 = Number(num1.value)
    const input2 = Number(num2.value)
    calcResult.innerText = `Result : ${input1-input2}`
    calcResult.style.color = 'green'
})
mulbtn.addEventListener('click',()=>{
    if (!isValidInput()) return

  const input1 = Number(num1.value)
    const input2 = Number(num2.value)
    calcResult.innerText = `Result : ${input1*input2}`
    calcResult.style.color = 'green'
})
divbtn.addEventListener('click',()=>{
    if (!isValidInput()) return

  const input1 = Number(num1.value)
    const input2 = Number(num2.value)

    if (input2===0) {
        calcResult.innerText = `Result: Cannot divide by zero!`
        calcResult.style.color = 'red'
    } else {
        calcResult.innerText = `Result : ${input1/input2}`
        calcResult.style.color = 'green'
    } 
   
})