import {FC} from "react";
import FlashCard from "../../components/FlashCard.tsx";
import Toast from "../../components/Toast.tsx";

const Home: FC = () => {
  return (
    <>
      <Toast />
      <div className="container mx-auto px-4">
        <FlashCard/>
      </div>
    </>
  );
}

export default Home
