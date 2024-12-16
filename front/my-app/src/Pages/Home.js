// import React from "react";
// import Table from "../components/Table";

// function Home() {
//   const data = [
//     { id: 1, name: "John", email: "john@example.com" },
//     { id: 2, name: "Jane", email: "jane@example.com" },
//   ];

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Table data={data} />
//     </div>
//   );
// }

// export default Home;
// src/Pages/Home.js
// import React from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <Link to="/calendar">Go to Calendar</Link> {/* Ссылка на страницу календаря */}
//     </div>
//   );
// }

// export default Home;
// src/Pages/Home.js

import { Button } from '@mui/material'; // Пример использования Material UI
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      {
        title: 'My Event',
        start: new Date(),
        end: new Date(),
      },
    ]);
  }, []);

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
      <Button variant="contained" color="primary">Add Event</Button> {/* Пример кнопки из Material UI */}
    </div>
  );
}

export default Home;


