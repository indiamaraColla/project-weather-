import React from 'react'
import { CardListTempStyleParams } from './CardListTemp.types'
import { StyledItemGraus, StyledBox, StyledTitle } from './CardListTemp.styles'

const CardListTemp = ({ title, subtitle }: CardListTempStyleParams) => {
  return (
    <StyledBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledItemGraus>{subtitle}</StyledItemGraus>
    </StyledBox>
  )
}

export default CardListTemp
