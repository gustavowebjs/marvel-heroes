/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_API,
});

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: process.env.REACT_APP_PUBLIC_KEY,
  };
  return config;
});

export default api;
