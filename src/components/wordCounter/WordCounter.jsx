import "./WordCounter.scss"
import { useState } from "react"

function WordCounter() {
  const prepositionArray = [
    "the",
    "etc",
    "of",
    "but",
    "so",
    "in",
    "to",
    "per",
    "as",
    "till",
    "on",
    "a"
  ]
  const [text, setText] = useState("")

  const wordFormatter = (word) => {
    const formattedWord = word.toLowerCase().replace(/[^a-z0-9]+/gi, "");
    return formattedWord;
  };

  const handleSubmit = () => {
    if (!text) return "no words"
    const separatedTextArray = text.split(" ")
    const frequency = {}
    separatedTextArray.map((word) => {
      const formattedWord = wordFormatter(word)
      if (frequency[formattedWord]) frequency[formattedWord] += 1
      else {
        if (prepositionArray.includes(formattedWord)) return
        frequency[formattedWord] = frequency[formattedWord] = 1
      }
    })
    console.log(frequency)
  }

  return (
    <div className="wc-container">
      <h2>WordCounter</h2>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          cols="30"
          rows="10"
        />
        <input type="button" value="submit" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default WordCounter
