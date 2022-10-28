import { Typography, styled } from '@mui/material'
import { List } from '@mui/material'

export const CardList = styled(List)``

export const styles = {
  minimum: {
    width: '26px',
    marginLeft: '14px',
  },
  city: {
    marginLeft: '14px',
  },
}

export const boxListItem = {
  display: 'grid',
  gridTemplateColumns: '30px 30px 1fr',
}

export const ItemText = styled(Typography)`
  font-weight: 600;
`
