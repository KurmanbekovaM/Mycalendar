// // // AuthPage.js

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const AuthPage = () => {
// //   return (
// //     <div className="auth-page">
// //       <h2>Welcome! Please choose an action:</h2>
// //       <div className="auth-buttons">
// //         <Link to="/register">
// //           <button>Register</button>
// //         </Link>
// //         <Link to="/login">
// //           <button>Login</button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AuthPage;


// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Проверяем токен в localStorage при загрузке приложения
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       // Можно дополнительно сделать запрос на сервер для проверки токена
//       setUser({ username: "current_user" }); // Примерно, замените на данные из API
//     }
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("refresh_token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Проверяем токен в localStorage при загрузке
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setUser({ username: "current_user" }); // Здесь вы можете заменить на запрос к API для проверки токена
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("access_token", userData.token); // Сохраняем токен
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("access_token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
