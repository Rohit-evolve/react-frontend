
import axios from 'axios'

const CANDIDATE_BASE_URL = "http://localhost:9191/api/v1/candidate"

class CandidateService {

    getCandidate()
    {
        return axios.get(CANDIDATE_BASE_URL);
    }

    setCandidate(candidate)
    {
        return axios.post(CANDIDATE_BASE_URL,candidate)
    }

    getCandidateByEmail(email)
    {
        return axios.get(CANDIDATE_BASE_URL + "/" + email)
    }

    setFile(email,formData)
    {
        return axios.put(CANDIDATE_BASE_URL+"/"+email, formData,{
            headers: {
                'Content-Type': 'multipart/form-data' // Ensure the request is sent as multipart/form-data
              }
        })

    }

 
}

export default new CandidateService();
