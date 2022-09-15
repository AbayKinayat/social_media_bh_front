import axios from "axios";

const BaseURL = "http://localhost:3333";

const $api = axios.create({
  baseURL: BaseURL,
})

export default $api;