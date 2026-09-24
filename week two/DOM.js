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
newPara.innerText='Esha ne mujhe banaya, hehehe'
document.body.appendChild(newPara)

// react concept 
const vegetables = ["peace" , "patato" , "brinjal" , "cabage"]

const ul = document.createElement('ul')
vegetables.forEach(veg => {
    const li = document.createElement('li')
    li.innerText = veg
    li.style.fontSize='25px'
    li.style.padding='5px 0px'
    ul.appendChild(li)
});
document.body.appendChild(ul)


// single object card

const student = {
    name:'Esha',
    marks: 82,
    city : 'Lahore',
    grade : "B+",
}

const {name, marks, city , grade}= student

const card = document.createElement('div')
card.style.border= '1px solid black'
card.style.padding= '20px'
card.style.margin= '20px 20px'
card.style.borderRadius= '12px'
card.style.maxWidth= '300px'
card.style.fontFamily= 'arial'

card.innerHTML= `<h2> ${name} </h2> <p> Marks: <b>${marks} </b> </p> 
<p> City: ${city} </p> <p> Marks: <b>${grade} </b> </p>`

document.body.appendChild(card)

// array of object card
const students = [
    {name:'Esha',    marks: 82,   grade: "B+"},
    {name:'Fiza',    marks: 50,   grade: "C"},
    {name:'Arman',    marks: 45,   grade: "D"},
    {name:'Saira',    marks: 35,   grade: "F"},
]

students.forEach(student => {
    const {name, marks , grade} = students

    const cards = document.createElement('div')
    cards.style.border = '2px solide black'
    cards.style.borderRadius= '10px'
    cards.style.padding= '20px'
    cards.style.margin= '20px auto'
    cards.style.display= 'inlind-block'
    cards.style.minWidth='160px'
    cards.style.textAlign='center'
    cards.style.fontFamily='roboto'
});