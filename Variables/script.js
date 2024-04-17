// Declare a variable age and assign your age to it.
const age = 20;
// Declare a variable name and assign your name to it.
const name = "Ganpat"
// Declare a variable isStudent and assign true if you are a student, otherwise false.
const isStudent = true


// Declare two variables num1 and num2, and assign them any integer values.
const num1 = 20;
const num2 = 10;
// Calculate the sum, difference, product, and quotient of num1 and num2, and store the results in separate variables.
const sum = num1 + num2
const difference = num2 - num1
const quotient = Math.floor(num1 / num2)
// Display the results using console.log().
console.table(sum, difference, quotient);


// Declare two variables firstName and lastName, and assign them your first and last name respectively.
const fName = "Ganpat"
// Concatenate firstName and lastName to form a full name, and store it in a variable fullName.
const lName = "Sundesha"
// Display fullName using console.log().
console.log(fName + " " + lName);


// Declare two variables numA and numB, and assign them any numeric values.
const numA = 20;
const numB = 30;
// Use comparison operators to check if numA is greater than, less than, or equal to numB.
const isGreaterThen = numA > numB
const isLessThen = numA < numB
const isEqual = numA === numB
// Display the results using console.log().
console.table(isGreaterThen, isLessThen, isEqual);


// Declare a variable isAdult and assign a boolean value indicating whether you are an adult or not.
const isAdult = true
// Declare a variable hasLicense and assign a boolean value indicating whether you have a driving license or not.
const hasLicense = true
// Use logical operators to check if someone is eligible to drive(i.e., they are an adult and have a license).
const isEligible = isAdult && hasLicense
// Display the result using console.log().
console.log(isEligible);


// Declare a variable counter and assign it an initial value.
let counter = 12
// Use increment and decrement operators to increase and decrease the value of counter.
counter++
console.log(counter);
counter--
console.log(counter);
++counter
console.log(counter);
--counter
console.log(counter);
// Display the updated value of counter using console.log() after each operation.


// Declare a variable numString and assign it a string containing a numeric value.
const numString = "15"
// Convert numString to a number and store the result in a variable numValue.
const numValue = Number(numString)
// Display the type of numValue using console.log().
console.log(numValue);


// Declare a variable emptyString and assign an empty string to it.
const emptyString = "";
// Use the Boolean() function to check if emptyString is truthy or falsy.
console.log(Boolean(emptyString));
// Display the result using console.log().


// Declare a variable of each data type(string, number, boolean, array, object, function).
const str = "string";
const num = 7;
const boll = true;
const arr = ["test", 15, true];
const obj = {
    name: "Ganpat",
    age: 16,
}
const myFunc = function () {
    console.log("My Function");
}
// Use the typeof operator to check the data type of each variable.
console.log(typeof str);
console.log(typeof num);
console.log(typeof boll);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunc);
// Display the results using console.log().


// Declare variables a, b, c, and d, and assign them any numeric values.
const a = 2
const b = 4
const c = 6
const d = 8
// Write an expression involving arithmetic operators(+, -, *, /) and parentheses to calculate a value using these variables.
const opration = a + b - c * d / b
// Display the result using console.log().
console.log(opration);