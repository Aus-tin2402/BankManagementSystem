import React, { useState } from 'react'
import './Delete.css'
import axios from 'axios';
const DeleteByID = () => {
    const [accno,setAccno]=useState('');
    const HandleBalance=(e)=>{
        axios.delete(`http://localhost:/Delete/${id}`).then(sucess=>{
            window.alert(sucess.statusText)
        }).catch(error=>{
            window.alert(error.statusText);
        })
    }
  return (
    <section className="delete-id" id="delete-id">
        <div className="delete-contianer">
            <h1>Delete Page</h1> 
                <form onSubmit={(e)=>HandleBalance(e)}>
                    <div className="delete-input-group">
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
                    <div className="delete-input-button">
                        <button type='submit'>Delete</button>
                    </div>
                </form>
        </div>
    </section>
  )
}

export default DeleteByID