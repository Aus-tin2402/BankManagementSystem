import React, { useState } from 'react'
import './Withdrawal.css'
import axios from 'axios';
const Withdrawal = () => {
  const [accon,setAccno]=useState('');
  const [amount ,setAmount]=useState('');

  const HandleSubmit=(e)=>{
      axios.put(`http://localhost/8080/withdrawal/${accon}/${Number(amount)}`).then(sucess=>{
        console.log(sucess.statusText);
      }).catch(error=>{
        console.log(error);
        
      })
  }
  return (
    <>
      <section id="withdrawal" className="withdrawal">
        <div className="withdrawal-contianer">
          <h1>Withdrawal Page</h1>
          <form onSubmit={(e)=>HandleSubmit(e)}>
          <div className="withdrawal-input-group">
              <label htmlFor="Accno">Enter Your Account Number</label>
              <input 
              type='text'
              placeholder='Enter Your Account Number'
              required
              name='accon'
              value={accon}
              onChange={(e)=>setAccno(e.target.value)}
              />
            </div>
            <div className="withdrawal-input-group">
              <label htmlFor="amount">Enter Your Amount</label>
              <input type="text" 
              placeholder='Enter Your Amount'
              required
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              name='amount'/>
            </div>
            <div className="withdrawal-input-button">
              <button type='submit'>Withdrawal</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Withdrawal