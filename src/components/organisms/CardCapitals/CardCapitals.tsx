import React from 'react'
import { Typography, Box } from '@mui/material'
import { ListClimateCapitals } from '../ListClimateCapitals'

const CardCapitals = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h5" component="div" color="white" margin="24px 34px 0 34px">
        Capitais
      </Typography>

      <ListClimateCapitals />
    </Box>
  )
}

export default CardCapitals
