import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';

const AdminForgotPassword = () => {
  const [fetchContact, setFetchContact] = useState(false);
  const [verified, setVerified] = useState(false);
  const [contact, setContact] = useState('');
  const [userOTP, setUserOTP] = useState('');
  const [adminOTP, setAdminOTP] = useState('');
  const [newPass, setNewPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [account, setAccount] = useState('');

  const handleContact = (e) => {
    e.preventDefault(); 
    axios.get(`http://localhost:8080/findContactAdmin/${Number(contact)}`)
      .then(success => {
        setAccount(success.data.contact);
        setFetchContact(true);
        const generatedOTP = generateOTP(6);
        setAdminOTP(generatedOTP);
      })
      .catch(error => {
        window.alert(`Contact Mismatch Error`);
      });
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
    e.preventDefault();
    if (adminOTP === userOTP) {
      setVerified(true);
    } else {
      window.alert(`OTP Doesn't Match`);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPass === rePass) {
      axios.put(`http://localhost:8080/updatePasswordAdmin/${Number(contact)}/${newPass}`)
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
    <div id="admin-forgot">
      <div className="admin-container">
        {!fetchContact && (
          <>
            <h1>Get OTP</h1>
            <form onSubmit={handleContact}>
              <div id="admin-input-group">
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
              <div className="admin-input-button">
                <button type="submit">Get OTP</button>
              </div>
            </form>
          </>
        )}

        {fetchContact && !verified && (
          <>
            <h1>Validation</h1>
            <form onSubmit={handleValidate}>
              <div id="admin-input-group">
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
              <div className="admin-input-button">
                <button type="submit">Validate</button>
              </div>
            </form>
          </>
        )}

        {verified && (
          <>
            <h1>Change Password</h1>
            <form onSubmit={handleChangePassword}>
              <div id="admin-input-group">
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
              <div className="admin-input-group">
                <label htmlFor="re-password">Re-enter Your Password:</label>
                <input
                  type="password"
                  name="re-password"
                  required
                  placeholder="Re-enter Your Password"
                  value={rePass}
                  onChange={(e) => setRePass(e.target.value)}
                />
              </div>
              <div className="admin-input-button">
                <button type="submit">Change Password</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminForgotPassword;
