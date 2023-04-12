// Recursive method
function findFactorialRecursive(number) {
  // code here
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}
console.log(findFactorialRecursive(5));

// Iterative method using loops
// function findFactorialIterative(number) {
//   let answer = 1;
//   for (let i = number; i > 0; i--) {
//     answer = answer * i;
//   }
//   return answer;
// }
// console.log(findFactorialIterative(3));

// Iterative method using reduce
// function findFactorialIterative(number) {
//   const collection = [];
//   for (let i = number; i > 0; i--) {
//     collection.push(i);
//   }
//   return collection.reduce((curr, prev) => {
//     return curr * prev;
//   }, 1);
// }
// console.log(findFactorialIterative(5));
