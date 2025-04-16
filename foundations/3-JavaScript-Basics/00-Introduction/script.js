console.log("Hello World!")

 // 1. Declaring
let name1 = "Martina";
let surname = "Musterfrau";
console.log(name1);
console.log(surname);

// 2. Reassigning
let age1 = 25;
age1 = 26;
console.log(`Martina is ${age1} years old.`);

// Number exercises
// 1
console.log(23 + 97);                   // 120
console.log(14 * 3 + 78 * (3+2)- 2);    //430
console.log((4 + 6 +9) / 77);           // 0.2465

// 2
let a = 10;         
console.log(a);                         // 10
a = 27;
console.log(a);                         // 27
let b = 7 * a;
console.log(b);                         // 189

// 3
const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);                // 0.771....

// 4 
// More exercises https://javascript.info/operators
let a1 = 1, b1 = 1;
let c = ++a1; // ?? → 2, prefix form returns the new value
let d = b1++; // ?? → 1, postfix form returns the old value
console.log(c, d);

// 5
let a2 = 2;
let x2 = 1 + (a2 *= 2); 
console.log(a2, x2);    // a2 = 4, x2 = 5

// 6
console.log("Space");
console.log("" + 1 + 0);        // guess: 1, answer: 10
console.log("" - 1 + 0);        // guess: -1?, answer: -1 ✔️
console.log(true + false);      // guess: 1, answer: 1 ✔️
console.log(6 / "3");           // guess: ???, answer: 2
console.log("2" * "3");         // guess: 23, answer: 6
console.log(4 + 5 + "px");      // guess: 9px, answer: 9px ✔️
console.log("$" + 4 + 5);       // guess: $4?, answer: $45 ❌✔️
console.log("4" - 2);           // guess: 4, answer: 2 
console.log("4px" - 2);         // guess: ??, answer: NaN
console.log("  -9  " + 5);      // guess: -4??, answer: -9 5
console.log("  -9  " - 5);      // guess: -14?, answer: -14 ✔️
console.log(null + 1);          // guess: null, answer: 1
console.log(undefined + 1);     // guess: 1, answer: NaN
console.log(" \t \n" - 2);      // guess: ???, answer: -2

// 7
// prompt = displays a dialog box that prompts the user for input
// alert = displays an alert box with a message and an OK button
// let a3 = Number(prompt("First number?", 1));
// let b3 = Number(prompt("Second number?", 2));
// Input is always a string - convert string with Number() or prepending +prompt()
// alert(a3 + b3); // 12


// Increment & Decrement, pre- & postfixing Exercises (redone)
// 1
let a9 = 1, b9 = 1;
let c9 = ++a9; 
let d9 = b9++; 
console.log(a9, b9, c9, d9); // guess: 2, 2, 2, 1 ✔️

// 2
let a90 = 2;
let x90 = 1 + (a90 *= 2);
console.log(a90, x90); // guess: 4, 5 ✔️