import consonants from '../data/th/consonants.json'
import {FC, useEffect} from "react"
import AudioButton from "./AudioButton.tsx";
import {AppDispatch, RootState} from "../state/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {setLastKey, setLetter, setPronunciation} from "../state/slices/cardSlice.ts";

const FlashCard: FC = () => {
  const {letter, lastKey, pronunciation} = useSelector((state: RootState) => state.card)
  const dispatch = useDispatch<AppDispatch>();

  const getRandom = () => {
    let key: number;
    do {
      key = Math.floor((Math.random() * consonants.length))
    } while (key == lastKey)

    dispatch(setLetter(consonants[key]))
    dispatch(setLastKey(key))
    dispatch(setPronunciation(false))
  }

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <div className="flash-card text-center flex flex-col justify-between h-dvh">
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
            <button className="rounded-full bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg px-10 py-2"
                    onClick={() => dispatch(setPronunciation(true))}>See Pronunciation</button>
          }
        </div>
        <div className="audio flex justify-center h-1/4">
          <AudioButton />
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
