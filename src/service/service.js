import axios from 'axios';

export let loginUser=async(email,password)=>{
      
    let report= await axios.post("http://localhost:5000/login",{email,password});
    return report.data;
}