//find sum of number in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num,0);
console.log(sum);

//Find Maximum Value
const mnumbers = [8, 4, 2, 6, 3];
const maxnum = mnumbers.reduce((acc, mnum) => (mnum > acc ? mnum : acc), mnumbers[1])
console.log(maxnum);

//Count Test Statuses
let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
let Status = testResults.reduce((acc, value)=>
    {
     acc[value] = (acc[value] || 0) + 1;
     return acc;
    }, {}
);
console.log(Status)
