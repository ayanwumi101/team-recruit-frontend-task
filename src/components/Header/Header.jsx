import React from 'react'
import Logo from '../Logo/Logo'
import Counter from '../Counter/Counter'
import { Stack, Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box mb='7' w='100%'>
        <Stack direction='row' justifyContent='space-between'>
            <Logo />
            <Counter />
        </Stack>
    </Box>
  )
}

export default Header