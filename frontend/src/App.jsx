import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/SignUp'
import { Otp } from './pages/Otp'
import { SignIn } from './pages/SignIn'
import { Api } from './apiConfig'
import axios from 'axios'

function App() {

  return (
      <Router>
        <Routes>
          <Route path = '/' element = { < SignUp />}/>
          <Route path = '/otp' element = { < Otp />} />
          <Route path = '/signIn' element = { <SignIn />}/>
        </Routes>
      </Router>
  )
}

export default App
