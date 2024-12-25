import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSingUp'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin-login" element={<AdminLogin />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/signup" element={<UserSignUp />}></Route>
    </Routes>
    </>
  )
}

export default App
