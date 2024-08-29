import React, { useEffect, useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const navigate=useNavigate('');
  const [UserID,setUserID]=useState(``);
  const [password,setPassword]=useState(``);
  const [object,setObject]=useState([])
  useEffect(()=>{
      axios.get('http://localhost:8080/fetchAllAdmin').then(sucess=>{
        setObject(sucess.data);
        console.log(sucess.statusText);
        
      }).catch(error=>{
        console.log(error.statusText);
        
      })
  },[])

  const HandleClick=(e)=>{
      e.preventDefault();
      const UserData=object.some((data)=>{
        return data.UserID===UserID && data.password===password;
      });
      if (UserData) {
        navigate('/adminhome')
      }else{
        window.alert(`User Id or Password Does'nt Match`);
      }
    }   
    

  return (
    <>
      <header id="admin-login">
        <div className="admin-container">
          <h1>Admin-Login Page</h1>
          <div className="signup">
            <Link to='/admin-signUp' className='signup'>Admin_SignUp</Link>
          </div>
          <form onSubmit={(e)=>HandleClick(e)}>
            <div id="admin-input-group">
              <label htmlFor="UserId">Enter Your UserID:</label>
              <input
                type={`text`}
                placeholder='Enter Your UserID'
                required
                name='UserId'
                value={UserID}
                onChange={(e)=>setUserID(e.target.value)}
              />
            </div>
            <div id="admin-input-group">
              <label htmlFor="password">Enter Your Password:</label>
              <input
                type={`password`}
                required
                placeholder='Enter Your Password'
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="admin-input-button">
                <button type={`submit`}>Login</button>
            </div>
          </form>
          <div className="change-password">
              <Link to='/admin-forgot'  className='change-password'>ForgotPassword</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default AdminLogin