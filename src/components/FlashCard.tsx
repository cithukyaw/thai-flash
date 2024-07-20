import consonants from '../data/thai/consonants.json'
import {FC, useEffect, useState} from "react"
import AudioButton from "./AudioButton.tsx";

const FlashCard: FC = () => {
  const [letter, setLetter] = useState<Letter>(consonants[0])
  const [pronunciation, setPronunciation] = useState(false)

  const getRandom = () => {
    const key: number = Math.floor((Math.random() * consonants.length))
    setLetter(consonants[key])
    setPronunciation(false);
  }

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <div className="flash-card text-center">
      <div className="card-body">
        <h2 className="text-9xl font-bold">{letter.thai}</h2>
        { pronunciation
          ?
          <div className="pronunciation">
            <div className="text-3xl font-bold py-2">{letter.burmese}</div>
            <div className="text-3xl font-bold py-2">{letter.english}</div>
          </div>
          :
          <button className="rounded-md bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg my-3 px-10 py-2"
                  onClick={() => setPronunciation(true)}>See Pronunciation</button>
        }
        <div className="audio flex justify-center py-2">
          <AudioButton />
        </div>
      </div>
      <div className="card-footer">
        <button className="rounded-md bg-green-700 hover:bg-green-600 text-white font-bold text-3xl my-3 px-10 py-2"
                onClick={getRandom}>Next
        </button>
      </div>
    </div>
  )
}

export default FlashCard;
