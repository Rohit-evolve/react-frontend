import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/Home.js"
import Login  from './components/Login.js'
import SignUp from './components/SignUp.js'
import Hr from './components/Hr.js'
import Header from './components/Header.js'
import CandidateFile from './service/CandidateFile.js'
import Hr_Login from './components/Hr_Login.js'

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/login" element = {<Login/>}></Route>
          <Route path = "/signup" element = {<SignUp/>}></Route>
          <Route path="/hr_login" element = {<Hr_Login/>}></Route>
          <Route path = "/hr" element = {<Hr/>}></Route>
          <Route path= "/update/:email" element = {<CandidateFile/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}
