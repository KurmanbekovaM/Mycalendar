// AuthPage.js

import React from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h2>Welcome! Please choose an action:</h2>
      <div className="auth-buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
