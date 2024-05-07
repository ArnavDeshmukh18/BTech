import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import Login from './pages/Auth/Login'
import './App.css'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import Signup from './pages/Auth/Signup'
import Leaderboard from './pages/Leaderboard/Leaderboard'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/start' element={<Yoga />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signup/> }/>
        <Route path='/yoga' element={<Yoga/> }/>
        <Route path='/leaderboard/:poseId' element={<Leaderboard/> }/>
      </Routes>
    </Router>
  )
}

