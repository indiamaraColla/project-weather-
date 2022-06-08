import React, { useState, ChangeEvent } from 'react'
import { Box, Divider } from '@mui/material'

import { weatherService } from '../../../services/weather'

import { CardInfo } from '../CardInfo'
import { Title, Search } from '../../atoms'

import { Weather } from '../../../types'

const CardSearchCity = (): JSX.Element => {
  const [capitais, setCapitais] = useState<Weather>()

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
  )
}
export default CardSearchCity
