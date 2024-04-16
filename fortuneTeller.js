// declaring variables for user to input
const mothersName = prompt("What is your mum's name?");
const streetName = prompt('Name of the street you grew up on?');
const favColor = prompt('What was your favorite color as a child?');
const currentAge = Number(prompt('How old are you currently?'));
const pickNum = Number(prompt('Choose a number between 1 and 10'));

// creating a template lteral to output a multiline string
console.log (`In ${pickNum} years you are going to meet your best friend name ${mothersName} ${streetName}.
You will get married in ${currentAge + pickNum} years and have ${currentAge % pickNum} children.
In ${Math.round(currentAge / pickNum)} years you are going to dye your hair ${favColor}.`);
