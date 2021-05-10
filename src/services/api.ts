import axios from "axios";

const api = axios.create({
  baseURL: "https://www.receitaws.com.br/v1/cnpj/"
});

api.interceptors.request.use(async (config) => {
  const token = process.env.CONSTULTA_TOKEN;
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})

export default api;