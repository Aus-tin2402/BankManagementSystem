import React, { useState } from 'react'
import './ShowBalance.css'
import axios from 'axios';
const ShowBalance = () => {
  const [showBalance,setShowBalance]=useState(false);
  const [accno,setAccno]=useState('');
  const [bal,setBal]=useState(null);

  const HandleBalance=(e)=>{
    axios.get(`http://localhost:8080/showBalance/${accno}`).then(sucess=>{
      setBal(sucess.data);
      setShowBalance(true);
    }).catch(error=>{
      console.log(error);
    })
    
  }
  return (
    <>
      <section id="show-balance" className="show-balance">
        <div className="balance-contianer">
         { !showBalance && <>
          <h1>Show Balance Page</h1> 
          <form onSubmit={(e)=>HandleBalance(e)}>
            <div className="balance-input-group">
              <label htmlFor="accno">Enter Your Account Number</label>
              <input 
                type='text'
                placeholder='Enter Your Account Number'
                required
                value={accno}
                onChange={(e)=>setAccno(e.target.value)}
                name='accno'
              />
            </div>
            <div className="balance-input-button">
              <button type='submit'>Show Balance</button>
            </div>
          </form>
         </> 
         }{ showBalance && 
              <h1 className='after-fetch'>Your Balance Is: <span>{bal.bal}</span></h1>
         }
        </div>
      </section>
    </>
  )
}

export default ShowBalance