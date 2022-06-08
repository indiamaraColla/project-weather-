import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com',
  // baseURL: 'http://apiadvisor.climatempo.com.br',
})

export default api
