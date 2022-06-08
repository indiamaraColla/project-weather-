import api from './api'

interface WeatherInfo {
  city: string
  humidity: number
  wind_speedy: string
  condition_code: number
  forecast: Array<Forecast>
  temp: number
  description: string
}

interface Forecast {
  weekday: string
  max: number
  min: number
}

export const weatherService = (city: string) => {
  return api.get<WeatherInfo>(
    // `/api/v1/locale/city?state=PR&name=${city}&token=739d7256da8c728192b05e422db0f295`
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
