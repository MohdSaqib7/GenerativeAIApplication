import React, { useState } from 'react'
import axios from 'axios';
import ContentBox from './ContentBox'

function SearchBox() {
    const[state,setState] = useState("")
    const[data, setData] = useState("")
    const[flag, setFlag] = useState(false)

    const apiCall= async ()=>{
        setFlag(true)
        if(state===""){
          console.log("step empty")
          return
        }

      axios.get(`http://localhost:8080/ai/generateStream?message=${state}`).then(response => {
        console.log("Response-->"+response.data)
        setFlag(false)
        setData(response.data)
      }).catch(error => {
        console.error(error);
      });
      console.log("step2")
         
    }

  return (
    <>  
      <div className='search-area'>
        <input className='input-area' placeholder='write here' onChange={e => setState(e.target.value)}></input>
        <button className='search-button' onClick={apiCall}>Search</button>
    </div>
    <ContentBox ques={state} ans={data} flag={flag}/>
    </>
  )
}

export default SearchBox