import quotesData from './quotes.json';


function quotesManager(category){
  let currentQuote = 0;
  let quotesList = quotesData[category];
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
    return quotesList[index].quote;
  }

  return { getQuote, getRandomQuote, getNextQuote, getPrevQuote };
}

export { quotesManager };