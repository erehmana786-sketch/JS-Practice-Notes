const title = document.getElementById('title')
const paragraph = document.getElementById('para')
const button = document.getElementById('btn')

title.innerText = "Javascript practice"
paragraph.innerText= "DOM se text change kiya"

title.style.color= 'white'
title.style.backgroundColor= 'blue'
title.style.fontFamily= 'calibri'
title.style.fontSize= '40px'
title.style.padding='20px'
title.style.borderRadius= '5px'

paragraph.style.backgroundColor= 'purple'
paragraph.style.color= 'white'
paragraph.style.padding = '20px'
paragraph.style.borderRadius= '5px'

button.style.background= 'green'
button.style.color='white'
button.style.padding ='10px 20px'
button.style.border='none'
button.style.borderRadius='5px'
button.style.cursor='pointer'

const heading = document.querySelector('h1')
const firstPara = document.querySelector("#para")
console.log(heading.innerText);

paragraph.innerHTML= '<ul><li>HTML</li><li>CSS</li><li>JS</li></ul>'

const newPara=document.createElement('p')
newPara.style.color='pink'
newPara.style.backgroundColor='brown'
newPara.style.borderRadius='5px'
newPara.style.padding='5px'
newPara.style.fontSize='20px'
newPara.innerText='Esha ne mujhe banaya'
document.body.appendChild(newPara)