import React from 'react'

import { Text } from './Title.styles'
import { TitleStyleParams } from './Title.types'

const Title: React.FC<TitleStyleParams> = ({ text, capitais }) => {
  return <Text capitais={capitais}>{text}</Text>
}

export default Title
