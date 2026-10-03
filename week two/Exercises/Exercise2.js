// Fruits array:
const fruits = [
  "Apple", "Mango", "Banana", "Orange",
  "Grapes", "Strawberry", "Watermelon", "Pineapple"
];

const searchInput = document.getElementById('#searchInput')
const fruitList = document.getElementById('#fruitList')

function renderFruits(list) {
    fruitList.innerHTML = ''

    if (list.length === 0) {
        fruitList.innerHTML = '<p>No results found!</p>'
        return
    }

list.forEach(fruit => {
  const div = document.createElement ('div')
  div.innerText = fruit
  div.style.padding = '6px'
  div.style.margin = '4px 0px'
  div.style.border = '2px solid gray'
  div.style.borderRadius = '5px'
  fruitList.appendChild(div)
})
renderFruits(fruits)
}

