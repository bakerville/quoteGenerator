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
 * `getRandomNum function to generate a random Number 0 -19
***/

const getRandomNum = ()=> Math.floor(Math.random()*20);  


let randomNum = getRandomNum();


/***
 * `getRandomQuote` function, use the randomNum to index one of the quotes.
***/
const getRandomQuote = function() {  
  let randomQuote = quotes[randomNum].quote;  
  return randomQuote;
}
let newQuote = getRandomQuote();
/***
 * `getRandomColor` function uses the randomNum to generate a color.
***/
const getRandomColor = function(){  
  let randomColor = colors[randomNum];
  return randomColor;
}

let newColor = getRandomColor();
/***
 * `printQuote` function
***/
const printQuote = function(randomQuote, randomColor) {
  document.getElementById("quote-box").innerHTML =`
  <p class="quote" >
  ${newQuote}
  
</p>
<p class="source">
  Patrick McKenzie<span class="citation">Twitter</span
  ><span class="year">2016</span>
</p>
  `  
}
// style ="background: ${newColor}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
