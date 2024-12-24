// import React, { useState } from 'react';
// import axios from 'axios';

// function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/register/', {
//         username,
//         password,
//         email,
//       });
//       console.log('Registration successful:', response.data);
//       alert('Registration successful!');
//       // Вы можете перенаправить пользователя на страницу входа или домой
//     } catch (err) {
//       console.error('Registration failed:', err);
//       setError(err.response?.data?.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Выводим ошибку, если она есть */}
//     </div>
//   );
// }

// export default RegisterPage;



// import '../style/RegisterPage.css';
 
// function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Для перенаправления на другую страницу

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     try {
//       // Регистрация пользователя
//       const registerResponse = await axios.post('http://127.0.0.1:8000/api/register/', {
//         username,
//         password,
//         email,
//       });

//       console.log('Registration successful:', registerResponse.data);

//       // После успешной регистрации, сразу логиним пользователя
//       const loginResponse = await axios.post('http://127.0.0.1:8000/api/login/', {
//         username,
//         password,
//       });

//       console.log('Login successful:', loginResponse.data);

//       // Сохраняем токены (access и refresh) в localStorage
//       localStorage.setItem('access_token', loginResponse.data.access);
//       localStorage.setItem('refresh_token', loginResponse.data.refresh);

//       // Перенаправляем пользователя на домашнюю страницу или другую страницу
//       navigate('/calendar'); // Например, на страницу календаря
//     } catch (err) {
//       console.error('Registration or Login failed:', err);
//       setError(err.response?.data?.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// export default RegisterPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../style/RegisterPage.css';

// function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (event) => {
//     event.preventDefault();
//     try {
//       const registerResponse = await axios.post('http://127.0.0.1:8000/api/register/', {
//         username,
//         password,
//         email,
//       });
//       console.log('Registration successful:', registerResponse.data);
//       const loginResponse = await axios.post('http://127.0.0.1:8000/api/login/', {
//         username,
//         password,
//       });
//       localStorage.setItem('access_token', loginResponse.data.access);
//       localStorage.setItem('refresh_token', loginResponse.data.refresh);
//       navigate('/calendar');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="register-page">
//       {/* <h1>Register</h1> */}
//       <form onSubmit={handleRegister}>
//         <div>
//         <h1>Register</h1>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//         <button type="submit"></button>

//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// export default RegisterPage;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom"; // Добавьте Link
// import "../style/RegisterPage.css";

// function RegisterPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (event) => {
//     event.preventDefault();
//     try {
//       const registerResponse = await axios.post("http://127.0.0.1:8000/api/register/", {
//         username,
//         password,
//         email,
//       });
//       console.log("Registration successful:", registerResponse.data);
//       const loginResponse = await axios.post("http://127.0.0.1:8000/api/login/", {
//         username,
//         password,
//       });
//       localStorage.setItem("access_token", loginResponse.data.access);
//       localStorage.setItem("refresh_token", loginResponse.data.refresh);
//       navigate("/calendar");
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     }
//   };

//   return (
//     <div className="register-page">
//       <form onSubmit={handleRegister}>
//         <div>
//           <h1>Register</h1>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//         <p className="login-redirect">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// export default RegisterPage;
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
    setError(""); // Очистка ошибки перед отправкой

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      // Регистрация пользователя
      const registerResponse = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        { username, password, email }
      );
      console.log("Registration successful:", registerResponse.data);

      // Автоматический логин после регистрации
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
