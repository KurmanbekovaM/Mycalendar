// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, Button, Form } from 'react-bootstrap';
//
// const localizer = momentLocalizer(moment);
//
// function Sidebar({ events }) {
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px', height: '500px', overflowY: 'auto', marginTop: '92px' }}>
//       <h4 className="text-center mb-4">Список событий</h4>
//       {events.length > 0 ? (
//         events.map((event, index) => (
//           <div key={index} style={{ marginBottom: '10px' }}>
//             <strong>{event.title}</strong>
//             <p className="mb-1">{`Дата: ${moment(event.start).format('DD.MM.YYYY')}`}</p>
//             <p className="mb-1">{`Время: ${moment(event.start).format('HH:mm')}`}</p>
//             <p className="mb-1">{`Участник: ${event.participantEmail}`}</p>
//           </div>
//         ))
//       ) : (
//         <p>Нет запланированных событий.</p>
//       )}
//     </div>
//   );
// }
//
// function CalendarPage() {
//   const [events, setEvents] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     date: '',
//     startTime: '',
//     endTime: '',
//     participantEmail: '',
//     status: 'Ожидает подтверждения',
//   });
//
//   useEffect(() => {
//     // Пример загрузки событий
//     setEvents([
//       {
//         title: 'Встреча с Иваном',
//         start: new Date(),
//         end: new Date(),
//         participantEmail: 'ivan@example.com',
//         status: 'Одобрено',
//       },
//     ]);
//   }, []);
//
//   const handleAddEvent = () => {
//     if (
//       newEvent.title &&
//       newEvent.participantEmail &&
//       newEvent.startTime &&
//       newEvent.endTime &&
//       newEvent.date
//     ) {
//       const startDateTime = new Date(newEvent.date);
//       const [startHours, startMinutes] = newEvent.startTime.split(':');
//       startDateTime.setHours(startHours);
//       startDateTime.setMinutes(startMinutes);
//
//       const endDateTime = new Date(newEvent.date);
//       const [endHours, endMinutes] = newEvent.endTime.split(':');
//       // const [error, setError] = useState(null);
//
//       endDateTime.setHours(endHours);
//       endDateTime.setMinutes(endMinutes);
//
//       // Создаем объект события для фронтенда
//       const newEventData = {
//         title: newEvent.title,
//         start: startDateTime,
//         end: endDateTime,
//         participantEmail: newEvent.participantEmail,
//         status: newEvent.status,
//       };
//
//       // Добавляем событие в локальное состояние (календарь)
//       setEvents([...events, newEventData]);
//       setShowModal(false);
//
//       // Очистка формы
//       setNewEvent({
//         title: '',
//         date: '',
//         startTime: '',
//         endTime: '',
//         participantEmail: '',
//         status: 'Ожидает подтверждения',
//       });
//
//       const token = localStorage.getItem("access_token");  // Получаем токен из localStorage
//       if (!token) {
//         console.log("Token not found...")
//         return;
//       }
//       // Отправляем данные на сервер Django для сохранения события
//       fetch('http://127.0.0.1:8000/api/events/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           title: newEvent.title,
//           start_time: startDateTime.toISOString(),
//           end_time: endDateTime.toISOString(),
//           participant_email: newEvent.participantEmail,
//           status: newEvent.status,
//           creator: 1,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Event created:', data);
//           // Дополнительно можно обработать успешный ответ
//
//           // Добавить в БД запись
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//     }
//   };
//
//   return (
//     <div style={{ display: 'flex', gap: '20px' }}>
//       <div style={{ flex: 1 }}>
//         <h2>My Calendar</h2>
//         <Calendar
//           localizer={localizer}
//           events={events.map((event) => ({
//             title: `${event.title} (${event.status})`,
//             start: event.start,
//             end: event.end,
//           }))}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500 }}
//           selectable={false} // Отключаем выбор на календаре
//         />
//         <button
//           className="btn btn-primary mt-3"
//           onClick={() => setShowModal(true)}
//         >
//           Add Event
//         </button>
//       </div>
//
//       <Sidebar events={events} />
//
//       {/* Модальное окно */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Добавить событие</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="eventTitle">
//               <Form.Label>Название встречи</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите название"
//                 value={newEvent.title}
//                 onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="eventDate" className="mt-3">
//               <Form.Label>Дата встречи</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={newEvent.date}
//                 onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="eventStartTime" className="mt-3">
//               <Form.Label>Время начала встречи</Form.Label>
//               <Form.Control
//                 type="time"
//                 value={newEvent.startTime}
//                 onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="eventEndTime" className="mt-3">
//               <Form.Label>Время окончания встречи</Form.Label>
//               <Form.Control
//                 type="time"
//                 value={newEvent.endTime}
//                 onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="participantEmail" className="mt-3">
//               <Form.Label>Email участника</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Введите email"
//                 value={newEvent.participantEmail}
//                 onChange={(e) => setNewEvent({ ...newEvent, participantEmail: e.target.value })}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Отмена
//           </Button>
//           <Button variant="primary" onClick={handleAddEvent}>
//             Сохранить
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
//
// export default CalendarPage;

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

