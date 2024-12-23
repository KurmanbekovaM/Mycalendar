// // import axios from "axios";

// // //const API = axios.create({ baseURL: "http://your-backend-url.com/api" });
// // const API = axios.create({ baseURL: "http://localhost:5000/api" });
// // export const fetchData = () => API.get("/data");
// // export const sendData = (data) => API.post("/data", data);

// // import axios from 'axios';

// // const api = axios.create({
// //     baseURL: 'http://127.0.0.1:8000/api/', // Адрес вашего Django-бэкенда
// //     timeout: 5000,
// // });

// // export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/", // Адрес вашего Django-бэкенда
//   timeout: 5000, // Таймаут запроса
// });

// // Функция обновления access-токена
// const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem("refresh_token");
//     const response = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {
//       refresh: refreshToken,
//     });
//     const newAccessToken = response.data.access;
//     localStorage.setItem("access_token", newAccessToken);
//     return newAccessToken;
//   } catch (error) {
//     console.error("Unable to refresh token:", error);
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("refresh_token");
//     return null;
//   }
// };

// // Добавляем access-токен перед каждым запросом
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Перехватчик для обработки ошибки 401 и обновления токена
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Если ошибка 401 и токен еще не обновлялся
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newToken = await refreshAccessToken();

//       if (newToken) {
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return api(originalRequest); // Повторный запрос с новым токеном
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/', // Убедитесь, что URL правильный
});

export default api;
