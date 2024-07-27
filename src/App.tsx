import { FC } from 'react'
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./pages/Start/Start.tsx";
import Home from "./pages/Home/Home.tsx";
import Layout from "./components/Layout.tsx";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Start />} />
          <Route path="/consonant" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
