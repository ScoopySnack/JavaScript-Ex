const shoppingCart = {
    items:[ //Array of items. Each item is an object with 3 properties: productName, price, and quantity. 
        {productName: "Apples", price: 8.59, quantity: 40},
        {productName: "Oranges", price: 12, quantity: 100},
    ], // An Object can have all sorts of data types, including arrays, objects, and even functions.

    addItemToCart(item) {
        this.items.push(item);
    } //"push" is a method that adds an element to the end of an array. In this case, it adds the "item" object to the end of the "items" array.
}

shoppingCart.addItemToCart({productName: "Honey", price: 18.59, quantity: 400})
console.log(shoppingCart.items) // [ { productName: 'Apples', price: 8.59, quantity: 40 }, { productName: 'Oranges', price: 12, quantity: 100 }, { productName: 'Honey', price: 18.59, quantity: 400 } ]
//Console log will print anythig that is inside the shoppingCart.items array. In this case, it will print the items that are inside the array.


