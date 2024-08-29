import React, { useState } from 'react'
import './FetchByID.css'
import axios from 'axios';
const FetchById = () => {
  const [accno,setAccno]=useState('');
  const [showBalance,setShowBalance]=useState(false);
  const [render,setRender]=useState(false);
  const [object,setObject]=useState([]);

  const HandleBalance=(e)=>{
    axios.get(`http://localhost:8080/GetAll`).then(sucess=>{
          setObject(sucess.data);
          setShowBalance(true);
    }).catch(error=>{
      console.log(error);
      
    })
  }
  return (
    <>
        <section id="fetch-ID" className="fetch-ID">
        <div className="fetch-ID-contianer">
         { !showBalance && <>
          <h1>Fetch Page</h1> 
          <form onSubmit={(e)=>HandleBalance(e)}>
            <div className="fetch-ID-input-group">
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
            <div className="fetch-ID-input-button">
              <button type='submit'>Fetch</button>
            </div>
          </form>
         </> 
         }{ showBalance && !render && 
          <table>
          <thead>
              <tr>
                  <th>Account-No</th>
                  <th>Account-Name</th>
                  <th>Balance</th>
              </tr>
          </thead>
          <tbody>
              {
                object.map((data,i)=>{
                  if(data.account_no===Number(accno)){
                    <tr key={i}>
                      <th>{data.account_no}</th>
                      <th>{data.name}</th>
                      <th>{data.bal}</th>
                    </tr>
                  }
                })
              }
          </tbody>
      </table>
         }
        </div>
      </section>
    </>
  )
}

export default FetchById