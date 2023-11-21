import React, { useState, useEffect } from 'react';
import './index.css';
import Axios from 'axios';

const User = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ID, setID] = useState(0);
  const [reason, setReason] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [messageStyle ,setMessageStyle] = useState("");
  const [adminMessage, setAdminMessage] = useState('');

  useEffect(() => {
    // Retrieve admin message from localStorage
    const message = localStorage.getItem('adminMessage');
    const color = localStorage.getItem('messageStyle');
    if (message) {
      setAdminMessage(message);
      setMessageStyle(color);
      // Clear the message from localStorage after retrieval
      localStorage.removeItem('adminMessage');
      localStorage.removeItem('messageStyle');
    }
  }, []);


  const submitUser = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/createUser', {
      firstName,
      lastName,
      ID,
      reason
    }).then(() => {
      setSubmissions([...submissions, {
        firstName,
        lastName,
        ID,
        reason
      }]);
      console.log("User Submitted"); // Check if this log appears in the console
      alert("User Submitted");
    }).catch(error => {
      console.error("Error submitting user:", error);
      // Handle error here if needed
    });
  };

  return (
    <>
    <div className="container">
      <h1 style={{ color: messageStyle }} >User Form</h1>
      <form onSubmit={submitUser}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          ID:
          <input
            type="number"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </label>
        <label>
          Reason:
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="">Select a reason</option>
            <option value="sick">Sick</option>
            <option value="vacation">Vacation</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <br></br>
    </div>

    <div className='buttonsReturn'>
      <button onClick={() => window.location.href = '/Admin'}>Go to admin</button>
      <br></br>
      <button onClick={() => window.location.href = '/'}>Return</button>
    </div>
    <div style={{ color: messageStyle }}>
        {adminMessage && (
          <div className="admin-message">
            <p>{adminMessage}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
