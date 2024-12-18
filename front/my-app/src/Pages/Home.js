
import { Button } from '@mui/material'; // Пример использования Material UI
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom'; // Импортируем Link для перехода и useNavigate для навигации
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Home() {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Состояние для проверки авторизации
  const navigate = useNavigate();  // Для навигации на другие страницы

  useEffect(() => {
    // Проверяем, есть ли токен в localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);  // Если токен есть, считаем, что пользователь авторизован
    }

    // Пример событий для календаря
    setEvents([
      {
        title: 'My Event',
        start: new Date(),
        end: new Date(),
      },
    ]);
  }, []);

  const handleLogout = () => {
    // Удаляем токен при выходе
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    navigate('/');  // Перенаправляем на главную страницу
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />

      {/* {isAuthenticated ? (
        // Если пользователь авторизован, показываем кнопку выхода
        <div>
          <h3>You are logged in!</h3>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        // Если не авторизован, показываем кнопки для регистрации и входа
        <div>
          <h3>Please log in or register</h3>
          <Link to="/login">
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
              Go to Register Page
            </Button>
          </Link>
        </div>
      )} */}
    </div>
  );
}

export default Home;
