/***
 Directions For Random Quote Generator
***/ 
/* getRandomQuote that returns a random object from the quotes array.
*/
/*
function named printQuote that calls the "getRandomQuote" function. It prints the quote to the page using the "example HTML string format"
*/
/****
EXTRAS
****/
/*
Quotes change automatically after a certain amount of time passes [ use setTimeout()]. Background color changes each time the quote changes.
*/


/***
 * `getRandomNum function to generate a random Number
***/
const getRandomNum = function(){
  return Math.floor(Math.random()*20);
  return randomNum;
}
console.log(getRandomNum())

/***
 * `getRandomQuote` function, use the randomNum to index one of the quotes.
***/
const getRandomQuote = function() {
  
}

/***
 * `getRandomColor` function uses the randomNum to generate a color.
***/
const getRandomColor = function(){

}

/***
 * `printQuote` function
***/
const printQuote = function() {

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);