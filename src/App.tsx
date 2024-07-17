import { FC } from 'react'
import './App.scss'
import FlashCard from "./components/FlashCard.tsx"

const App: FC = () => {
  return (
    <div className="container mx-auto">
      <FlashCard />
    </div>
  )
}

export default App;
