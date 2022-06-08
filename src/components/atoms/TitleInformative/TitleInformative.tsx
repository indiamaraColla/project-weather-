import React from 'react'
import { Typography, Box } from '@mui/material'

import { TitleInfoStyleParams } from './TitleInformative.types'

const TitleInformative: React.FC<TitleInfoStyleParams> = ({ title, info, textInfo }) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px' }}>
      <Typography sx={{ fontWeight: '300' }} variant="subtitle1" component="div">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="div">
        {info}
      </Typography>
      <Typography variant="h4" component="div">
        {textInfo}
      </Typography>
    </Box>
  )
}

export default TitleInformative
