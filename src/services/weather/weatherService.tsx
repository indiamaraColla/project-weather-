import api from '../api'
import { Weather } from '../../types'

export const weatherService = (city: string) => {
  return api.get<Weather>(
    `/weather?format=json-cors&locale=pt&array_limit=5&fields=only_results,temp,city,description,temp,humidity,wind_speedy,forecast,max,min,weekday,date&city_name=${city}&key=176fccff`
  )
}
