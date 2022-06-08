import React from 'react'
import { Typography, Box, styled } from '@mui/material'

import { CardListTempStyleParams } from './CardListTemp.types'

const ItemGraus = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'start',
  color: 'orange',
  lineHeight: '20px',
}))

const CardListTemp: React.FC<CardListTempStyleParams> = ({ title, subtitle }) => {
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
