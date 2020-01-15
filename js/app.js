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
}

let randomNum = getRandomNum();


/***
 * `getRandomQuote` function, use the randomNum to index one of the quotes.
***/
const getRandomQuote = function() {
  
  let randomQuote = quotes[randomNum];
  return randomQuote;
}
console.log(getRandomQuote());
/***
 * `getRandomColor` function uses the randomNum to generate a color.
***/
const getRandomColor = function(){  
  let randomColor = colors[randomNum];
  return randomColor;
}
console.log(getRandomColor());
/***
 * `printQuote` function
***/
const printQuote = function(randomQuote, randomColor) {
  document.getElementById("quote-box").innerHTML =`
  <p class="quote" style ="color: ${randomColor}">
  ${randomQuote}
  Every great developer you know got there by solving problems they were
  unqualified to solve until they actually did it.
</p>
<p class="source">
  Patrick McKenzie<span class="citation">Twitter</span
  ><span class="year">2016</span>
</p>
  `  
}
console.log(printQuote())

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//changing style color via JS:  document.getElementById('').style.color =`${}`;
document.getElementById('load-quote').addEventListener("click", printQuote, false);