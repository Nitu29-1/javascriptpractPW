//filter even number from an array
let numbers = [2,3,4,6,5,7]
let evennum = numbers.filter(num=> num%2 === 0);
console.log(evennum);

//Filter Strings having Length>4
let words = ["apple", "bat", "banana", "dog", "elephant"];
let wordlength = words.filter(word=> word.length>4);
console.log(wordlength);

//filter user with active
const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true }
];
const activeUsers = users.filter(user => !user.isActive);

console.log(activeUsers);

//filter value greater than 70
const scores = [45, 67, 89, 32,70, 100, 76];
const greaternum = scores.filter(num => num > 70);
console.log(greaternum);