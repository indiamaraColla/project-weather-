import React from 'react'
import { Box } from '@mui/material'
import { CardHeader, List } from '../../molecules'

import { capitais } from './mock'

const ListClimateCapitals = () => {
  return (
    <Box sx={{ margin: '0 34px' }}>
      <CardHeader max="Max" min="Min" />
      <List capitais={capitais} />
    </Box>
  )
}

export default ListClimateCapitals
