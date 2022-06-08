import React from 'react'
import { Divider, Box } from '@mui/material'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

import { CardListTemp, TitleWicthIcon, TitleInformative } from '../../atoms'
import { CardInfoProps } from './CardInfo.types'

import { Container } from './CardInfo.styles'

const CardInfo = ({ capitais }: CardInfoProps) => {
  return (
    <Container>
      <Box sx={{ pl: 3, pr: 3 }}>
        <TitleInformative title={capitais.city} textInfo={`${capitais.temp}°C ${capitais.description}`} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '24px', pl: 3, pr: 3, marginTop: '10px' }}>
        {capitais?.forecast?.slice(0, 1).map((value, index) => (
          <Box key={index} sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px' }}>
            <TitleWicthIcon title={`${value.max}°`} icon={<ArrowDownward sx={{ color: 'orange' }} />} />
            <TitleWicthIcon title={`${value.min}°`} icon={<ArrowUpward sx={{ color: 'orange' }} />} />
          </Box>
        ))}

        <TitleInformative title="Sensação" info={`${capitais.temp}°`} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '24px', pl: 3, pr: 3 }}>
        <TitleInformative title="Vento" info={capitais.wind_speedy} />

        <TitleInformative title="Humidade" info={`${capitais.humidity}%`} />
      </Box>

      <Divider sx={{ borderColor: 'orange', margin: { xs: '10px 0', md: '10px 0' } }} />

      <Box sx={{ display: 'flex', alignItems: 'center', pl: 3, pr: 3 }}>
        {capitais?.forecast?.map((value, index) => (
          <CardListTemp key={index} title={value.weekday} subtitle={`${value.min}° ${value.max}°`} />
        ))}
      </Box>
    </Container>
  )
}
export default CardInfo
