import "./WordCounter.scss"
import { useState } from "react"
import { prepositionArray } from "../../prepositionArray"

function WordCounter() {
  
  const [text, setText] = useState("")
  const [top10Frequency, setTop10Frequency] = useState([])
  const wordFormatter = (word) => {
    const formattedWord = word.toLowerCase().replace(/[^a-z0-9]+/gi, "")
    return formattedWord
  }

  const handleSubmit = () => {
    if (!text.trim()) return "no words submitted"
    const separatedTextArray = text.split(/\s+/)
    const frequency = {}
    separatedTextArray.forEach((word) => {
      const formattedWord = wordFormatter(word)
      if (
        formattedWord.length === 0 ||
        prepositionArray.includes(formattedWord)
      )
        return
      frequency[formattedWord] = (frequency[formattedWord] || 0) + 1
    })
    const sortedFrequency = Object.entries(frequency).sort(
      (a, b) => b[1] - a[1]
    )
    const top10Frequency = sortedFrequency.slice(0, 10)
    console.log(top10Frequency)
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
      {top10Frequency.length > 0 ? (
        <>
          <h2>results:</h2>

          {top10Frequency.map((el) => (
            <p key={el[0]}>
              <span>{el[0]}</span> : {el[1]} time{el[1] > 1 ? "s" : ""}
            </p>
          ))}
        </>
      ) : (
        <p>There are no words submitted</p>
      )}
    </div>
  )
}

export default WordCounter
