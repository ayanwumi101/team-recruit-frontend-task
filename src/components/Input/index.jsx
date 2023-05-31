import { Input } from '@chakra-ui/react'
import React from 'react'

const index = ({width, }) => {
  return (
    <Input
      type="text"
      value={cardNumber}
      onChange={handleChange}
      placeholder="2412  -  7512  -  3412  -  3456"
      maxLength={31}
      fontWeight='medium'
      bg='gray.50'
      border='1.7px solid lightgray'
      outline='none'
      size='lg'
      color='blue.900'
      _placeholder={{ color: 'gray.400' }}
    />
  )
}

export default index