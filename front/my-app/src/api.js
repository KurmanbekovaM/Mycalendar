import axios from "axios";

//const API = axios.create({ baseURL: "http://your-backend-url.com/api" });
const API = axios.create({ baseURL: "http://localhost:5000/api" });
export const fetchData = () => API.get("/data");
export const sendData = (data) => API.post("/data", data);
