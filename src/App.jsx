import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {Home, About, Login, Register} from './views/index.js'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
    </>
  )
}

export default App
