// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// src/App.js
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';  // Путь к компоненту Home
// import Login from './Pages/Login';  // Путь к компоненту Login
// import Sidebar from './components/Sidebar'; 
// // import CalendarPage from './src/Pages/CalendarPage';  // Импорт CalendarPage
// import CalendarPage from './Pages/CalendarPage';  // Правильный путь

// // mycalendar\front\my-app\src\Pages\CalendarPage.js

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/calendar" element={<CalendarPage />} />  {/* Маршрут на страницу календаря */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
 
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar'; // Импорт бокового меню
// import Home from './Pages/Home';
// import CalendarPage from './Pages/CalendarPage';

// function App() {
//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <Sidebar />
//         <div style={{ flexGrow: 1, padding: '20px' }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/calendar" element={<CalendarPage />} />
//             {/* <Route path="/settings" element={<SettingsPage />} /> */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/Home";
// import CalendarPage from "./Pages/CalendarPage";
// import EventDetailsPage from "./Pages/EventDetailsPage";
// import ProfilePage from "./Pages/ProfilePage";


// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Добавляем меню навигации */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/calendar" element={<CalendarPage />} />
//         <Route path="/event/:id" element={<EventDetailsPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Используем Sidebar
import Home from "./Pages/Home";
import CalendarPage from "./Pages/CalendarPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar /> {/* Постоянно отображаемая боковая панель */}
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/event/:id" element={<EventDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
