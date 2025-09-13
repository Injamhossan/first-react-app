// function sum(a,b) {
//     const result = a + b;
//     return result;
// }

// const output = sum(4, 5);
// console.log(output);


// const sum = (a,b,c) => {
//     const add = a + b + c;
//     return add;

// };

// const result = sum (1, 2, 3);
// console.log(result);


// const number = [1, 2, 3, 4, 5, 6];

// const newNumber = [...number, 10, 100];

// console.log(newNumber);


// Arrray Method


const products = [
    {name: "Redmi", brand: "Xiaomi", price: 3000, color: "Black"},
    {name: "Rog 5", brand: "Asus", price: 2000, color: "Black"},
    {name: "C55", brand: "Realme", price: 1000, color: "Yellow"},
    {name: "S24", brand: "Samsung", price: 1600, color: "Green"},
    {name: "Iphone", brand: "Apple", price: 1900, color: "Rose Gold"},
]


// const result = products.map(produc => produc.price);
// console.log(result);
const result = products.find(produc => produc.name === "C55");
console.log(result);
