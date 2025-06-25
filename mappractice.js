let numbers=[1,2,3];
let doubled = numbers.map(num=>num*3);
let indexed = numbers.map((num, index) => `Index ${index}: ${num}`);
console.log(doubled)
console.log(indexed)


//map function to find the user name from the array

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

let names = users.map(user=>user.name)
console.log(names[0])
console.log(names[1])

//Map an array of strings to uppercase:
let fruits = ['apple', 'banana', 'cherry'];
let fuppercase= fruits.map(fruit => fruit.toUpperCase());
console.log(fuppercase)
