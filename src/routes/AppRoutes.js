import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import LoginPage from '../pages/Login/Login'
import Quiz from '../pages/quiz/Quiz'
import Result from '../pages/result/Result'
import SignUp from '../pages/signup/SignUp'

const AppRoutes = () => {
  return (
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/auth/login" element={<LoginPage/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/result" element={<Result/>}/>
    <Route path="/signup" element={<SignUp/>}/>
   </Routes>
  )
}

export default AppRoutes
