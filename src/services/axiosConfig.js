//src/services/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com',
  // Other configurations
});

export default instance;
