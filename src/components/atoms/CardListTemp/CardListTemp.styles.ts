import { Typography, styled } from '@mui/material'

export const ItemGraus = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'start',
  color: 'orange',
  lineHeight: '20px',
}))
