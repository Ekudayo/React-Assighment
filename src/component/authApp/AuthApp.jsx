import React, { useState } from "react";
import styles from "../authApp/authApp.module.css"; // Assuming you have a CSS file for styles

function AuthApp() {
  // User data store: { username, password }
  const [users, setUsers] = useState([]);

  // State for forms
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Authentication State
  const [currentUser, setCurrentUser] = useState(null);

  // Validation error messages
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");

  // Handle registration
  const handleRegister = () => {
    if (!registerUsername || !registerPassword) {
      setRegisterError("Please fill in all fields.");
      return;
    }
    if (users.some((user) => user.username === registerUsername)) {
      setRegisterError("Username already exists.");
      return;
    }
    setUsers([
      ...users,
      { username: registerUsername, password: registerPassword },
    ]);
    setRegisterError("");
    alert("Registration successful! Please log in.");
    setRegisterUsername("");
    setRegisterPassword("");
  };

  // Handle login
  const handleLogin = () => {
    if (!loginUsername || !loginPassword) {
      setLoginError("Please fill in all fields.");
      return;
    }
    const user = users.find(
      (user) =>
        user.username === loginUsername && user.password === loginPassword
    );
    if (user) {
      setCurrentUser(user);
      setLoginError("");
      setLoginUsername("");
      setLoginPassword("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="container">
      {!currentUser ? (
        <>
          {/* Registration Form */}
          <h2>Register</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            {registerError && <div className="error">{registerError}</div>}
            <button onClick={handleRegister}>Register</button>
          </div>

          {/* Login Form */}
          <h2>Login</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            {loginError && <div className="error">{loginError}</div>}
            <button onClick={handleLogin}>Login</button>
          </div>
        </>
      ) : (
        // Welcome and Logout
        <div style={{ textAlign: "center" }}>
          <h2>Welcome, {currentUser.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default AuthApp;
