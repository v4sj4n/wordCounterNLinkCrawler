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
    "a",
    "an",
    "for",
    "our",
    "mine",
    "yours",
    "his",
    "hers",
    "theirs",
    "at",
    "and",
  ]
  const [text, setText] = useState("")
  const [top10Frequency, setTop10Frequency] = useState([])

  const wordFormatter = (word) => {
    const formattedWord = word.toLowerCase().replace(/[^a-z0-9]+/gi, "")
    return formattedWord
  }

  const handleSubmit = () => {
    if (!text) return "no words submited"
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
    const sortedFrequency = Object.entries(frequency).sort(
      (a, b) => b[1] - a[1]
    )
    const top10Frequency = sortedFrequency.slice(0, 10)

    setTop10Frequency(top10Frequency)
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
      {top10Frequency && (
          <>
            <h2>results:</h2>
            {top10Frequency === "no words submited" ? (
              <p>Please put some words in the textarea</p>
            ) : (
              top10Frequency.map((el) => (
                <p key={el[0]}>
                  <span>{el[0]}</span> : {el[1]} time{el[1] > 1 ? "s" : ""}
                </p>
              ))
            )}
          </>
        )}
    </div>
  )
}

export default WordCounter
