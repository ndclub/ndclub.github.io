  window.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      "Merci Beaucoup",
      "Welcome to the cool kids club!",
      "C'est légal parce que je le veux",
      "You should read the Inner Game of Tennis",
      "Never settle my friend, life is a long one, not for the faint of heart",
      "My dog's name is Badger! I love him very much!",
      "If you live each day as if it was your last, someday you most certainly will be right"
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('random-quote').textContent = randomQuote;
  });
  
