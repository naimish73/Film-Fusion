import axios from "axios";

const url = import.meta.env.BACKEND_BASEURL;

const API = axios.create({ baseURL: url });

export const register = (data) => API.post("/db/users");
