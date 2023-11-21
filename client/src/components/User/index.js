import React, { useState } from 'react';
import './index.css';

const User = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ID, setID] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', { firstName, lastName, ID, reason });
  };

  return (
    <div className="container">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
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
            type="text"
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
    </div>
  );
};

export default User;
