import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <div>
      <div className = "bg  bg-secondary">
        <header className = "Header">
            <h1>Job Portal</h1>
            <p>Enter your skills and qualification</p>

            <nav>
             <Link id = "home" className = "navbar-brand pe-2 btn btn-link" to="/">Home</Link> 
             <Link id="login" className= "navbar-brand pe-2 btn btn-link" to="/login">Login</Link>
             <Link  id = "signup" className= "navbar-brand pe-2 btn btn-link" to="/signup">SignUp</Link>
             <Link id="hr" className = "navbar-brand pe-2 btn btn-link" to = "/hr_login">Hr-login</Link>
            </nav> 
        </header>
      </div>    
    </div>
  )
}
