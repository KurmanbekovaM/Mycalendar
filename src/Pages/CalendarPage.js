// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';

// const localizer = momentLocalizer(moment);

// function CalendarPage() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Пример загрузки событий (можете заменить на вашу логику)
//     setEvents([
//       {
//         title: 'My Event',
//         start: new Date(),
//         end: new Date(),
//       },
//     ]);
//   }, []);

//   return (
//     <div>
//       <h2>My Calendar</h2>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//     </div>
//   );
// }

// export default CalendarPage;

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Подключаем стили

const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Пример загрузки событий
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
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default CalendarPage;
