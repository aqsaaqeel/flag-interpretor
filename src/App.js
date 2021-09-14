import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇮🇳": "India",
  "🇳🇪": "Niger",
  "🇹🇯": "Tajikistan",
  "🇭🇺": "Hungary",
  "🇮🇪": "Ireland",
  "🇲🇱": "Mali",
  "🇷🇴": "Romania",
  "🇹🇩": "Chad"
};

var flagsWeKnow = Object.keys(flagDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry we have no idea about this flag";
    }
    setMeaning(meaning);
  }

  function emojiClickChangeHandler(flag) {
    var meaning = flagDictionary[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Flags often confused </h1>
      <input onChange={emojiInputChangeHandler} />
      <div> {meaning} </div>

      <h3> Flags we know of </h3>
      {flagsWeKnow.map(function (flag) {
        return (
          <span
            onClick={() => emojiClickChangeHandler(flag)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
