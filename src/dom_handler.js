
const handleDocumentLoad = function (){
  document.addEventListener('DOMContentLoaded', () => {
    
    let fontSelector = document.getElementById('font-select');
    fontSelector.addEventListener('change', fontHandler);
    
  })
}


const fontHandler = function(){
  let currentFont = this.value;
  const quote = document.querySelector('.quote');

  quote.style.fontSize = currentFont;
}

export { handleDocumentLoad };