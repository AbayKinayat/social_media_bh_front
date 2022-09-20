import axios from "axios";

const BaseURL = "http://localhost:3333";

const $api = axios.create({
  baseURL: BaseURL,
  withCredentials: true
})

export default $api;