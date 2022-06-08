import React, { useState, ChangeEvent } from 'react'
import { Box, Divider } from '@mui/material'

import { weatherService } from '../../../services'

import { CardInfo, CardCapitais } from '../../organisms'
import { Title, Search } from '../../atoms'

import { WeatherInfo } from './Home.types'
import { Container } from './Home.styles'

const Home = (): JSX.Element => {
  const [capitais, setCapitais] = useState<WeatherInfo>()

  const [city, setCity] = useState<string>('')

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const handleClick = async () => {
    if (city) {
      const request = await weatherService(city)
      setCapitais(request.data)
    }
  }

  return (
    <Container>
      <Box sx={{ width: '100%', maxWidth: 540, margin: '0 auto' }}>
        <Title text="Previsão do tempo" capitais={capitais} />

        {capitais && <CardInfo capitais={capitais} />}

        <Search
          value={city}
          onChange={handleChange}
          onClick={handleClick}
          inputProps={{ 'aria-label': 'Insira aqui o nome da cidade' }}
          placeholder="Insira aqui o nome da cidade"
          onBlur={handleClick}
        />

        <Divider sx={{ borderColor: '#ffc107', borderStyle: '1px', margin: { md: '20px 0' } }} />
      </Box>

      <CardCapitais />
    </Container>
  )
}
export default Home
