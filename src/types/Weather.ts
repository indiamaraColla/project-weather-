export interface Weather {
  city: string
  humidity: number
  wind_speedy: string
  condition_code: number
  forecast: Array<Forecast>
  temp: number
  description: string
}

export interface Forecast {
  weekday: string
  max: number
  min: number
}
