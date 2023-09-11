// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { useState } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
function App() {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(input)
    setInput("")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar input={input} handleSubmit={handleSubmit} handleInput={handleInput} />
        <Routes>
          <Route path='/' element={<Home search={search} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to='/' />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
