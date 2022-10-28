import React from 'react'
import { Box, Paper, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Props } from './Search.types'

const Search = ({ placeholder, value, onChange, inputProps, onBlur, onClick }: Props) => {
  return (
    <Box sx={{ margin: { xs: '20px', md: '40px' } }}>
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
        <InputBase
          sx={{ ml: 1, flex: 1, borderRadius: '0', outlined: 'none' }}
          value={value}
          placeholder={placeholder}
          inputProps={inputProps}
          onChange={onChange}
          onBlur={onBlur}
        />
        <IconButton onClick={onClick} sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}

export default Search
