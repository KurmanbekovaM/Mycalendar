
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../style/RegisterPage.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError(""); 

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const registerResponse = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        { username, password, email }
      );
      console.log("Registration successful:", registerResponse.data);

      const loginResponse = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      const { access, refresh } = loginResponse.data;
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      navigate("/calendar");
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
      console.error("Error during registration", err);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <p className="login-redirect">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default RegisterPage;
