import React, {useState} from 'react'
import CandidateService from '../service/CandidateService';


export default function () {

 const[email,setEmail] = useState([])
 const[data,setData] = useState([])
 const[status,setStatus] = useState("")

 const handleChange = (e)=>{

  const value = e.target.value;

  setEmail(value)
 }

 const handleSubmit = (e)=> {

  e.preventDefault()

  CandidateService.getCandidateByEmail(email).then((res)=>{

   if(res.data!==""){
    console.log(res)
    setData(res.data)
    setStatus("Status - Your application is under consideration, our hr will review your application")
   }
  else
    alert("incorrect email")
    
  })

  .catch((msg)=>{
    alert(msg)
  })
}
  
  return (
    <>
    <div className='container mt-3'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h3 className = "text-center">Login-Form</h3>
           <div className='card-body'>
            <form>
              <div className="form-group my-2">
                <label>Email:</label>
                <input type="text" onChange = {handleChange} placeholder='email' className='form-control'/>
                <button onClick = {handleSubmit} className='btn btn-success mt-2'>submit</button>
              </div>
            </form>
           </div>
        </div>
      </div>
    </div>


    <div>
     <div className = "container pt-3">
      <table className='table table-striped table-bordered '>
        <thead>
          <tr>
            <th>id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Mobileno</th>
            <th>Email</th>
            <th>Graduation</th>
            <th>Percentage</th>
            <th>YOP</th>
            <th>Skills</th>
          </tr>
        </thead> 

      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.mobileNo}</td>
          <td>{data.email}</td>
          <td>{data.graduation}</td>
          <td>{data.percentage}</td>
          <td>{data.yop}</td>
          <td>{data.skills}</td>
        </tr>
      </tbody>
    </table>
  </div>
   <p className='container' style = {{color:"rgb(16, 105, 22)"}}>{status}</p>
 </div>
  </>
  )
}
