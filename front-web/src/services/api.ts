import axios from 'axios'

const API_URL = 'http://10.0.0.11:8080'

const api = axios.create({
  baseURL: API_URL
})

export default api