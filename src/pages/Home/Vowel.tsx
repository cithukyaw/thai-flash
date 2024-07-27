import {FC} from "react";
import FlashCard from "../../components/FlashCard.tsx";
import Header from "../../components/Header.tsx";

const Consonant: FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <FlashCard category="vowel" />
      </div>
    </>
  );
}

export default Consonant
