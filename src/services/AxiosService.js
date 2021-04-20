import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=RyBaJf8ZWP4wjWuhvbuekBz2DCLLBHxWdJNeEleQ'
  ,
  timeout: 3000
})