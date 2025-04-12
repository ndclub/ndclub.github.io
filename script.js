// Display a random quote on each page refresh
window.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Hard work beats talent when talent doesn't work hard. - Tim Notke",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('random-quote').textContent = randomQuote;
});
