let productName = prompt("What would you like to purchase?");
let productPrice = prompt("What is the price of the product?");
let quantityOf = prompt("How many would you like?");
let subTotal = productPrice * quantityOf
const salesTax= Number(0.08)
let taxAmount = subTotal * salesTax
let total = subTotal + taxAmount


console.log(`
Product Name: ${productName}
Price: $${productPrice}
Quantity: ${quantityOf}

Subtotal: $${subTotal}
Sales Tax @8%: $${taxAmount}

Total: $${total}
`)
