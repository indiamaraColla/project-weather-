import { Typography, styled } from '@mui/material'
import { List } from '@mui/material'

export const CardList = styled(List)``

export const ItemText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 600,
}))
