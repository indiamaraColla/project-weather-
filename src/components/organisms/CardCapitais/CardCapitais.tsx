import React, { useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { ListaClimaCapitais } from '../../molecules'

const CardCapitais = ({}) => {
  const rioJaneiro = 'Rio Janeiro'
  const saoPaulo = 'Cascavel'

  const handleCities = async () => {
    // const city2 = await capitalsService(rioJaneiro)
    // const city1 = await capitalsService(saoPaulo)
    // setCapitais(city2.data)
    // setCapitais(city1.data)
  }

  useEffect(() => {
    handleCities()
  }, [])

  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h5" component="div" color="white" margin="24px 34px 0 34px">
        Capitais
      </Typography>

      <ListaClimaCapitais />
    </Box>
  )
}

export default CardCapitais
