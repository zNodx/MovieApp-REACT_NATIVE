import axios from 'axios';

const api_client = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
});

export default api_client;