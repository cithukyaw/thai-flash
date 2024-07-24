import { FC } from 'react'
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./pages/Start/Start.tsx";
import Home from "./pages/Home/Home.tsx";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/consonant" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
