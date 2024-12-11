import React from "react";
import Form from "../components/Form";

function Login() {
  const handleLogin = (username, password) => {
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Form onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
