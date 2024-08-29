import React, { useEffect, useState } from 'react'
import './User.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserLogin = () => {
  const  navigate=useNavigate('')
  const [userId,setUserId]=useState('');
  const [password,setPassword]=useState('');
  const [object,setObject]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/UserAuthentication_login`).then(sucess=>{
      setObject(sucess.data);
    }).catch(error=>{
      console.log(error);
      
    })
  },[])
  const HandleSubmit=()=>{
    const accountExist=object.some((data)=>{
      return data.userId === userId && data.password === password;
    })
    if(accountExist){
    navigate('/user-main')
    }else{
      window.alert(`Account Does'nt Exist`);
    }
  }
  return (
    <>
      <div id="user-login">
        <div className="user-container">
          <h1>User Login Page</h1>
          <div className="signup">
            <Link to='/user-signup'className='signup'>Admin_SignUp</Link>
          </div>
          <form onSubmit={(e)=>HandleSubmit(e)}>
            <div id="user-input-group">
              <label htmlFor="userId">Enter Your UserID:</label>
              <input
                type={`text`}
                placeholder='Enter Your UserID'
                required
                name='userId'
                value={userId}
                onChange={(e)=>setUserId(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="Password">Enter Your Password:</label>
              <input
                type={`text`}
                placeholder='Enter Your Password'
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div id="user-input-button">
              <button type={`submit`}>Login</button>
            </div>
          </form>
          <div className="change-password">
              <Link to='/user-forgot' className='change-password'>ForgotPassword</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLogin