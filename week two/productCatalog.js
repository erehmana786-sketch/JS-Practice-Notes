const products = [
  { name: "Laptop", price: 80000, available: true,  category: "Tech"    },
  { name: "Phone",  price: 50000, available: false, category: "Tech"    },
  { name: "Shirt",  price: 1500,  available: true,  category: "Clothes" },
  { name: "Book",   price: 800,   available: true,  category: "Books"   },
  { name: "Watch",  price: 25000, available: false, category: "Fashion" }
];

const count= products.filter(count=>count).length
console.log(count);

const heading = document.createElement('h1')
heading.innerText= `Product Catalog — ${count} items available`
heading.style.fontFamily='futura'
document.body.appendChild(heading)

