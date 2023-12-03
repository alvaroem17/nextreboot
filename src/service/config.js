
import axios from "axios";

const api = axios.create({
  baseURL: "https://esteveznails.onrender.com/api",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }, 
});

export default api