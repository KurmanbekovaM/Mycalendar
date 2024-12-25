import React, { useEffect, useState } from 'react';
import api from '../api'; // Импортируем файл API

function EventsList() {
    const [events, setEvents] = useState([]); // Состояние для хранения событий

    // Загружаем события при монтировании компонента
    useEffect(() => {
        api.get('events/')
            .then(response => setEvents(response.data)) // Успешный ответ
            .catch(error => console.error('Ошибка загрузки событий:', error)); // Обработка ошибки
    }, []);

    return (
        <div>
            <h1>Список событий</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default EventsList;
