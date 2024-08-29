import React, { useState } from 'react'
import './FundTransfer.css'
import axios from 'axios';
const FundTransfer = () => {
  const [fromAccno,setFromAccno]=useState('');
  const [toAccno,setToAccno]=useState('');
  const [amount,setAmount]=useState('');

  const HandleSubmit=(e)=>{
    e.preventDefault();
      axios.put(`http://localhost:8080/fundTransfer/${fromAccno}/${toAccno}/${Number(amount)}`).then(sucess=>{
        console.log(sucess.statusText);
      }).catch(error=>{
        console.log(error);
        
      })
  }
  return (
    <>
      <section id="fund-transfer" className="fund-transfer">
        <div className="fund-contianer">
          <h1>Fund Tranfer Page</h1>
          <form onSubmit={(e)=>HandleSubmit(e)}>
              <div className="fund-input-group">
                <label htmlFor="fromAccno">Enter Your Account Number</label>
                <input
                 type="text"
                 placeholder='Enter Your Account Number'
                 readOnly
                 name='fromAccno'
                 value={fromAccno}
                 onChange={(e)=>setFromAccno(e.target.value)} />
              </div>
              <div className="fund-input-group">
                <label htmlFor="toAcco">Enter Receiver Account Nnumber</label>
                <input
                 type="text"
                 placeholder='Enter Receiver Account Nnumber'
                 readOnly
                 name='toAcco'
                 value={toAccno}
                 onChange={(e)=>setToAccno(e.target.value)} />
              </div>
              <div className="fund-input-group">
                <label htmlFor="amount">Enter Your Amount</label>
                <input
                  type='text'
                  placeholder='Enter Your Amount'
                  readOnly
                  name='amount'
                  value={amount}
                  onChange={(e)=>setAmount(e.target.value)}/>
              </div>
              <div className="fund-input-button">
                <button type='submit'>Transfer</button>
              </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default FundTransfer