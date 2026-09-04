const parent = document.querySelector('.Parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[3].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    
}

parent.children[1].style.color = "red"