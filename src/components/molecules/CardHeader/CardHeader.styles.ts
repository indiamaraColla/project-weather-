import { Typography, styled } from '@mui/material'

export const ItemTitulo = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 400,
}))
