import React from "react";
import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const { id } = useParams(); // Получаем id события из URL

  // Заглушка для получения данных события
  const event = {
    id,
    title: "Event",
    description: "This is a detailed description of the event.",
    location: "Online",
    time: "2024-12-12 10:00",
  };

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Time:</strong> {event.time}</p>
    </div>
  );
}

export default EventDetailsPage;
