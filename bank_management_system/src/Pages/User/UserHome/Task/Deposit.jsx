import React, { useState } from 'react'
import './Deposit.css'
import axios from 'axios';
const Deposit = () => {
  const [accon,setAccno]=useState('');
  const [amount,setAmount]=useState('');

  const HandleSubmit=(e)=>{
      axios.put(`http://localhost:8080/deposit${accon}/${Number(amount)}`).then(sucess=>{
        console.log(sucess.statusText);
      }).catch(error=>{
        console.log(error);
      })
  }
  return (
    <>
      <section id="deposit" className="deposit">
        <div className="deposit-contianer">
          <h1>Deposit Page</h1>
          <form onSubmit={(e)=>HandleSubmit(e)}>
            <div className="deposit-input-group">
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
            <div className="deposit-input-group">
              <label htmlFor="amount">Enter Your Amount</label>
              <input type="text" 
              placeholder='Enter Your Amount'
              required
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              name='amount'/>
            </div>
            <div className="deposit-input-button">
              <button type='submit'>Deposit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Deposit