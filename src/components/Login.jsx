import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../AuthContext';

export default function Login() {
  const {setLoggedIn}=useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Ensure this is declared

  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    { username: 'user4', password: 'pass4' },
    { username: 'user5', password: 'pass5' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setLoggedIn(true)
      localStorage.setItem('authentication','done')
      navigate('/read');  // Redirects to the Read component
    } else {
      alert("Invalid credentials!");  // Optionally handle invalid login
    }
  };
  


  return (
    <div className="Login">
      <header className="Login-header">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label><br/>
            <input
              type="text"
              required
              minlength="4"
              maxlength="6"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              
            />
          </div>
          <div>
            <label>Password</label><br/>
            <input
              type="password"
              required
              minlength="5"
              maxlength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

