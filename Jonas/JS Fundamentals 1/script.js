// let js = 'amazing';
// // if(js==='amazing') alert('Javascript is FUN');
// // 40+8+23+78;
// console.log(40+8+23+78);

// console.log('Ahraz Arfi');
// console.log(79);

// //VALUES AND VARIABLES
// /* we can store values into variables using the let keyword
// this is called declaring a variable.
// suppose a variable is a box which can hold some things. We can write a label on the box to find it later or reuse it. Variable works exactly in the same way where the variable name is the label and the value is the thing according to the above analogy. */

// let firstName = "Ahraz";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //Conevntions and rules for naming variables
// /* 
// --->camelCase convention
//     example -> firstName, firstNameAndLastName.
//     - it is a convention to not start variable name with an UPPERCASE letter as that is used in OOP JS.
//     - variable names should be descriptive.
// ---> Some hard rules for naming variables
//     - varible names can only contain letters, numbers, underscore _,  or dollar $ sign. Ex- ab&ad (illegal), $abc (legal).
//     - variable names should not be reserve keywords in JS. ex- new, function
//     - Variables cannot start with a number. Ex- 3abc (illegal variable  name)

// */

// /* let 3ac = 4;
// let $3a&c = 4;
// let a.bc = 4;
// let function = 5; 

// ALL THE ABOVE ARE ILLEGAL VARIABLE NAMES.

// */
// let a_bc = 8;
// let _abc = 4
// let $3ac = 4;

// let PI = 3.14; //uppercase for a constant

// let myFirstJob = 'freelancer'; //descriptive variable name
// let myCurrentJob = 'Marketer'; //descriptive variable name

// let job1 = 'freelancer';
// let job2 = 'marketer';

// /* 
// // DATA TYPES

// In JS, every value is either an object or a primitive value. A value is only a primitive when its not an object.

// //Primitive Data Types
// There are 7 primitive data types in JS.
//     ->number
//         floating point numbers, always used for decimals and integers. even if a number doesnt have a decimal point such as let age = 23 is exactly like having 23.0.
    
//     ->Strings
//         they are simply a sequence of characters, always in quotes, either single or double.
//         ex-  let firstName = "Ahraz"

//     ->Boolean
//         it is a logical data type that can only be true or false, used for taking decisions. ex- let fullAge = true; let isPrime = False;

//     ->Undefined
//         It is the value taken by a variable that is not yet defined i.e., empty value. ex- let children;

//     ->Null
//         also means empty value.

//     ->Symbol
//         introduced in ES2015/ES6, a value that is unique and cannot be changed.

//     ->BigInt
//         introduced in ES2020, it can hold larger integers than Number can hold.

// ->JS has dynamic typing
//     it is not needed to manually define the data type of a value stored in a value, it is determined automatically.
    
//     An important point to note here is that unlike most languages, variables in JS do not have a data type, they are simply a placeholder/box for the value and it is the value which has a data type.
//     An implication of this is apparent in the fact that we can assign a value with a different data type to the same variable.
//     This can also be the source of some difficult to find bugs.

// */

// //illustrating dynamic typing
// let abc = 45; // here abc holds a value 45 which is of data type: Number
// console.log(abc);
// abc = 'Arfi'; // now abc holds a value 'Arfi' which is of the data type: String
// console.log(abc);


// //BOOLEAN
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// //typeof operator
// let a = typeof(javascriptIsFun);
// console.log(a);
// console.log(typeof(javascriptIsFun));
// console.log(typeof javascriptIsFun);
// console.log(typeof 45);
// console.log(typeof true);
// console.log(typeof 'ahraz');

// javascriptIsFun = "YES"; //type changed because of dynamic typing in JS
// console.log(typeof javascriptIsFun);

// //undefined variable
// let age;
// console.log(age);
// console.log(typeof age);

// age = 1999;
// console.log(typeof age);

// //null variable
// let calls = null;
// /* This is a bug in the typeof operator in JS. The type of varible: calls should have been null but instead it returns the type as object. This bug is not corrected because of legacy reasons. */
// console.log(typeof calls);
// console.log(typeof null); 


// //let, const, and var
// /* 
// ->let and const were introduced in ES2015/ES6 whereas var is older. We should always try to use const if the value is not going to change later as it is more secure as well as makes the code less prone to errors.
// ->let should be used when the value is going to be changed somewhere later on in the code or in cases where a variable name is declared without any value.
// ->we cannot use const to just declare a variable without initializing it as it will give an error: Missing initializwr in const declaration.
// ->We cannot modify a variable that is declared as const. It's value will always remain the same.
// Examples for this are given below:
// */

// const ab = 45;
// // ab = 46; //gives an error
// // ab = "ahraz"; // gives an error
// //const fb; //gives error
// let $b = 4; //legal
// var $c = 5; //legal
// var $d; //legal
// $d = 85; //legal
// $d = "Arfi"; //legal