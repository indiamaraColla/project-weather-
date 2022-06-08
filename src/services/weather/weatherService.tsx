import api from '../api'
import { Weather } from '../../types'

export const weatherService = (city: string) => {
  return api.get<Weather>(
    `/weather?format=json-cors&locale=pt&array_limit=5&fields=only_results,temp,city,description,temp,humidity,wind_speedy,forecast,max,min,weekday,date&city_name=${city}&key=11dc1ee4`
  )
}

// export const capitalsService = (city: any) => {
//   return api.get(
//     `/weather?format=json-cors&locale=pt&array_limit=1&fields=only_results,city,forecast,max,min&keycity_name=${city}&key=11dc1ee4`
//   )
//   // return api.get(`/weather?format=json-cors&locale=pt&city_name=${city},forecast,max,min&key=11dc1ee4`)
// }

//
