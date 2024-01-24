import axios from "axios";

const BASE_URL = 'https://hackathon-login.osc-fr1.scalingo.io/';
// const BASE_URL_DEV = 'http://localhost:5000'

export const API = axios.create({
    baseURL: BASE_URL,
});