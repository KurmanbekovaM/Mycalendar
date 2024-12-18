// // import React from "react";
// // import Form from "../components/Form";

// // function Login() {
// //   const handleLogin = (username, password) => {
// //     console.log("Username:", username, "Password:", password);
// //   };

// //   return (
// //     <div>
// //       <h1>Login Page</h1>
// //       <Form onSubmit={handleLogin} />
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault(); // предотвращаем перезагрузку страницы при отправке формы
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username: username,
//         password: password,
//       });

//       // Сохраняем токены в localStorage
//       localStorage.setItem("access_token", response.data.access);
//       localStorage.setItem("refresh_token", response.data.refresh);

//       // Перенаправляем пользователя или обновляем интерфейс
//       // Например, можно использовать react-router для навигации
//       window.location.href = "/profile"; // Пример, если нужно перенаправить на профиль

//     } catch (error) {
//       setError("Ошибка при авторизации");
//       console.error("Ошибка авторизации", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
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
//         {error && <p>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
