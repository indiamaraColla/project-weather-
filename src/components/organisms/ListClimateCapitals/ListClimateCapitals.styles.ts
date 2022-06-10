import { Typography, styled } from '@mui/material'

export const ItemTitulo = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 400,
}))

export const ItemText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 600,
}))
