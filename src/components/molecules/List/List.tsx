import React from 'react'
import { ListItem } from '@mui/material'
import { CardList, ItemText, styles, boxListItem } from './List.styles'
import { CapitaisProps } from './List.types'

const List = ({ capitais }: CapitaisProps) => {
  return (
    <CardList sx={{ width: '100%', display: 'grid', gridTemplateColumns: { md: '1fr 1fr' } }}>
      {capitais.map((item, index) => (
        <ListItem key={index} disableGutters sx={boxListItem}>
          <ItemText variant="body2" sx={{ width: '26px' }}>
            {item.max}
          </ItemText>
          <ItemText variant="body2" sx={styles.minimum}>
            {item.min}
          </ItemText>
          <ItemText variant="body2" sx={styles.city}>
            {item.city}
          </ItemText>
        </ListItem>
      ))}
    </CardList>
  )
}

export default List
