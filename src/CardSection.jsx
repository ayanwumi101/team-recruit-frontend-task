import React from 'react'
import Card, { CardDetailsBg } from './components/Card/Card'
import { Box } from '@chakra-ui/react'

const CardSection = () => {
  return (
    <Box position='relative'>
        <Card />
        <CardDetailsBg/>
    </Box>
  )
}

export default CardSection