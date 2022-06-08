import React from 'react'
import { Typography, Box } from '@mui/material'

import { CardListTempStyleParams } from './CardListTemp.types'
import { ItemGraus } from './CardListTemp.styles'

const CardListTemp = ({ title, subtitle }: CardListTempStyleParams) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        width: '100%',
      }}
    >
      <Typography sx={{ textAlign: 'center' }} variant="subtitle1" component="div">
        {title}
      </Typography>
      <ItemGraus sx={{ textAlign: 'center' }}>{subtitle}</ItemGraus>
    </Box>
  )
}

export default CardListTemp
