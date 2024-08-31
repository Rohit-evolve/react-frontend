import React, { useState } from 'react'
import {useParams,useNavigate} from "react-router-dom"
import CandidateService from './CandidateService'

export default function CandidateFile(props) {

  const {email} = useParams()
  const navigate = useNavigate()

  const[file, setFile] = useState("")

  const handleFile = (e)=> {

    e.preventDefault()

    const file = e.target.files[0]

    setFile(file)

  }

  const handleSave = (e)=> {

    e.preventDefault()

    const formData = new FormData()

    formData.append("file",file)

    CandidateService.setFile(email,formData).then((res)=> 
      alert(res.data))
     .catch((error)=> alert("error"+error))

     navigate("/")
  }


  return (
    <div>
             <div className="form-group my-2 ms-3">
               <label>Upload File</label>
               <input type="file" name="file" onChange = {handleFile} className = "ms-2 form-control"/>
               <button onClick={handleSave} className = "btn btn-success">Submit</button>
             </div>
    </div>
  )
}
