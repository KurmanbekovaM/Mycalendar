// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     axios.get('http://127.0.0.1:3000/api/example/')
//       .then(response => setData(response.data.message))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Сообщение с бэкенда:</h1>
//       <p>{data}</p>
//     </div>
//   );
// }

// export default App;


import axios from 'axios';

// Создаем экземпляр Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',  // Базовый URL
});

const loginUser = async (email, password) => {
  try {
    // Отправляем запрос на сервер для получения токена
    const response = await axios.post("http://127.0.0.1:8000/api/token/", {
      username: email, // если вы используете email для аутентификации
      password,
    });
    

    // После получения токена сохраняем его в localStorage
    const token = response.data.access;  // Получаем токен из ответа
    localStorage.setItem('access_token', token);  // Сохраняем в localStorage

    console.log('Login successful, token saved:', token);
  } catch (error) {
    console.error('Login error:', error);
  }
};