const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const noteInput = document.getElementById('note');
const saveBtn = document.getElementById('save-btn');
const nextBtn = document.getElementById('next-btn');
document.body.style.background = getRandomBackgroundColor();
const favoritesList = document.getElementById('favorites-list');

// 🧠 Local array of 100 motivational quotes
const quotes = [
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  // ... Add 90 more quotes below
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  { quote: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { quote: "Little things make big days.", author: "Isabel Marant" },
  { quote: "It’s going to be hard, but hard does not mean impossible.", author: "Art Williams" },
  // You can continue adding more quotes here...
];

// 🎨 Generate a random pastel background color
function getRandomBackgroundColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 90%)`; // soft pastel tones
}

// 🎯 Select a random quote on page load
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  quoteText.textContent = `"${selected.quote}"`;
  quoteAuthor.textContent = `— ${selected.author}`;

// Change background color
  document.body.style.backgroundColor = getRandomBackgroundColor();
}

// 💾 Save favorite quote with personal note
function saveFavorite() {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;
  const note = noteInput.value.trim();

  if (!quote || !note) {
    alert("Please enter a note before saving.");
    return;
  }

  const entry = document.createElement('li');
  entry.textContent = `${quote} ${author} | Note: ${note}`;
  favoritesList.appendChild(entry);

  noteInput.value = '';
}

// 🚀 Initialize
saveBtn.addEventListener('click', saveFavorite);
nextBtn.addEventListener('click', displayRandomQuote);
displayRandomQuote();
