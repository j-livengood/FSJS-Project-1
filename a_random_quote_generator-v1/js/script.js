/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Frankly, my dear, I don't give a damn.",
    source: 'Rhett Butler',
    actor: 'Clark Gable',
    //citation: 'Gone With the Wind',
    year: 1939
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    source: 'Don Vito Corleone',
    actor: 'Marlon Brando',
    citation: 'The Godfather',
    //year: 1972
  },
  {
    quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    source: 'Terry Malloy',
    actor: 'Marlon Brando',
    //citation: 'On the Waterfront',
    year: 1954
  },
  {
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    source: 'Dorothy',
    actor: 'Judy Garland',
    citation: 'The Wizard of Oz',
    //year: 1939
  },
  {
    quote: "Here's looking at you, kid.",
    source: 'Rick Blaine',
    actor: 'Humphrey Bogart',
    //citation: 'Casablanca',
    year: 1942
  }
];


/***
 * `getRandomQuote` function
***/
const getRandomQuote = arr => quotes[Math.floor(Math.random() * arr.length)];


/***
 * `printQuote` function
***/
const printQuote = () => {
  let quote = getRandomQuote(quotes);
  let htmlString = `<p class="quote">${quote.quote}</p>
                    <p class="source">${quote.source}`

  if (quote.hasOwnProperty('citation') === true) {
    htmlString += `<span class="citation">${quote.citation}</span>`
  };

  if (quote.hasOwnProperty('year') === true) {
    htmlString += `<span class="year">${quote.year}</span>`
  };

  htmlString += `</p>`;

  return htmlString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);