import consonants from '../data/thai/consonants.json'
import {FC, useEffect, useState} from "react"
import AudioButton from "./AudioButton.tsx";

const FlashCard: FC = () => {
  const [letter, setLetter] = useState<Letter>(consonants[0])
  const [lastKey, setLastKey] = useState(0)
  const [pronunciation, setPronunciation] = useState(false)

  const getRandom = () => {
    let key: number;
    do {
      key = Math.floor((Math.random() * consonants.length))
    } while (key == lastKey)

    setLetter(consonants[key])
    setLastKey(key)
    setPronunciation(false);
  }

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <div className="flash-card text-center flex flex-col justify-between h-screen">
      <div className="h-full">
        <h2 className="font-bold h-2/4 th-bold">{letter.thai}</h2>
        <div className="flex justify-center items-center h-1/4">
          { pronunciation
            ?
            <div className="pronunciation">
              <div className="text-3xl font-bold py-3 my-bold">{letter.burmese}</div>
              <div className="text-3xl font-bold py-3">{letter.english}</div>
            </div>
            :
            <button className="rounded-sm bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg px-10 py-2"
                    onClick={() => setPronunciation(true)}>See Pronunciation</button>
          }
        </div>
        <div className="audio flex justify-center h-1/4">
          <AudioButton />
        </div>
      </div>
      <div>
        <button className="rounded-sm bg-green-700 hover:bg-green-600 text-white font-bold text-3xl my-5 px-10 py-2"
                onClick={getRandom}>Next
        </button>
      </div>
    </div>
  )
}

export default FlashCard;
