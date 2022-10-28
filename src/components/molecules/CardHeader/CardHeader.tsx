import React from 'react'
import { Box } from '@mui/material'

import { CardHeaderProps } from './CardHeader.types'
import { ItemTitulo } from './CardHeader.styles'

const CardHeader = ({ max, min }: CardHeaderProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginTop: '10px' }}>
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <ItemTitulo variant="subtitle1" sx={{ width: '26px' }}>
          {max}
        </ItemTitulo>
        <ItemTitulo variant="subtitle1" sx={{ marginLeft: '14px', width: '26px' }}>
          {min}
        </ItemTitulo>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', alignItems: 'center' }}>
        <ItemTitulo variant="subtitle1" sx={{ width: '26px' }}>
          {max}
        </ItemTitulo>
        <ItemTitulo variant="subtitle1" sx={{ marginLeft: '14px', width: '26px' }}>
          {min}
        </ItemTitulo>
      </Box>
    </Box>
  )
}

export default CardHeader
