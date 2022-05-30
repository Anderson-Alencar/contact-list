import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br/',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestGet = async (endpoint) => {
  const data = await api.get(endpoint);
  return data;
};

export const requestPut = async (endpoint, body) => {
  const data = await api.put(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint) => {
  await api.delete(endpoint);
};

export default api;
