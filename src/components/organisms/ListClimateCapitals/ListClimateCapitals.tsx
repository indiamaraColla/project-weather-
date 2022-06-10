import React from 'react'
import { Box } from '@mui/material'
import List from '../../molecules/List/List'

import { capitais } from './mock'
import { ItemTitulo } from './ListClimateCapitals.styles'

const ListClimateCapitals = () => {
  return (
    <Box sx={{ margin: '0 34px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginTop: '10px' }}>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <ItemTitulo variant="subtitle1" sx={{ width: '26px' }}>
            Max
          </ItemTitulo>
          <ItemTitulo variant="subtitle1" sx={{ marginLeft: '14px', width: '26px' }}>
            Min
          </ItemTitulo>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', alignItems: 'center' }}>
          <ItemTitulo variant="subtitle1" sx={{ width: '26px' }}>
            Min
          </ItemTitulo>
          <ItemTitulo variant="subtitle1" sx={{ marginLeft: '14px', width: '26px' }}>
            Max
          </ItemTitulo>
        </Box>
      </Box>

      <List capitais={capitais} />
    </Box>
  )
}

export default ListClimateCapitals
