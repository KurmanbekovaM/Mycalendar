// // import logo from './logo.svg';
// // import './App.css';
// //
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// //
// // export default App;

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./Pages/Home";
// // import Login from "./Pages/Login";


// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/login" element={<Login />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// // src/App.js
// // import React from 'react';
// // import './App.css';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './Pages/Home';  // Путь к компоненту Home
// // import Login from './Pages/Login';  // Путь к компоненту Login
// // import Sidebar from './components/Sidebar'; 
// // // import CalendarPage from './src/Pages/CalendarPage';  // Импорт CalendarPage
// // import CalendarPage from './Pages/CalendarPage';  // Правильный путь

// // // mycalendar\front\my-app\src\Pages\CalendarPage.js

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/calendar" element={<CalendarPage />} />  {/* Маршрут на страницу календаря */}
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
 
// // src/App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Sidebar from './components/Sidebar'; // Импорт бокового меню
// // import Home from './Pages/Home';
// // import CalendarPage from './Pages/CalendarPage';

// // function App() {
// //   return (
// //     <Router>
// //       <div style={{ display: 'flex' }}>
// //         <Sidebar />
// //         <div style={{ flexGrow: 1, padding: '20px' }}>
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/calendar" element={<CalendarPage />} />
// //             {/* <Route path="/settings" element={<SettingsPage />} /> */}
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import HomePage from "./Pages/Home";
// // import CalendarPage from "./Pages/CalendarPage";
// // import EventDetailsPage from "./Pages/EventDetailsPage";
// // import ProfilePage from "./Pages/ProfilePage";


// // function App() {
// //   return (
// //     <Router>
// //       <Navbar /> {/* Добавляем меню навигации */}
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/calendar" element={<CalendarPage />} />
// //         <Route path="/event/:id" element={<EventDetailsPage />} />
// //         <Route path="/profile" element={<ProfilePage />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// // src/App.js
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Sidebar from "./components/Sidebar"; // Используем Sidebar
// // import Home from "./Pages/Home";
// // import CalendarPage from "./Pages/CalendarPage";
// // import EventDetailsPage from "./Pages/EventDetailsPage";
// // import ProfilePage from "./Pages/ProfilePage";

// // function App() {
// //   return (
// //     <Router>
// //       <div style={{ display: "flex" }}>
// //         <Sidebar /> {/* Постоянно отображаемая боковая панель */}
// //         <div style={{ flexGrow: 1, padding: "20px" }}>
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/calendar" element={<CalendarPage />} />
// //             <Route path="/event/:id" element={<EventDetailsPage />} />
// //             <Route path="/profile" element={<ProfilePage />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar"; // Боковая панель
// import Home from "./Pages/Home";
// import CalendarPage from "./Pages/CalendarPage";
// import EventDetailsPage from "./Pages/EventDetailsPage";
// import ProfilePage from "./Pages/ProfilePage";
// import EventsList from "./components/EventsList"; // Импортируем новый компонент
// import RegisterPage from "./Pages/RegisterPage"; 
// import LoginPage from "./Pages/LoginPage";
// // import AuthPage from "./Pages/AuthPage";
// import Header from "./components/Header";

// function App() {
//   return (
//     <Router>
//       <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//         <Header /> {/* Постоянно отображаемый Header */}
//         <div style={{ display: "flex", flexGrow: 1 }}>
//           <Sidebar /> {/* Постоянно отображаемая боковая панель */}
//           <div style={{ flexGrow: 1, padding: "20px" }}>
//             <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/calendar" element={<CalendarPage />} />
//             <Route path="/event/:id" element={<EventDetailsPage />} />
//             <Route path="/profile" element={<ProfilePage />} /> {/* Профиль */}
//             <Route path="/events" element={<EventsList />} /> {/* Новый маршрут */}
//             <Route path="/register" element={<RegisterPage />} /> {/* Новый маршрут для регистрации */}
//             {/* <Route path="/login" element={LoginPage} /> */}
//             <Route path="/login" element={<LoginPage />} /> {/* Новый маршрут для регистрации */}
//             {/* <Route path="/" element={<AuthPage />} /> */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar"; // Боковая панель
// import Home from "./Pages/Home";
// import CalendarPage from "./Pages/CalendarPage";
// import EventDetailsPage from "./Pages/EventDetailsPage";
// import RegisterPage from "./Pages/RegisterPage"; 
// import LoginPage from "./Pages/LoginPage";
// import Header from "./components/Header";

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLogin = (userData) => {
//     setUser(userData); // Сохраняем данные пользователя после успешного входа
//   };

//   const handleLogout = () => {
//     setUser(null); // Удаляем данные пользователя при выходе
//   };

//   return (
//     <Router>
//       <Header onLogout={handleLogout} user={user} /> {/* Передаем handleLogout и user в Header */}
//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         <div style={{ flexGrow: 1, padding: "20px" }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/calendar" element={<CalendarPage />} />
//             <Route path="/event/:id" element={<EventDetailsPage />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//             {/* Можно передать handleLogin для работы с состоянием пользователя при входе */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import Sidebar from "./components/Sidebar"; // Боковая панель
// import Home from "./Pages/Home";
// import CalendarPage from "./Pages/CalendarPage";
// import EventDetailsPage from "./Pages/EventDetailsPage";
// import RegisterPage from "./Pages/RegisterPage";
// import LoginPage from "./Pages/LoginPage";
// import Header from "./components/Header";

// function App() {
//   const [user, setUser] = useState(null);

//   // Проверяем токен в localStorage при загрузке
//   useEffect(() => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       // Здесь вы можете сделать запрос к серверу для проверки токена, если это необходимо
//       setUser({ username: "current_user" }); // Пример: замените на данные из API
//     }
//   }, []);

//   const handleLogin = (userData) => {
//     setUser(userData); // Сохраняем данные пользователя после успешного входа
//   };

//   const handleLogout = () => {
//     // Удаляем токены из localStorage
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("refresh_token");
//     setUser(null); // Удаляем данные пользователя при выходе
//   };

//   return (
//     <Router>
//       <Header onLogout={handleLogout} user={user} /> {/* Передаем handleLogout и user в Header */}
//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         <div style={{ flexGrow: 1, padding: "20px" }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/calendar" element={<CalendarPage />} />
//             <Route path="/event/:id" element={<EventDetailsPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//             {/* Передаем handleLogin для работы с состоянием пользователя при входе */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import CalendarPage from "./Pages/CalendarPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Header from "./components/Header";
import ProfilePage from "./Pages/ProfilePage";

import { AuthProvider } from "./Pages/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flexGrow: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/event/:id" element={<EventDetailsPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} /> 
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
