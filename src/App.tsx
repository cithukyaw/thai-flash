import { FC } from 'react'
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./pages/Start/Start.tsx";
import Consonant from "./pages/Home/Consonant.tsx";
import Layout from "./components/Layout.tsx";
import Vowel from "./pages/Home/Vowel.tsx";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Start />} />
          <Route path="/consonant" element={<Consonant />} />
          <Route path="/vowel" element={<Vowel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
