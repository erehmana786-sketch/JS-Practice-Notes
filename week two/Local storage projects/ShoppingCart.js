// Products list:
const products = [
  { id: 1, name: "Laptop",  price: 80000 },
  { id: 2, name: "Phone",   price: 50000 },
  { id: 3, name: "Shirt",   price: 1500  },
  { id: 4, name: "Book",    price: 800   }
];

const productList = document.getElementById('productList')

// render products
products.forEach(product =>{
    const div = document.createElement('div')
    div.style.border = '1px solid #ccc'
    div.style.borderRadius = '8px'
    div.style.padding = '10px'
    div.style.margin = '8px 0px'

    div.innerHTML = `<b>${product.name}</b>
    <span>-Rs: ${product.price}</span>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
    `
    productList.appendChild(div)
})

// cart array + local storage
const cart = JSON.parse(localStorage.getItem('cart')) || []
let addToCart = (productid) =>{
const product = products.find(p => p.id === productid )
cart.push(product)
localStorage.getItem('cart', JSON.stringify(cart))

}

// render cart
const cartList = document.getElementById('cartList')
const totalPrice = document.getElementById('totalPrice')
const clearCartbtn = document.getElementById('clearCartbtn')

let renderCart = ()=>{
  cartList.innerHTML = ''
  if (cart.length === 0) {
    cartList.innerHTML = `<p>Cart is empty!</p>`
    totalPrice.innerText = ''
    return
  }


cart.forEach(item =>{
  const div = document.createElement('div')
  div.innerText = `${item.name} -Rs. ${item.price} `
  cartList.appendChild(div)
})

// total
let total = 0
cart.forEach(item => total += item.price)
totalPrice.innerText = `Total Rs. ${total}`

}

// clear cart
clearCartbtn.addEventListener('click',()=>{
  cart = []
  localStorage.removeItem('cart')
  renderCart()
})

// render cart on page load
renderCart()