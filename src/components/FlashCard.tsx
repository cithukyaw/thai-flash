import consonants from '../data/thai/consonants.json'
import {FC, useEffect, useState} from "react"

const FlashCard: FC = () => {
  const [letter, setLetter] = useState<Letter>(consonants[0])

  const getRandom = () => {
    const key: number = Math.floor((Math.random() * consonants.length))
    setLetter(consonants[key])
  }

  useEffect(() => {
    getRandom()
  });

  return (
    <div className="card text-center">
      <h2 className="text-9xl font-bold">{letter.thai}</h2>
      <div className="pronunciation">
        <div className="text-3xl font-bold py-2">{letter.burmese}</div>
        <div className="text-3xl font-bold py-2">{letter.english}</div>
      </div>
      <div className="audio"></div>
      <button className="rounded-md bg-green-700 hover:bg-green-600 text-white font-bold text-lg my-3 px-10 py-2" onClick={getRandom}>Next</button>
    </div>
  )
}

export default FlashCard;
