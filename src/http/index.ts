import axios from "axios";

const BaseURL = "http://localhost:3000/api";

const $api = axios.create({
  baseURL: BaseURL,
})

export default $api;