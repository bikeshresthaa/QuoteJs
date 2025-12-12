import { quotesManager } from "./quotes_handler.js";

const initializeEventListeners = function (){

  const handleNext = function(){
    displayQuote(currentCategoryList.getNextQuote());
  }

  const handlePrev = function(){
    displayQuote(currentCategoryList.getPrevQuote());
  }
  
  const randomHandler = function(){
    displayQuote(currentCategoryList.getRandomQuote());
  }
  
  const fontHandler = function(){
    let currentFont = this.value;
    const quote = getQuoteDisplay();
    quote.style.fontSize = currentFont;
  }
  
  const categoryHandler = function() {
    currentCategoryList = quotesManager(this.value);
    displayQuote(currentCategoryList.getQuote());
    
  }
  
  const displayQuote = function(content){
    let quoteDisplay = getQuoteDisplay();
    quoteDisplay.textContent = "";
    quoteDisplay.textContent = content;
  }
  
  const getQuoteDisplay = function(){
    return document.querySelector('.quote');
  };
  
  const getCategory = function(){
    return document.getElementById('quote-category').value;
  }
  
  const getQuoteList = function(){
    return quotesManager(getCategory());
  }

  let currentCategoryList = getQuoteList();
  
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', ()=> {
    const body = document.body;
    themeBtn.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
    body.classList.toggle('dark-theme');
  });

  const fontSelector = document.getElementById('font-select');
  fontSelector.addEventListener('change', fontHandler);

  const categorySelector = document.getElementById('quote-category');
  categorySelector.addEventListener('change', categoryHandler);

  categorySelector.dispatchEvent(new Event('change'));
  fontSelector.dispatchEvent(new Event('change'));

  const randomBtn = document.getElementById('random-quote-btn');
  randomBtn.addEventListener('click', randomHandler);

  const nextBtn = document.getElementById('next');
  nextBtn.addEventListener('click', handleNext);

  const prevBtn = document.getElementById('prev');
  prevBtn.addEventListener('click', handlePrev);
}


export { initializeEventListeners };