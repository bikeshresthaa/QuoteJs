import { quotesManager } from "./quotes_handler.js";

const initializeEventListeners = function (){
    
    let fontSelector = document.getElementById('font-select');
    fontSelector.addEventListener('change', fontHandler);

    let categorySelector = document.getElementById('quote-category');
    categorySelector.addEventListener('change', categoryHandler);

    categorySelector.dispatchEvent(new Event('change'));
    fontSelector.dispatchEvent(new Event('change'));

    let randomBtn = document.getElementById('random-quote-btn');
    randomBtn.addEventListener('click', randomHandler);

}

const randomHandler = function(){
  let selectedCategory = document.getElementById('quote-category').value;
  let quoteList = quotesManager(selectedCategory);
  displayQuote(quoteList.getRandomQuote());

}

const fontHandler = function(){
  let currentFont = this.value;
  const quote = getQuoteDisplay();
  quote.style.fontSize = currentFont;
}

const categoryHandler = function() {
  let currentCategory = this.value;
  const quoteList = quotesManager(currentCategory);
  displayQuote(quoteList.getQuote());

}

const displayQuote = function(content){
  let quoteDisplay = getQuoteDisplay();
  quoteDisplay.textContent = "";
  quoteDisplay.textContent = content;
}

const getQuoteDisplay = function(){
  return document.querySelector('.quote');
};

export { initializeEventListeners };