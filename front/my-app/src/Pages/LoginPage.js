// //     // LoginPage.js

// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const LoginPage = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
// //         username,
// //         password,
// //       });
// //       console.log("Login successful", response.data);
// //       localStorage.setItem("access_token", response.data.access);  // Сохраняем токен
// //       navigate("/profile");  // Перенаправляем на страницу профиля
// //     } catch (err) {
// //       setError("Invalid credentials");
// //       console.error("Error during login", err);
// //     }
// //   };

// //   return (
// //     <div className="login-page">
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Username</label>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         {error && <div className="error">{error}</div>}
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import '../style/LoginPages.css';

// const LoginPage = ({ onLogin }) => {  // Добавьте onLogin как пропс
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username,
//         password,
//       });
//       console.log("Login successful", response.data);
//       localStorage.setItem("access_token", response.data.access);  // Сохраняем токен
//       onLogin({ username });  // Передаем данные пользователя в родительский компонент
//       navigate("/profile");  // Перенаправляем на страницу профиля
//     } catch (err) {
//       setError("Invalid credentials");
//       console.error("Error during login", err);
//     }
//   };

//   return (
//     <div className="login-page">
//       {/* <h2>Login</h2> */}
//       <form onSubmit={handleSubmit}>
//         <div>
//         <h2>login</h2>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom"; // Добавьте Link
// import "../style/LoginPages.css";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username,
//         password,
//       });
//       console.log("Login successful", response.data);
//       localStorage.setItem("access_token", response.data.access);
//       onLogin({ username });
//       navigate("/profile");
//     } catch (err) {
//       setError("Invalid credentials");
//       console.error("Error during login", err);
//     }
//   };

//   return (
//     <div className="login-page">
//       <form onSubmit={handleSubmit}>
//         {/* <div className="header-card">Login</div> */}
//         <div>
//         <h1>Login </h1>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <button type="submit">Login</button>
//         <p className="register-redirect">
//           Don't have an account? <Link to="/register">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "../style/LoginPages.css";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null); // Очистка ошибки перед отправкой

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username,
//         password,
//       });

//       const { access, refresh } = response.data;
//       console.log("Login successful", response.data);

//       localStorage.setItem("access_token", access);
//       localStorage.setItem("refresh_token", refresh);

//       onLogin({ username }); // Вызываем коллбэк для родительского компонента
//       navigate("/profile");
//     } catch (err) {
//       setError(
//         err.response?.data?.detail || "Invalid credentials. Please try again."
//       );
//       console.error("Error during login", err);
//     }
//   };

//   return (
//     <div className="login-page">
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <button type="submit">Login</button>
//         <p className="register-redirect">
//           Don't have an account? <Link to="/register">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../Pages/AuthContext";
// import "../style/LoginPages.css";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null);

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username,
//         password,
//       });

//       const { access, refresh } = response.data;
//       localStorage.setItem("access_token", access);
//       localStorage.setItem("refresh_token", refresh);

//       login({ username }); // Устанавливаем пользователя в глобальное состояние
//       navigate("/profile");
//     } catch (err) {
//       setError(
//         err.response?.data?.detail || "Invalid credentials. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="login-page">
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <button type="submit">Login</button>
//         <p className="register-redirect">
//           Don't have an account? <Link to="/register">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../style/LoginPages.css";
import { AuthContext } from "../Pages/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext); // Получаем login из контекста
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      const { access } = response.data;
      login({ username, token: access }); // Вызываем login из контекста
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
        <p className="register-redirect">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
