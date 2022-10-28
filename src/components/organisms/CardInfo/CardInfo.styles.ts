import { Box } from '@mui/material'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f7d8bb;
  margin: 14px 40px;
  padding: 14px;

  @media (max-width: 768px) {
    margin: 0 0 14px 0;
    padding: 14px 0;
  }
`

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export { StyledBox, Container }
