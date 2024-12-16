
// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css'; 
// const localizer = momentLocalizer(moment);

// function CalendarPage() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Пример загрузки событий
//     setEvents([
//       {
//         title: 'My Event',
//         start: new Date(),
//         end: new Date(),
//         // как в календарь передавать данные 
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

// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// function CalendarPage() {
//   const [events, setEvents] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showInfo, setShowInfo] = useState(false);
//   const [newEventTitle, setNewEventTitle] = useState('');

//   useEffect(() => {
//     // Пример загрузки событий
//     setEvents([
//       {
//         title: 'My Event',
//         start: new Date(),
//         end: new Date(),
//       },
//     ]);
//   }, []);

//   const handleSelectSlot = ({ start }) => {
//     setSelectedDate(start); // Сохранение выбранной даты
//     setShowInfo(true); // Открываем окно просмотра
//     setShowModal(false); // Закрываем окно добавления
//   };

//   const handleAddEvent = () => {
//     if (newEventTitle.trim()) {
//       setEvents([
//         ...events,
//         {
//           title: newEventTitle,
//           start: selectedDate,
//           end: selectedDate,
//         },
//       ]);
//       setShowModal(false); // Закрытие модального окна
//       setNewEventTitle(''); // Очистка поля ввода
//       setShowInfo(false); // Закрытие окна информации
//     }
//   };

//   const openAddEventModal = () => {
//     setShowModal(true); // Открытие окна добавления события
//     setShowInfo(false); // Закрытие окна просмотра
//   };

//   return (
//     <div>
//       <h2>My Calendar</h2>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         selectable // Включение выбора ячейки
//         onSelectSlot={handleSelectSlot}
//       />

//       {/* Окно информации о дне */}
//       {showInfo && (
//         <div style={{
//           position: 'fixed',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           backgroundColor: 'white',
//           padding: '20px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//           zIndex: 1000,
//         }}>
//           <h3>Информация о дне</h3>
//           <p>Вы выбрали: {moment(selectedDate).format('MMMM Do YYYY')}</p>
//           <p>
//             События на этот день: {
//               events.filter(event =>
//                 moment(event.start).isSame(selectedDate, 'day')
//               ).length > 0 ? 
//               events.filter(event =>
//                 moment(event.start).isSame(selectedDate, 'day')
//               ).map(event => <li key={event.title}>{event.title}</li>)
//               : "Нет событий."
//             }
//           </p>
//           <div style={{ marginTop: '10px' }}>
//             <button onClick={openAddEventModal}>Добавить событие</button>
//             <button onClick={() => setShowInfo(false)}>Закрыть</button>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно добавления события */}
//       {showModal && (
//         <div style={{
//           position: 'fixed',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           backgroundColor: 'white',
//           padding: '20px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//           zIndex: 1000,
//         }}>
//           <h3>Добавить событие</h3>
//           <input
//             type="text"
//             placeholder="Название события"
//             value={newEventTitle}
//             onChange={(e) => setNewEventTitle(e.target.value)}
//           />
//           <div style={{ marginTop: '10px' }}>
//             <button onClick={handleAddEvent}>Добавить</button>
//             <button onClick={() => setShowModal(false)}>Отмена</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CalendarPage;


import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: null,
    time: '',
    participantEmail: '',
    status: 'Ожидает подтверждения',
  });

  useEffect(() => {
    // Пример загрузки событий
    setEvents([
      {
        title: 'Встреча с Иваном',
        start: new Date(),
        end: new Date(),
        participantEmail: 'ivan@example.com',
        status: 'Одобрено',
      },
    ]);
  }, []);

  const handleSelectSlot = ({ start }) => {
    setNewEvent({ ...newEvent, date: start });
    setShowModal(true);
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.participantEmail && newEvent.time) {
      const startDateTime = new Date(newEvent.date);
      const [hours, minutes] = newEvent.time.split(':');
      startDateTime.setHours(hours);
      startDateTime.setMinutes(minutes);

      setEvents([
        ...events,
        {
          title: newEvent.title,
          start: startDateTime,
          end: startDateTime,
          participantEmail: newEvent.participantEmail,
          status: newEvent.status,
        },
      ]);
      setShowModal(false);
      setNewEvent({
        title: '',
        date: null,
        time: '',
        participantEmail: '',
        status: 'Ожидает подтверждения',
      });
    }
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events.map(event => ({
          title: `${event.title} (${event.status})`,
          start: event.start,
          end: event.end,
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />

      {/* Модальное окно */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить событие</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="eventTitle">
              <Form.Label>Название встречи</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите название"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="participantEmail" className="mt-3">
              <Form.Label>Email участника</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                value={newEvent.participantEmail}
                onChange={(e) => setNewEvent({ ...newEvent, participantEmail: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="eventTime" className="mt-3">
              <Form.Label>Время встречи</Form.Label>
              <Form.Control
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleAddEvent}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CalendarPage;
