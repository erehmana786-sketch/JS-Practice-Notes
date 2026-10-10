// Products list:
const products = [
  { id: 1, name: "Laptop",  price: 80000 },
  { id: 2, name: "Phone",   price: 50000 },
  { id: 3, name: "Shirt",   price: 1500  },
  { id: 4, name: "Book",    price: 800   }
];

const productList = document.getElementById('productList')

products.forEach(product =>{
    const div = document.createElement('div')
    div.style.border = '1px solid #ccc'
    div.style.borderRadius = '8px'
    div.style.padding = '10px'
    div.style.margin = '8px 0px'

    div.innerHTML = `<b>${product.name}</b>
    <span>-Rs: ${product.price}</span>
    <button onclick></button>
    `
})