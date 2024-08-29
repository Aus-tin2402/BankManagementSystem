import React, { useState } from 'react'
import './User.css'
import axios from 'axios';
const UserForgotPassword = () => {
  const [fetchContact, setFetchContact] = useState(false);
  const [verified, setVerified] = useState(false);
  const [contact, setContact] = useState('');
  const [userOTP, setUserOTP] = useState('');
  const [adminOTP, setAdminOTP] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [account,setAccount]=useState(false);
  const handleContact = (e) => {
    e.preventDefault(); // Prevent default form submission
      axios.get(`http://localhost:8080/UserAuthentication_findContact/${Number(contact)}`).then(sucess=>{
        if(sucess!=null){
          setAccount(true);
          setFetchContact(true);
          const generatedOTP = generateOTP(6);
          setAdminOTP(generatedOTP);
        }  
    }).catch(error=>{
      console.log(error);
      
    })
  };
  
  const generateOTP = (length) => {
    let otp = '';
    const digits = '0123456789';
    
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    
    return otp;
  };
  const handleValidate = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (adminOTP === userOTP) {
      setVerified(true);
    } else {
      window.alert(`OTP Doesn't Match`);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log(newPass);
    console.log(Number(contact));
    
    if (newPass === rePass) {
      axios.put(`http://localhost:8080/UserAuthentication_Update/${Number(contact)}/${newPass}`)
        .then(success => {
          console.log(success.statusText);
          window.alert('Password updated successfully!');
        })
        .catch(error => {
          console.log(error.statusText);
          window.alert('Error updating password');
        });
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div id="user-forgot">
      <div className="user-container">
        {!fetchContact && (
          <>
            <h1>Get OTP</h1>
            <form onSubmit={handleContact}>
              <div id="user-input-group">
                <label htmlFor="contact">Enter Your Contact:</label>
                <input
                  type="tel"
                  placeholder="Enter Your Contact"
                  name="contact"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div id="user-input-button">
                <button type="submit">Get OTP</button>
              </div>
            </form>
          </>
        )}

        {fetchContact && !verified && (
          <>
            <h1>Validation</h1>
            <form onSubmit={handleValidate}>
              <div id="user-input-group">
                <span id="otp">Your OTP Is: {adminOTP}</span>
                <label htmlFor="OTP">Enter Your OTP:</label>
                <input
                  type="tel"
                  placeholder="Enter Your OTP"
                  name="OTP"
                  required
                  value={userOTP}
                  onChange={(e) => setUserOTP(e.target.value)}
                />
              </div>
              <div id="user-input-button">
                <button type="submit">Validate</button>
              </div>
            </form>
          </>
        )}

        {verified &&(
          <>
            <h1>Change Password</h1>
            <form onSubmit={handleChangePassword}>
              <div id="user-input-group">
                <label htmlFor="password">Enter Your Password:</label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Enter Your Password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                />
              </div>
              <div id="user-input-group">
                <label htmlFor="re-password">Enter Your Re-Password:</label>
                <input
                  type="password"
                  name="re-password"
                  required
                  placeholder="Enter Your Re-Password"
                  value={rePass}
                  onChange={(e) => setRePass(e.target.value)}
                />
              </div>
              <div id="user-input-button">
                <button type="submit">Change Password</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default UserForgotPassword