import consonants from '../data/th/consonants.json'
import vowels from '../data/th/vowels.json'
import {FC, useEffect} from "react"
import AudioButton from "./AudioButton.tsx";
import {AppDispatch, RootState} from "../state/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setLastKey, setLetter, setPronunciation} from "../state/slices/cardSlice.ts";
import {getCleanName} from "../utils/common.ts";

const FlashCard: FC<FlashCardProps> = ({ category }) => {
  const {letter, lastKey, pronunciation} = useSelector((state: RootState) => state.card)
  const dispatch = useDispatch<AppDispatch>();
  const letters = category === 'consonant' ? consonants : vowels;

  const getRandom = () => {
    let key: number;
    do {
      key = Math.floor((Math.random() * letters.length))
    } while (key == lastKey)

    dispatch(setCategory(category))
    dispatch(setLetter(letters[key]))
    dispatch(setLastKey(key))
    dispatch(setPronunciation(false))
  }

  useEffect(() => {
    getRandom();
  }, []);

  if (letter === null) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div className="flash-card text-center flex flex-col justify-between">
      <div className="h-full">
        <h2 className={`font-bold h-3/5 th-bold ${category} ${getCleanName(letter.english)}`}>{letter.thai}</h2>
        <div className="flex justify-center items-center h-1/5">
          {pronunciation
            ?
            <div className="pronunciation">
              <div className="text-3xl font-bold py-2 my-bold">{letter.burmese}</div>
              <div className="text-3xl font-bold py-2">{letter.english}</div>
            </div>
            :
            <button className="rounded-full bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg px-10 py-2"
                    onClick={() => dispatch(setPronunciation(true))}>See Pronunciation</button>
          }
        </div>
        <div className="audio flex justify-center h-1/5">
          <AudioButton/>
        </div>
      </div>
      <div>
        <button className="rounded-full bg-green-700 hover:bg-green-600 text-white font-bold text-3xl my-5 px-10 py-2"
                onClick={getRandom}>Next
        </button>
      </div>
    </div>
  )
}

export default FlashCard;
