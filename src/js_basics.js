// let name = "Akash";
// let age = 20;
//  const course = "React Native";
//
//  console.log(name + " is " + age + " years old and is learning " + course + ".");
//
// let x = 2;

//Conditional Statements
// if (x>5){
//     console.log("x is greater than 5");
// }else{
//     console.log("x is less than 5");
// }

// let x = 10;
// if (x > 15) {
//     console.log("x is greater than 15");
// } else if (x > 10) {
//     console.log("x is greater than 10 but less than or equal to 15");
// } else if (x > 5) {
//     console.log("x is greater than 5 but less than or equal to 10");
// } else {
//     console.log("x is less than or equal to 5");
// }

//
// let x= "apple";
//
// switch(x){
//     case "apple":
//         console.log("X is an apple.");
//         break;
//
//         case "banana":
//             console.log("X is an banana.");
//             break;
//
//             case "orange":
//                 console.log("X is an orange.");
//                 break;
//
//                 default:
//                     console.log("X is something else.");
//
// }

// let x = 20;
// let y = 30;
// let min;
//
// min = (x<y)? x:y;
//
// console.log(min + " is the smaller value between " + x, "and " + y);

//LOOPS

//standard for loop
//
// for(let i = 0; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i + " is even.");
//     }
//     else if(i == 0){
//         console.log(i + " is neither even nor odd.");
//     }else{
//         console.log(i + " is odd.");
//     }
// }
//
//for - in loop
//
//
// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2023
// }
//
// for(const key in car) {
//     console.log(`${key} : ${car[key]}`);
//  }
// let fruits = ["banana","apple","guava"]
// for(const index in fruits){
//     console.log(index);
// }
// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// const username = "theskybiswal_";
// const password = "happyhappy";
//
// let username_id = prompt("Enter your username");
// let check_password = prompt("Enter your password");
//
// if (check_password !== password) {
//     console.log("Passwords don't match");
// }else{
//     console.log("Welcome " + username);
// }
//The above program will run on browser.
// But since Node.js doesn't have the prompt attribute, we need to use Readline module in node.js
/*
------------------------------------------------------------------------------------------------------------------------
 */
/*
1. Write a program that prints the numbers from 1 to 50.
But for multiples of 3, print "Fizz" instead of the number,
and for the multiples of 5, print "Buzz."
For numbers which are multiples of both 3 and 5, print "FizzBuzz."
 */

// for (let i = 1; i <= 50; i++) {
//     if (i % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


