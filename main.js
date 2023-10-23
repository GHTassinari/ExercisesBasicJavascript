/* 1) Create a script that shows the message "Hello World" as an alert at your browser */

alert("Hello World!");

/* 2) Create a script that declare two variables and show their sum result */

const variableSum1 = 15;
const variableSum2 = 20;
const resultSum =
  variableSum1 +
  variableSum2; /* Both are numbers, so there is no need to use Number() */
alert(`${resultSum} is the value of the sum between two declared numbers`);

/* 3) Create a script that declares a variable and verifies if the value is a number. If it is, show the message: It is a number. If it isn't, show the message:
It isn't a number.*/

const myVariable = 42;

if (typeof myVariable === "number") {
  /* === checks if the value of var, and their type are equal */
  alert(`${myVariable} is a number.`);
} else {
  alert(`${myVariable} isn't a number.`);
}

/* 4) Create a script that declares a variasble and verifies if its value is a string. If it is, show te message "It is a string", if it isn't show the message
"It isn't a string" */

const myVariable2 = "Variável";

if (typeof myVariable2 === "string") {
  /* === checks if the value of var, and their type are equal */
  alert(`${myVariable2} is a string.`);
} else {
  alert(`${myVariable2} isn't a string.`);
}

/* 5) Create a script that declares a variasble and verifies if its value is a boolean. If it is, show the message: "It is a boolean"
if it isn't, show the message: "It isn't a boolean"*/

const myVariable3 = true;

if (typeof myVariable3 === "boolean") {
  /* === checks if the value of var, and their type are equal */
  alert(`${myVariable3} is a boolean.`);
} else {
  alert(`${myVariable3} isn't a boolean.`);
}

/* 6) Create a script that declares two variables and show the result of their subtraction */

const variableSubtraction1 = 15;
const variableSubtraction2 = 20;

const resultSubtraction = variableSubtraction1 - variableSubtraction2;
alert(
  `${resultSubtraction} is the value of the subraction between two declared numbers`
);

/* 7) Create a script that declare two variables and show the result of their multiplication */

const variableMultiplication1 = 50;
const variableMultiplication2 = 40;

const resultMultiplication = variableMultiplication1 * variableMultiplication2;
alert(
  `${resultMultiplication} is the value of the multiplication between two declared numbers`
);

/* 8) Create a script that declare two variables and show the result of their division */

const variableDivision1 = 360;
const variableDivision2 = 60;
const resultDivision = variableDivision1 / variableDivision2;
alert(
  `${resultDivision} is the value of the division between two declared numbers
`);

/* 9) Create a script that declares a variable, and verifies if the number is a even number, If it is, show the message: "It is an even number". If it isn't, show the message:
"It isn't an even number" */

const myVariable4 = 60;

if (myVariable4 % 2 === 0) {
  alert(`${myVariable4} is an even number`);
} else {
  alert(`${myVariable4} isn't an even number`);
}

/* 10) Create a script that declares a variable, and verifies if the number is a odd number, If it is, show the message: "It is an odd number". If it isn't, show the message:
"It isn't an odd number" */

const myVariable5 = 71;

if (myVariable5 % 2 != 0) {
  alert(`${myVariable5} is an odd number`);
} else {
  alert(`${myVariable5} isn't an odd number`);
}
