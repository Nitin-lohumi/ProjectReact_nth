import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
function  App(){
  const  client_id = '2c54e881ffd14570a191bf3e24152a03';
  const  client_secret = 'ae34ce8eab504629a6d258f8b54d8eff';
  const[track,setTrack]= useState([]);
  const [loading,setLoading] =useState(true);
  useEffect(()=>{
  },[]);
 async function get(){
  var authOptions = {
    url: 'POST',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form:{
      grant_type: 'client_credentials'
    },
    json:true,
    
    body:'grant_type=client_credentials&client_id='+client_id+'&client_secret='+client_secret
  };
 const data =  await fetch('https://accounts.spotify.com/api/token',authOptions)
 const data1 = await data.json();
  console.log(data1);
 }
 get();
  return(
    <>
     <h1>songs</h1>
     <div className='player'>
      
     </div>
    </>
  )
}
export default App;