function Sidebar({ events }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px', height: '500px', overflowY: 'auto', marginTop: '92px' }}>
      <h4 className="text-center mb-4">Список событий</h4>
      {events && events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{event.title}</strong>
            <p className="mb-1">{`Дата: ${moment(event.start).format('DD.MM.YYYY')}`}</p>
            <p className="mb-1">{`Время: ${moment(event.start).format('HH:mm')}`}</p>
            <p className="mb-1">{`Участник: ${event.participantEmail}`}</p>
          </div>
        ))
      ) : (
        <p>Нет запланированных событий.</p>
      )}
    </div>
  );
}

function CalendarPage() {
  const [events, setEvents] = useState([]); // Инициализируем как пустой массив
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    participantEmail: '',
    status: 'Ожидает подтверждения',
  });

  // Загрузка событий с сервера при монтировании компонента
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.log("Token not found...");
      return;
    }
    // Запрашиваем события с сервера
    fetch('http://127.0.0.1:8000/api/events/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents(data); // Обновляем состояние с полученными данными
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleAddEvent = () => {
    if (
      newEvent.title &&
      newEvent.participantEmail &&
      newEvent.startTime &&
      newEvent.endTime &&
      newEvent.date
    ) {
      const startDateTime = new Date(newEvent.date);
      const [startHours, startMinutes] = newEvent.startTime.split(':');
      startDateTime.setHours(startHours);
      startDateTime.setMinutes(startMinutes);

      const endDateTime = new Date(newEvent.date);
      const [endHours, endMinutes] = newEvent.endTime.split(':');
      endDateTime.setHours(endHours);
      endDateTime.setMinutes(endMinutes);

      const newEventData = {
        title: newEvent.title,
        start_time: startDateTime.toISOString(),
        end_time: endDateTime.toISOString(),
        participant_email: newEvent.participantEmail,
        status: newEvent.status,
        creator: 1, // Обновите на ID текущего пользователя
      };

      // Добавляем событие в локальное состояние, проверяя, что `events` — это массив
      setEvents((prevEvents) => {
        if (Array.isArray(prevEvents)) {
          return [...prevEvents, newEventData];
        }
        return [newEventData]; // Если `prevEvents` не был массивом, создаем новый массив
      });

      setShowModal(false);

      // Очистка формы
      setNewEvent({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        participantEmail: '',
        status: 'Ожидает подтверждения',
      });

      const token = localStorage.getItem("access_token");
      if (!token) {
        console.log("Token not found...");
        return;
      }

      // Отправляем новое событие на сервер
      fetch('http://127.0.0.1:8000/api/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newEventData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Event created:', data);
          // Дополнительно обработать успешный ответ
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <h2>My Calendar</h2>
        <Calendar
          localizer={localizer}
          events={Array.isArray(events) ? events.map((event) => ({
            title: `${event.title} (${event.status})`,
            start: new Date(event.start_time),
            end: new Date(event.end_time),
          })) : []} // Проверяем, что events — это массив
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable={false} // Отключаем выбор на календаре
        />
        <button
          className="btn btn-primary mt-3"
          onClick={() => setShowModal(true)}
        >
          Add Event
        </button>
      </div>

      <Sidebar events={events} />

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
            <Form.Group controlId="eventDate" className="mt-3">
              <Form.Label>Дата встречи</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="eventStartTime" className="mt-3">
              <Form.Label>Время начала встречи</Form.Label>
              <Form.Control
                type="time"
                value={newEvent.startTime}
                onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="eventEndTime" className="mt-3">
              <Form.Label>Время окончания встречи</Form.Label>
              <Form.Control
                type="time"
                value={newEvent.endTime}
                onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
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
