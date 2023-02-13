import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:5000",
});

export const axiosPrivate = axios.create({
  baseURL: "https://localhost:4001",
  headers: {
    "Content-Type": "Application/json",
  },
});
