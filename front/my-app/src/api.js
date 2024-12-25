
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', 
});

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      email,
      password,
    });

    const token = response.data.access;  
    localStorage.setItem('access_token', token); 

    console.log('Login successful, token saved:', token);
  } catch (error) {
    console.error('Login error:', error);
  }
};

