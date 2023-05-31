import React from 'react'
import Logo from './components/Logo/Logo'
import Header from './components/Header/Header'
import { Box, Stack, Text } from '@chakra-ui/react'
import CardText from './components/Text/CardText'
import { CardNumberInput } from './components/CardInput/CardInput'
import InputSection from './InputSection'
import CardSection from './CardSection'
const Layout = () => {
  return (
    <Box w='100%' h='100%'>
      <Stack direction={{base: 'column', md: 'row', lg: 'row'}} justifyContent={{base: 'center', md: 'space-between', lg: 'space-between'}}>
        <Box w={{base: '100%', md: '55%', lg: '55%'}} mx={{base: 'center'}} mb='12'>
          <InputSection />
        </Box>
        <Box w={{ base: '100%', md: '35%', lg: '35%' }} mx={{ base: 'center' }}>
          <CardSection />
        </Box>
      </Stack>
    </Box>
  )
}

export default Layout