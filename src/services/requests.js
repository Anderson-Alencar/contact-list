import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br/',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
