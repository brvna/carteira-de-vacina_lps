import axios from "axios";
//processa o arquivo env (arquivo de configuraçao) com as variaveis de ambiente
const url = process.env.REACT_APP_SWAPI;

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
