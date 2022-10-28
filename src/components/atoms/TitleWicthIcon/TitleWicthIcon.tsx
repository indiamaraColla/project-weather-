import React from 'react'
import { Typography, Box } from '@mui/material'

import { TitleWicthIconStyleParams } from './TitleWicthIcon.types'

const TitleWicthIcon = ({ title, icon }: TitleWicthIconStyleParams) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px' }}>
      {icon}
      <Typography variant="subtitle1">{title}</Typography>
    </Box>
  )
}

export default TitleWicthIcon
