import React, { useState } from 'react';
// import './index.css';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleAdminLogin = () => {
    if (passwordInput === 'admin') {
      setIsAdmin(true);
      // Mock submissions data - Replace this with actual data or API fetch
      setSubmissions([
        { firstName: 'John', lastName: 'Doe', ID: '123', reason: 'sick' },
        { firstName: 'Alice', lastName: 'Smith', ID: '456', reason: 'vacation' },
        // Add more submissions as needed
      ]);
    } else {
      alert('Incorrect admin password');
    }
    setPasswordInput('');
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      {!isAdmin ? (
        <div className="admin-login">
          <input
            type="password"
            placeholder="Admin Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button onClick={handleAdminLogin}>Login</button>
        </div>
      ) : (
        <div className="submissions">
          <h2>Submitted Forms</h2>
          {submissions.map((submission, index) => (
            <div key={index} className="submission-details">
              <p>
                <strong>Name:</strong> {submission.firstName} {submission.lastName}
              </p>
              <p>
                <strong>ID:</strong> {submission.ID}
              </p>
              <p>
                <strong>Reason:</strong> {submission.reason}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
