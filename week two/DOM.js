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