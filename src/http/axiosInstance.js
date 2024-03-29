import axios from "axios";

export const axiosBase = axios.create({
  baseUrl: "http://127.0.0.1:8000/"
});
