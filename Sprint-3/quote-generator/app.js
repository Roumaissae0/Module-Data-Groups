function showRandomQuote() {
  const randomQuote = pickFromArray(quotes);
  document.getElementById("quote").textContent = randomQuote.quote;
  document.getElementById("author").textContent = randomQuote.author;
}

document.getElementById("new-quote").addEventListener("click", () => {
  showRandomQuote();
});

showRandomQuote();