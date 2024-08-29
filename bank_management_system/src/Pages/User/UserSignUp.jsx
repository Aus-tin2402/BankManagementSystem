import React, { useState } from 'react';
import './User.css';
import axios from 'axios';

const UserSignUp = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [newPass,setNewPassw]=useState('');
  const [rePass,setRePass]=useState('');
  const [accno,setAccno]=useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [panCard, setPanCard] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  const getAge=(e)=>{
      setDob(e);
      let today = new Date(); // Current date
      let birth = new Date(e); // Convert birthDate to Date object
      let age = today.getFullYear() - birth.getFullYear(); // Calculate age
  
      // Check if the birthday has occurred this year
      let monthDiff = today.getMonth() - birth.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
          age--; // Subtract 1 if the birthday hasn't occurred yet this year
      }
  
      setAge(age);
  
  }
  
  const generateRandom10DigitNumber=()=>{
    let min = 1000000000; // Minimum 10-digit number
    let max = 9999999999; // Maximum 10-digit number
    return `2${(Math.floor(Math.random() * (max - min + 1)) + min)}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccno(generateRandom10DigitNumber)
    let data=userName.substring(0,4);
      let otp=Math.floor(10000+Math.random()*90000)
      let concat=data+otp;
      setUserId(concat);
      console.log(userId);
      if(newPass === rePass){
        setPassword(newPass);
      }
      if(!aadharCard.length==12){
          window.alert(`Aadhar Card Length should be ==12`)
      }
      const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if(!panPattern.test(panCard)){
          window.alert(`pan Card Number Should be in this Format ${/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/}`)
      }
    let object ={
      userId,userName,contact:Number(contact),email,password,account:{
          accno,name:userName,dob,age:Number(age),gender,email,contact,address,aadharCard,panCard,bal:amount,list:[{
            amount,type
          }]
      }

    }
    axios.post('http://localhost:8080//UserAuthentication_save',object).then(sucess=>{
      console.log(sucess.statusText);      
    })
    .catch(error=>{
      console.log(error.statusText);
      
    })
    
  };

  return (
    <>
      <div id="user-signup">
        <div className="user-container">
          <h1>User Sign-Up Page</h1>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div id="user-input-group">
              <label htmlFor="userName">Enter Your UserName:</label>
              <input
                placeholder='Enter Your UserName'
                type="text"
                id="userName"
                name='userName'
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="contact">Enter Your Contact:</label>
              <input
                placeholder='Enter Your Contact'
                type="text"
                id="contact"
                name='contact'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="email">Enter Your Email:</label>
              <input
                placeholder='Enter Your Email'
                type="email"
                id="email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="password">Enter Your Password:</label>
              <input
                type={`password`}
                required
                name='password'
                placeholder='Enter Your Password'
                value={newPass}
                onChange={(e)=>setNewPassw(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="re-password">Enter Your Re-Password:</label>
              <input
                type={`password`}
                name='re-password'
                required
                placeholder='Enter Your Re-Password'
                value={rePass}
                onChange={(e)=>setRePass(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="dob">Enter Your Date-of-Birth:</label>
              <input
                placeholder='Enter Your Date-of-Birth'
                type="date"
                id="dob"
                name='dob'
                value={dob}
                onChange={(e) =>getAge(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="gender">Enter Your Gender:</label>
              <input
                placeholder='Enter Your Gender'
                type="text"
                id="gender"
                name='gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="address">Enter Your Address:</label>
              <input
                placeholder='Enter Your Address'
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="aadharCard">Enter Your Aadhar-Card:</label>
              <input
                placeholder='Enter Your Aadhar-Card'
                type="text"
                id="aadharCard"
                name='aadharCard'
                maxLength={`12`}
                value={aadharCard}
                onChange={(e) => setAadharCard(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="panCard">Enter Your PAN-Card:</label>
              <input
                placeholder='Enter Your PAN-Card'
                type="text"
                id="panCard"
                name='pancard'
                value={panCard}
                onChange={(e) => setPanCard(e.target.value)}
              />
            </div>
            
            <div id="user-input-group">
              <label htmlFor="amount">Enter Your Amount:</label>
              <input
                placeholder='Enter Your Amount'
                type="text"
                id="amount"
                name='amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div id="user-input-group">
              <label htmlFor="type">Enter Your Type:</label>
              <input
                placeholder='Enter Your Type'
                type="text"
                id="type"
                name='type'
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div id="user-input-button">
              <button type="submit">Sign-Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
