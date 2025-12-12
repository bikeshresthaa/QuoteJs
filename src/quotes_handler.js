let data = await loadQuotes();

async function loadQuotes(){
  const url = './quotes.json';

  try{
    const response = await fetch(url);

    if(!response.ok){
      const message = `An error occured while fetching quotes: ${response.status}`;
      throw new Error(message);
    }
    const quotes = await response.json();

    return quotes;
  } catch(error){
    console.error("There was a problem fetching quotes.", error);
    displayError();

  }

};

function displayError(){
  const display = document.querySelector('.quote');
  display.textContent = '';
  display.textContent = "There was a problem loading quotes.";
};

function quotesManager(category){
  let currentQuote = 0;
  let quotesList = data.category;
  const quoteLength = quotesList.length;

  const getQuote = function(){
    return fetchQuote(currentQuote);
  }

  const getRandomQuote = function(){
    currentQuote = Math.floor(Math.random() * quoteLength);
    return fetchQuote(currentQuote);
  }

  const getNextQuote = function(){
    currentQuote = (currentQuote + 1) % quoteLength;
    return fetchQuote(currentQuote);
  }

  const getPrevQuote = function(){
    currentQuote = (currentQuote - 1 + quoteLength) % quoteLength;
    return fetchQuote(currentQuote);
  }

  const fetchQuote = function(index){
    return quotesList(index).quote;
  }

  return { getQuote, getRandomQuote, getNextQuote, getPrevQuote };
}

export { quotesManager };