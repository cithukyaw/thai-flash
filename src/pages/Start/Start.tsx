import {FC} from "react";
import viteLogo from '/vite.svg'
import "./Start.scss";

const Start: FC = () => {
  const siteName = 'ThaiFlash';

  const onClickVowels = () => {
    alert('Coming Soon!')
  }

  return (
    <div className="container mx-auto px-4 text-center flex flex-col h-dvh">
      <div className="logo flex justify-center items-center h-2/3">
        <div>
          <img src={viteLogo} alt="" />
          <h1>{siteName}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-1/3">
        <div className="w-full">
          <p className="font-bold uppercase text-gray-500">Start</p>
          <a href="/consonant" className="rounded-full border border-gray-400 bg-white hover:bg-black hover:text-white font-bold text-2xl py-3 my-3 block">Consonants</a>
          <a href="#" onClick={onClickVowels} className="rounded-full border border-gray-400 bg-white hover:bg-black hover:text-white font-bold text-2xl py-3  my-3 block">Vowels</a>
        </div>
      </div>
    </div>
  );
}

export default Start
