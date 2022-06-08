export interface CardInfoProps {
  capitais: WeatherInfoProps
}

export interface WeatherInfoProps {
  city: string
  humidity: number
  wind_speedy: string
  condition_code: number
  forecast: Array<PropsForecast>
  temp: number
  description: string
}

export interface PropsForecast {
  weekday: string
  max: number
  min: number
}
