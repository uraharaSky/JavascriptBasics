/* 1. Write a function that accepts two numbers and returns their difference.*/

// function difference(a,b){
//     if(a>b){
//         return a-b;
//     }else{
//         return b-a;
//     }
// }
//
// console.log(difference(70,29));


/* 2.Create a function expression to check if a number is even or odd.*/

// let x;
// const EvenOrOdd = function(x){
//     if (x % 2 == 0) {
//         console.log(x + " is even");
//     }else{
//         console.log(x + " is odd");
//     }
// }
// EvenOrOdd(22);

/*
3. Sum of All Numbers in an Array
* */

// function sumArray(arr) {
//     let sum = 0;
//     for(let num of arr) {
//         sum = sum + num;
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

/*
4. Find the Largest Number in an Array
* */
//
// function findLargest(array) {
//     let largest = array[0];
//     for(let num of array) {
//         if(num > largest) {
//             largest = num;
//         }
//     }
//     return largest;
//
// }
// console.log(findLargest([12, 90, 78, 0, 32]));