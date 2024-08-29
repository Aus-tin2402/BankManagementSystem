import React, { useState } from 'react';
import './ViewDetials.css';
import axios from 'axios';

const ViewDetials = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [accno, setAccno] = useState('');
  const [account, setAccount] = useState([]);

  const HandleTranscation = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    axios.get(`http://localhost:8080/showBalance/${accno}`)
      .then(success => {
        setAccount(success.data.list); // Assuming success.data.list is the array of transactions
        setShowBalance(true); // Show the balance table
      })
      .catch(error => {
        console.log(error);
        // Handle errors here if needed
      });
  };

  return (
    <>
      <section id="show-transcation" className="show-transcation">
        <div className="transcation-contianer">
          {!showBalance && (
            <>
              <h1>Transaction Page</h1>
              <form onSubmit={HandleTranscation}>
                <div className="transcation-input-group">
                  <label htmlFor="accno">Enter Your Account Number</label>
                  <input
                    type='text'
                    placeholder='Enter Your Account Number'
                    required
                    value={accno}
                    onChange={(e) => setAccno(e.target.value)}
                    name='accno'
                  />
                </div>
                <div className="transcation-input-button">
                  <button type='submit'>Fetch Transactions</button>
                </div>
              </form>
            </>
          )}

          {showBalance && (
            <>
              <h1>Transaction Details</h1>
              <table>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Transaction Type</th>
                    <th>Transaction Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {account.map((data, i) => (
                    <tr key={i}>
                      <td>{data.transcationId}</td>
                      <td>{data.type}</td>
                      <td>{data.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ViewDetials;
