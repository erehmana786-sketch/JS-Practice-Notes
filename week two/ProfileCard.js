const myProfile = {
    name:'Esha',
    age: 23,
    city : "Lahore",
    role: "Web development",
    skills:["HTML", "CSS", "JS"]
}

const {name, age, city, role, skills} = myProfile

const card = document.createElement('div')
// card.style.backgroundColor='#f9f9f9'
card.style.border= '1px solid #ccc'
card.style.padding= '20px'
card.style.margin= '20px 20px'
card.style.borderRadius= '12px'
card.style.maxWidth= '300px'
card.style.fontFamily= 'arial'
card.innerHTML= `<h2> ${name} </h2> 
<p style="margin-top: 15px;"> Age:${age} </p>  
<p> City: ${city} </p> 
<span style="background-color: #007bff; color: white; padding: 4px 10px; border-radius: 12px; font-size: 12px; display: inline-block;"> Role: ${role} </span> 
<h4> Skills: </h4>`

const ul = document.createElement('ul')
skills.forEach(skill => {
    const li = document.createElement('li')
    li.innerText=skill
    ul.appendChild(li)
});
card.appendChild(ul)
document.body.appendChild(card)