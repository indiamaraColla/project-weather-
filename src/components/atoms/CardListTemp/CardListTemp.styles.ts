import { Typography, Box, styled } from '@mui/material'

const StyledItemGraus = styled(Typography)`
  color: orange;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledTitle = styled(Typography)`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.00938em;
  text-align: center;
`

export { StyledItemGraus, StyledBox, StyledTitle }
