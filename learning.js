/*
 * This is used to store all of the ways to 'do' javascript and programming in general using examples.
 */

//Basics

/**
 * Variables
 * const variables cannot be reassigned but can be modified, const should be used for things that cshouldnt change
 * let variables can be reassigned and should be used for things that should change like number of wins
 */
const pi = 3.14;
let wins = 1;

/**
 * Methods/Functions
 * Methods can be declared in 3 ways, the first is using the simple outdated function keyword, and the remaining 2 being ES6 shorthand and arrow function
 */

//function keyword
function myFunction1(int){
    console.log(int);
}

//ES6 shorthand
const myObject = {myMethod(int){
      console.log(int);
    }
};

//ES6 Arrow function (!Preffered!)
const myFunction2 = (int) =>{
    console.log(int);
}

//Calling methods/functions
myFunction1(pi);
myObject.myMethod(pi);
myFunction2(pi);

/**
 * ...
 * This can be used for rest parameters and spread parameters
 * Spread parameters allows an array to be spread into its individual elements
 * rest parameters takes multiple individual elements and condenses them into a single element
 */

//Spread Parameters
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers2 = [1, 2, 3];
  
  console.log(sum(...numbers2));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers2));
  // Expected output: 6  

//Rest parameters
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10

//Conditions

/**
 * If statements
 * If statements are used to check conditions before writing code you can use multiple if statements chanied together and an else statement at the end
 * Else statements are not mandatory
 * If you are intending to use multiple if statements it is better to use switch statements instead
 * If using multiple 'nested' if statements reconsider how you structure your code
 */
if (int=3.14){
    console.log(int);
}
else{
    console.log('not pi')
}

/**
 * Switch statements
 * switch statements are used to check an input and run different code depending on what the input is.
 * these are used instead of if statements if there are a lot of options to check
 * each check is an option in the switch and the default is used if the input doesn't match any case
 */
switch (pi){
    case 1:
        console.log('1');
    break;
    case 2:
        console.log('2');
    break;
    case 3:
        console.log('3');
    break;
    case 3.14:
        console.log('pi');
    break;
    default:
        console.log('not pi');
}

/**
 * Shorthand
 * you can do single line if/else statements in JS and some other languages to save space
 * the shorthand is writen in this format:
 * condition ? expressionIfTrue : expressionIfFalse;
 */
let result = (pi=3.14 ? console.log('is pi') : console.log('not pi'))
console.log(result);

//Loops

/**
 * For loop
 * A for loop is used when you want code to run multiple times for a set ammount of time 
 * there are 4 steps in a for loop with step 0 only looping once:
 * 0: let i = 1
 * 1: i <= 5
 * 2: your code
 * 3: i++
 * once started the code will loop through steps 1,2,3 until the condition in step 1 are met
 */
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/**
 * While loop
 * A While loop is used when you want to create a loop where you want to loop for an inknown ammount of time or until some condition other than ammount of loops is met
 * there are only 2 steps for a While loop being the condition check then the code
 */
let i = 3;
while (i = pi) {
    i + 0.01;
}

//Array

/**
 * Array
 * Array are a way of storing multiple points of data in one variable/object
 * Each item in an array has a index number, starting at 0, and the data.
 * Arrays are technically objects and can be treated as such, meaning you can assign functions to an array position
 * You can add to an array by modifying a position that has not yet been initialised, be careful as that could add holes in the array e.g. 6 is added but 5 is not
 */
//Initialising
const numbers = [1,2,4,3,5];
const cars = new Array('Ford','Audi','BMW');//const array = new Array(10) creates an array with 10 undefined elements

//Accessing
let number = numbers[1];//2

//Modifying existing index
cars[1] = 'Nisan';

//.toString()
const allNumbers = cars.toString();//'Ford,Nisan,BMW'

//.length;
meats.length;//3

//Accessing from the back
let car = cars[cars.length - 1];

//.sort;
numbers.sort;//'1,2,4,3,5 -> 1,2,3,4,5'

//.forEach();
function test1(){console.log('car')}
cars.forEach(test1);//car
                    //car
                    //car

//.push 
cars.push('Mini');//Ford,Nisan,BMW,Mini

//Common objects

/**
 * HTML Dom Editing
 * document.
 * The document keyword is used when you want to access tags on the DOM
 * You can use methods like 'getElementById()' to access a specific tag using its id in order to edit its properties
 * For more info follow this link:
 * https://www.w3schools.com/js/js_htmldom_html.asp
 */
document.getElementById(btnId).style.backgroundColor = "Black";
document.getElementById("info").innerHTML = "Click on a square to invert it's color and the adjacent squares too.";

/**
 * Math.
 * can be used for manipulating numbers
 * For more info follow this link:
 * https://www.w3schools.com/js/js_math.asp
 */

//random
const getRandomArbitrary = (min,max) => Math.random() * (max - min) + min;
getRandomArbitrary(0,10);//random number between 0-10 inclusive

//round
const roundedNumber = Math.round(pi);
console.log(roundedNumber);//3

//Errors
//https://www.w3schools.com/js/js_errors.asp

/**
 * try/catch
 * try catch is used when an error could occur so you need to catch the error so it doesnt crash the program
 * it is writen as such:
 * try {
 *   Block of code to try
 *}
 *catch(err) {
 *   Block of code to handle errors
 *} 
 */
try {
    adddlert("Welcome guest!");//*adddlert is supposed to be alert
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}

/**
 * Throw
 * The throw statement allows you to create a custom error.
 * Technically you can throw an exception (throw an error).
 * The exception can be a JavaScript String, a Number, a Boolean or an Object:
 */
throw "Too big";    // throw a text
throw 500;          // throw a number

/**
 * Finally
 * The finally keyword is used after try catch in order to perform critical cleanup operations when the program crashes
 * 
 */
let file = openFile("example.txt");

try {
  // Code that interacts with the file
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  // Ensure the file is always closed
  closeFile(file);
}