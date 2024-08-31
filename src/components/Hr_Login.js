import React, { useState} from 'react'

import { useNavigate } from 'react-router-dom'

export default function Hr_Login() {

  const navigate = useNavigate()
  const[hr,setHr] = useState({

    id:"",
    passWord : ""
  })

   const handleChange = (e)=> {
     e.preventDefault()

     const name =  e.target.name;
     const value = e.target.value

     setHr({...hr,[name]:value})

   }

   const handleSave = (e)=> {

    e.preventDefault()

    console.log(hr.id+" "+hr.passWord)

    if(hr.id === 'Hr' && hr.passWord === 'Hr_Password')
    {
       navigate("/hr")
    }

    else{

      alert("Enter correct password and id")

      setHr({
        id: "",
        passWord: ""
      });
    }
   }
  return (
    <div>
      <div className='container mt-3'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h3 className = "text-center">HR-Login-Form</h3>
           <div className='card-body'>
            <form>
              <div className="form-group my-2">
                <label>Id:</label>
                <input type="text" name="id" onChange={handleChange} value = {hr.id}  placeholder='Hr' className='form-control'/>
               </div>

               <div className="form-group my-2">
                <label>Password:</label>
                <input type="text" name="passWord" onChange={handleChange} value = {hr.passWord}  placeholder='Hr_Password' className='form-control'/>
               </div>

               <button onClick = {handleSave} className='btn btn-success'>Submit</button>
               <p><i>enter the same values which are appearing in 'Id' and 'Password' fields</i></p>
            </form>
           </div>
        </div>
      </div>
    </div>
    </div>
  )
}
