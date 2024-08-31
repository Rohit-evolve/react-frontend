import React, { Component } from 'react'
import CandidateService from '../service/CandidateService';

export default class Hr extends Component {

  constructor()
  {
    super()
   this.state = {
     candidate:[]
   }
}
  
  componentDidMount() {
    CandidateService.getCandidate().then((res) => {
      this.setState({candidate:res.data})
    }).catch((error) => {
      alert(error)
      console.error("Error fetching data: ", error);
    });
  }

  getFileUrl = (id) => {
    return `http://localhost:9191/api/v1/candidate/${id}/file`;
  }

  render() {
    return (
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
              <th>Resume</th>
            </tr>
          </thead> 

          <tbody>{
            this.state.candidate.map(
            (can)=>  
             <tr key = {can.id}>
              <td>{can.id}</td>
              <td>{can.firstName}</td>
              <td>{can.lastName}</td>
              <td>{can.mobileNo}</td>
              <td>{can.email}</td>
              <td>{can.graduation}</td>
              <td>{can.percentage}</td>
              <td>{can.yop}</td>
              <td>{can.skills}</td>
              <td>{can.file ? (
                      <a href={this.getFileUrl(can.id)} download>
                        Download Resume
                      </a>
                    ) : (
                      <span>No file available</span>
                    )}</td>
            </tr> )
           }
          </tbody>
         </table>
       </div>

      </div>
    )
  }
}
