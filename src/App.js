import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({
    text: "To be or not to be, that is the question",
    by: "William Shakespeare",
  });

  const handleClick = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let rando = data[Math.floor(Math.random() * data.length)];
        let makeQuote = { text: rando.text, by: rando.author };

        let dataCleaner = (x) => {
          if (x.text === null || x.text.length === 0) {
            x.text =
              "Life is what happens to you while you're busy making other plans";
            x.by = "John Lennon";
            return x;
          }
          if (x.by === null || x.by.length === 0) {
            x.by = "Anon";
            return x;
          } else {
            return x;
          }
        };
        dataCleaner(makeQuote);
        setQuote(makeQuote);
      });
  };

  return (
    <div id="quote-box">
      <div id="div1">
        <h1 id="text">"{quote.text}"</h1>
        <h3 id="author">-{quote.by}</h3>
      </div>

      <div id="div2">
        <button id="new-quote" onClick={handleClick}>
          New quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?hashtags=FCC&related=freecodecamp&text= "${quote.text}" - ${quote.by}`}
          target="_blank"
          id="tweet-quote"
        >
          <button>Tweet</button>
        </a>
      </div>
    </div>
  );
}

export default App;
