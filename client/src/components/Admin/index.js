import React, { useState , useEffect } from 'react';
import Axios from 'axios';
// import './index.css';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setSubmissions(response.data)
    })  
  }, []);

  const handleAdminLogin = () => {
    if (passwordInput === 'admin') {
      setIsAdmin(true);
    } else {
      alert('Incorrect admin password');
    }
    setPasswordInput('');
  };

  const processSubmission = (index, decision) => {
    const submission = submissions[index];
    const userId = submission._id;
    setSubmissions(submissions.filter((_, i) => i !== index));
  
    Axios.delete(`http://localhost:3001/deleteUser/${userId}`).then((response) => {
      // Store the message in localStorage
      localStorage.setItem('adminMessage', `${decision}: ${submission.firstName} ${submission.lastName}`);
      localStorage.setItem('messageStyle', (decision === 'Accepted' ? 'green' : 'red'));
      alert('Response sent');
    });
  };

  return (
    <>
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

              <button onClick={() => processSubmission(index, 'Accepted')}>Accept</button>
              <button onClick={() => processSubmission(index, 'Rejected')}>Reject</button>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className='buttonsReturn'>
      <button onClick={() => window.location.href = '/'}>Return</button>
    </div>
    </>
  );
};

export default Admin;
