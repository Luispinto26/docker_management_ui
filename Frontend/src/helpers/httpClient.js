import axios from "axios";

const apiUrl = "http://192.168.1.84:3000/api/database/";

const httpRequest = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export { httpRequest };
