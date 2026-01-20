import './App.css'
import "tailwindcss";
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Home from './pages/home';
import Projects from './pages/projects';
import Studies from './pages/studies';
import Experience from './pages/experience';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Studies" element={<Studies />} />
          <Route path="/Experience" element={<Experience />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
