import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const ItemTitulo = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 400,
}))

const ItemText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 600,
}))
const ListClimateCapitals = () => {
  return (
    <Box sx={{ margin: '0 34px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginTop: '10px' }}>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <ItemTitulo variant="subtitle1" sx={{ width: '26px' }}>
            Min
          </ItemTitulo>
          <ItemTitulo variant="subtitle1" sx={{ marginLeft: '14px', width: '26px' }}>
            Max
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

      <List sx={{ width: '100%', display: 'grid', gridTemplateColumns: { md: '1fr 1fr' } }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
          <ListItem key={value} disableGutters sx={{ display: 'grid', gridTemplateColumns: '30px 30px 1fr' }}>
            <ItemText sx={{ width: '26px' }}>21</ItemText>
            <ItemText sx={{ width: '26px', marginLeft: '14px' }}>22</ItemText>
            <ItemText sx={{ marginLeft: '14px' }}>Rio de janeiro</ItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ListClimateCapitals