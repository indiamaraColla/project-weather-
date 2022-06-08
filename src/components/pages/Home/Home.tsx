import React, { useState, ChangeEvent } from 'react'
import { Box, Divider } from '@mui/material'

import { weatherService } from '../../../services/weather'

import { CardInfo, CardCapitals, CardSearchCity } from '../../organisms'
import { Title, Search } from '../../atoms'

// import { WeatherInfo } from './Home.types'
import { Container } from './Home.styles'

const Home = (): JSX.Element => {
  return (
    <Container>
      <CardSearchCity />

      <CardCapitals />
    </Container>
  )
}
export default Home
