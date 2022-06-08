import React from 'react'

import { Text } from './Title.styles'
import { TitleStyleParams } from './Title.types'

const Title = ({ text, capitais }: TitleStyleParams) => {
  return <Text capitais={!!capitais}>{text}</Text>
}

export default Title
