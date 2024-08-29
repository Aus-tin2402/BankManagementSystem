import React, { useState } from 'react'
import './Admin.css'
import axios from 'axios';
const AdminSignUp = () => {
    
    const [userID,setUserID]=useState('');
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [newpass,setNewPass]=useState('');
    const [repass,setRePass]=useState('');

    const HandleObject=(e)=>{
      e.preventDefault();
      let data=name.substring(0,4);
      let otp=Math.floor(10000+Math.random()*90000)
      let concat=data+otp;
      setUserID(concat);
      console.log(userID);
      if(newpass === repass){
        setPassword(newpass)
      }else{
        window.alert(`Password Does'nt Match`);
        return;
      }
      console.log(password);
      
      let Object={
        userID,name,email,contact,password
      }
       axios.post('http://localhost:8080//saveAdmin',Object).then(res=>{
        console.log(res.statusText);
        
      }).catch(err=>{
        console.log(err.statusText);
        
      })
      
    }
  return (
    <>
      <header id="admin-signUp">
        <div className="admin-container">
          <h1>Admin-SignUp Page</h1>
          <form onSubmit={(e)=>HandleObject(e)}>
            <div id="admin-input-group">
              <label htmlFor="name">Enter Your Name:</label>
              <input
                type={`text`}
                placeholder='Enter Your Name'
                name='name'
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div id="admin-input-group">
              <label htmlFor="contact">Enter Your Contact:</label>
              <input
                type={`tel`}
                placeholder='Enter Your Contact'
                name='contact'
                required
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
              />
            </div>
            <div id="admin-input-group">
              <label htmlFor="email">Enter Your Email:</label>
              <input 
                type={`email`}
                name='email'
                placeholder='Enter Your Email'
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
              />
            </div>
            <div id="admin-input-group">
              <label htmlFor="password">Enter Your Password:</label>
              <input
                type={`password`}
                required
                name='password'
                placeholder='Enter Your Password'
                value={newpass}
                onChange={(e)=>setNewPass(e.target.value)}
              />
            </div>
            <div id="admin-input-group">
              <label htmlFor="re-password">Enter Your Re-Password:</label>
              <input
                type={`password`}
                name='re-password'
                required
                placeholder='Enter Your Re-Password'
                value={repass}
                onChange={(e)=>setRePass(e.target.value)}
              />
            </div>
            <div className="admin-input-button">
              <button type={`submit`}>Sign-Up</button>
            </div>
          </form>
        </div>
      </header>
    </>
  )
}

export default AdminSignUp