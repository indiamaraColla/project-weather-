import React from 'react'
import { CardCapitals, CardSearchCity } from '../../organisms'
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
