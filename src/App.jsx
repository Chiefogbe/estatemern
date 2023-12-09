import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profie from './pages/Profie'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Headers from './components/Headers'

const App = () => {
  return (
    <div>
      <h4 className='text-red-500 text-center font-bold font-serif my-4'>Welcome To Real Estate Mern App.</h4>

      <Router>
        <Headers/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Profie' element={<Profie/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
