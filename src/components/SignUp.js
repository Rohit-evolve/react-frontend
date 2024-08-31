import React ,{useState} from 'react'
import {Link} from "react-router-dom"
import CandidateService from '../service/CandidateService'

export default function Login() {


  const[candidate, setCandidate] = useState({

    firstName:"",
    lastName:"",
    mobileNo:"",
    email:"",
    graduation:"",
    percentage:"",
    yop:"",
    skills:""
  })

  
  const handleChanges = (e)=> {
    
    e.preventDefault()

    const name = e.target.name
    const value = e.target.value

    setCandidate({...candidate,[name]:value})
  }

  


  const handleSave = (e)=> {

    e.preventDefault();

    console.log('candidate=>'+ JSON.stringify(candidate))

   
    CandidateService.setCandidate(candidate)
    .then(() => {
      console.log("submitted")
      alert("now upload resume by clicking on next upload resume")
    })
    .catch((msg)=> alert(msg))
  }


  return (
    <div className="container mt-3">
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h3 className='text-center'>Enter Your Details</h3>
          <div className='card-body'>
           <form> 
             <div className='form-group my-2'>
              <label>FirstName:</label>
              <input type="text" name = "firstName" value = {candidate.firstName} onChange={handleChanges} placeholder="FirstName" autoComplete="disable" className = "form-control"/>
             </div>

             <div className='form-group my-2'>
              <label>LasttName:</label>
              <input type="text" name="lastName" val={candidate.lastName} onChange={handleChanges} placeholder='lastname' className = "form-control"/>
             </div>

             <div className='form-group my-2'>
              <label>MobileNo:</label>
              <input type="text" name="mobileNo" value={candidate.mobileNo} onChange={handleChanges} className = "form-control"/>
             </div>

             <div className='form-group my-2'>
              <label>Email:</label>
              <input type="text" name="email" value={candidate.email} onChange={handleChanges} className = "form-control"/>
             </div>

             <div className='form-group my-2'>
              <label>Graduation:</label>
              <input type="text" name="graduation" value={candidate.graduation} onChange={handleChanges} className = "form-control"/>
             </div>

             <div className='form-group my-2'>
              <label>Percentage:</label>
              <input type="text" name="percentage" value={candidate.percentage} onChange= {handleChanges} className = "form-control"/>
             </div>

             <div className='form-group my-2'>
              <label>Year Of Passout:</label>
              <input type="text" name="yop" value={candidate.yop} onChange={handleChanges} className = "form-control"/>
             </div>

             <div className='form-group my-2'>
              <label>Skills:</label>
              <input type="text" name="skills" value={candidate.skills} onChange={handleChanges} className = "form-control"/>
             </div>

            
             <button onClick = {handleSave} className="btn btn-success mt-2">first click on submit</button>
           </form> 

           <Link to= {`/update/${candidate.email}`} className="btn btn-info mt-2">next upload resume</Link>

          </div> 

    </div>
   </div> 
   </div> 
  )
}
