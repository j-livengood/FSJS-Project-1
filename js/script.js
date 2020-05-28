// An array of famous movie quotes with:
//character(source), 
//actor, <--extra property
//movie(citation), 
//and year
let quotes = [
  {
    quote: "Frankly, my dear, I don't give a damn.",
    source: 'Rhett Butler',
    actor: 'Clark Gable',
    year: 1939
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    source: 'Don Vito Corleone',
    citation: 'The Godfather'
  },
  {
    quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    source: 'Terry Malloy',
    actor: 'Marlon Brando',
    year: 1954
  },
  {
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    source: 'Dorothy',
    actor: 'Judy Garland',
    citation: 'The Wizard of Oz'
  },
  {
    quote: "Here's looking at you, kid.",
    source: 'Rick Blaine',
    year: 1942
  },
  {
    quote: "Go ahead, make my day.",
    source: 'Harry Callahan',
    actor: 'Clint Eastwood',
    citation: 'Sudden Impact',
    year: 1983
  },
  {
    quote: "All right, Mr. DeMille, I'm ready for my close-up.",
    source: 'Norma Desmond',
    citation: 'Sunset Boulevard',
    year: 1950
  },
  {
    quote: "May the Force be with you.",
    source: "Lot's of characters",
    citation: 'Star Wars'
  },
  {
    quote: "Fasten your seatbelts. It's going to be a bumpy night.",
    source: 'Margo Channing',
    citation: 'All About Eve',
    year: 1950
  },
  {
    quote: "You talking to me?",
    source: 'Travis Bickle',
    actor: 'Robert DeNiro',
    citation: 'Taxi Driver'
  }
];



// This function generates a random number
// and uses that number to pull a quote
// out of the quotes array
const getRandomQuote = arr => arr[Math.floor(Math.random() * arr.length)];



// This function calls getRandomQuote and creates 
// and html string that it then stores in the html.
// It also checks for citation, actor, and year properties.
const printQuote = () => {
  let quote = getRandomQuote(quotes);
  let htmlString = `<p class="quote">${quote.quote}</p>
                    <p class="source">${quote.source}`;

  if (quote.actor) {
    htmlString += `<span class="year">as portrayed by ${quote.actor}</span>`
  };

  if (quote.citation) {
    htmlString += `<span class="citation">${quote.citation}</span>`
  };

  if (quote.year) {
    htmlString += `<span class="year">${quote.year}</span>`
  };

  htmlString += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlString;
};



//This function creates a random RGB color value
//and stores it as the background color
const randomColor = () => {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}



//Combine printQuote and randomColor into one function
const quoteAndColor = () => {
  printQuote();
  randomColor();
}


//Call the printQuote and randomColor function when the window loads
window.onload = quoteAndColor();



//Call the functions at a 10 second interval
window.setInterval(quoteAndColor, 5000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", quoteAndColor, false);