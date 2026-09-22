// getElementById is use for only id 
let title = document.getElementById("title")
let paragraph = document.getElementById("para")
title.innerText = "My first DOM"
paragraph.innerText= "JS change the paragraph text"
title.style.color= "teal"
title.style.fontSize= "40px"
paragraph.style.color= "white"
paragraph.style.background= "orange"
paragraph.style.padding= "5px"

// querySelector use for CSS Selectors (ID, Class, Tag name, etc.)
var button = document.querySelector("#btn")
button.style.background="green";
button.style.color="white";
button.style.padding="10px 20px";

// innerText vs innerHTML 
paragraph.innerText = "Hey there! <b>Esha here</b>" // Hey there! <b>Esha here</b>
paragraph.innerHTML = "Hey there! <b>Esha here</b>" // Hey there! Esha here (Esha here bold)

// create list via innerHTML
paragraph.innerHTML="<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>"

// Naya paragraph banao:
var newPara = document.createElement("p");
newPara.innerText    = "JS ne mujhe banaya!";
newPara.style.color  = "purple";
newPara.style.fontSize = "18px";
document.body.appendChild(newPara);

// Array se list banana — REACT KA BASE!
var fruits = ["Apple", "Mango", "Banana", "Orange"];

var ul = document.createElement("ul");
fruits.forEach(function(fruit){
  var li = document.createElement("li");
  li.innerText        = fruit;
  li.style.fontSize   = "16px";
  li.style.padding    = "5px 0";
  ul.appendChild(li);
});
document.body.appendChild(ul);

// Yeh yaad rakho:
// createElement  → element banao
// innerText      → text daalo
// appendChild    → kisi mein add karo 