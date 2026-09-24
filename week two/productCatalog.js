const products = [
  { name: "Laptop", price: 80000, available: true,  category: "Tech"    },
  { name: "Phone",  price: 50000, available: false, category: "Tech"    },
  { name: "Shirt",  price: 1500,  available: true,  category: "Clothes" },
  { name: "Book",   price: 800,   available: true,  category: "Books"   },
  { name: "Watch",  price: 25000, available: false, category: "Fashion" }
];


// page heading with length
const availableProducts= products.filter(count=>count.available).length
console.log(availableProducts);

const heading = document.createElement('h1')
heading.innerText= `Product Catalog — ${availableProducts} items available`
heading.style.fontFamily='futura'
document.body.appendChild(heading)

// add 10% discount 
const productsWithDiscount = products.map(product => {
    const discountPrice = Math.floor(product.price * 0.90)
    return { ...product, discountPrice }
})

// create card of every product 
const createProduct=(product => {
    const {name, price, available, category, discountPrice}= product
    const card = document.createElement('div')
card.style.border= '1px solid #ccc'
card.style.padding= '20px'
card.style.margin= '20px 20px'
card.style.borderRadius= '12px'
card.style.maxWidth= '300px'
card.style.fontFamily= 'arial'

card.innerHTML= `<h3>Name: ${name}</h3> <small style="color: brown">Category: ${category}</small>
<p>Original Price Rs. ${price}</p>
    <p style="color: green; font-weight: bold">Discounted: Rs. ${discountPrice} (10% off)</p>
<b style="color: ${available ? 'green': 'red'};"> ${available ? 'inStock' : 'Out of Stock'}</b>`

if (available) {
    card.style.border ='1px solid green'
} else {
    card.style.border ='1px solid red'
}

document.body.appendChild(card)


});

// Show available products first
// const AvailableProducts= products.filter(product=> product.available)
// const UnAvailableProducts= products.filter(product=> !product.available)
const AvailableProducts = productsWithDiscount.filter(product => product.available)
const UnAvailableProducts = productsWithDiscount.filter(product => !product.available)

AvailableProducts.forEach(createProduct)
UnAvailableProducts.forEach(createProduct)