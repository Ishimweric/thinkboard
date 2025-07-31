import axios from "axios";

// changed to dynamic url for production purposes
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3500/api" : "/api"

const api = axios.create({
  baseURL : BASE_URL,
});

export default api