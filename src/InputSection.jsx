import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './components/Header/Header'
import { CardNumberInput } from './components/CardInput/CardInput'
import Button from './components/Button/ButtonComponent'

const InputSection = () => {
  return (
    <Box w='100%'>
        <Header />
        <CardNumberInput />
        <Button text='Pay Now' color='white' fontSize='18px' fontWeight='medium' bg='blue.600' width='100%' height='55px' />
    </Box>
  )
}

export default InputSection