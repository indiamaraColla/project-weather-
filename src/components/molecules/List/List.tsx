import React from 'react'
import { ListItem } from '@mui/material'
import { CardList, ItemText } from './List.styles'
import { CapitaisProps } from './List.types'

const List = ({ capitais }: CapitaisProps) => {
  return (
    <CardList sx={{ width: '100%', display: 'grid', gridTemplateColumns: { md: '1fr 1fr' } }}>
      {capitais.map((item, index) => (
        <ListItem key={index} disableGutters sx={{ display: 'grid', gridTemplateColumns: '30px 30px 1fr' }}>
          <ItemText sx={{ width: '26px' }}>{item.max}</ItemText>
          <ItemText sx={{ width: '26px', marginLeft: '14px' }}>{item.min}</ItemText>
          <ItemText sx={{ marginLeft: '14px' }}>{item.city}</ItemText>
        </ListItem>
      ))}
    </CardList>
  )
}

export default List
