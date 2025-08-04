import axios from 'axios';

const server="http://localhost:5000"
export let loginUser=async(email,password)=>{
      
    let report= await axios.post(`${server}/login`,{email,password});
    return report.data;
}


export let register=async(name,email,password,address,role)=>{

 let report= await axios.post(`${server}/register`,{name,email,password,address,role});
    return report.data;
}


export let viewUsers=async()=>{

    let report=await axios.get(`${server}/viewusers`);
    return report.data;
}




export let ownerData=async()=>{

    let report=await axios.get(`${server}/ownerdata`);
    return report.data;
  
}


export let saveStore=async(name,address,owner_id)=>{

 let report= await axios.post(`${server}/addstore`,{name,address,owner_id});
    return report.data;
}

export let viewstore=async()=>{

    let report=await axios.get(`${server}/viwestore`);
    return report.data;
  
}

export let addRating=async(store_id,user_id,rating)=>{

 let report= await axios.post(`${server}/addRating`,{store_id,user_id,rating});
    return report.data;
}

export let  avgRatingData=async()=>{

    let report=await axios.get(`${server}/avgRating`);
    return report.data;
  
}

export let  allRatingData=async()=>{

    let report=await axios.get(`${server}/allRating`);
    return report.data;
  
}



export let  deleteStore=async(id)=>{
    console.log(id);
    let report=await axios.get(`${server}/deleteStore/${id}`);
    return report.data;
  
}