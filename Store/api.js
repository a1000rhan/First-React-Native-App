import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8000/",
// });

const api = axios.create({
  baseURL: "http://192.168.150.90:8000",
});

export default api;
