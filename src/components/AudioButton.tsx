import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../state/store.ts";
import {setPlaying} from "../state/slices/cardSlice.ts";

const AudioButton: FC = () => {
  const {letter, playing} = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch<AppDispatch>();

  const playAudio = async () => {
    try {
      const fileName = letter.english;
      const sound = new Audio(`./assets/audio/th/consonants/${fileName}.mp3`);

      dispatch(setPlaying(true))
      sound.play().then(() => {
        console.log(`Playing ${fileName} successfully`);
      }).catch(e => {
        console.error(`Error occurred while playing ${fileName}:`, e);
        alert('Audio will be available soon.');
      }).finally(() => {
        dispatch(setPlaying(false))
      });
    } catch (error) {
      console.error(error);
    }
  };

  const stopAudio = () => {
    dispatch(setPlaying(false))
  }

  return (
    <>
      {
        playing ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               className="size-12 border border-gray-400 rounded-md p-2" onClick={stopAudio}>
            <path
              d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"/>
            <path
              d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"/>
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               className="size-12 border border-gray-400 rounded-md p-2" onClick={playAudio}>
            <path d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"/>
          </svg>
      }
    </>
  );
};

export default AudioButton;
