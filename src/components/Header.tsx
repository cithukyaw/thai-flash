import {NavLink} from "react-router-dom";
import {FC} from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-center shadow shadow-gray-200 py-2">
      <NavLink
        to="/consonant"
        className={({isActive}) => {
          return 'rounded-full border border-gray-400 font-bold py-1 px-4 mx-1 ' +
            (isActive ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white')
        }}>
        Consonant
      </NavLink>
      <NavLink
        to="/vowel"
        className={({isActive}) => {
          return 'rounded-full border border-gray-400 font-bold py-1 px-4 mx-1 ' +
            (isActive ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white')
        }}>
        Vowel
      </NavLink>
    </div>
  )
}

export default Header;
