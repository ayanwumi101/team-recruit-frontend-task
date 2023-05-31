import { Box, Text, Image, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import {Bank} from 'iconsax-react'

const Logo = () => {
  return (
    <Box>
        <Stack direction="row" spacing={2} alignItems='center'>
            <Box bg='#4ae' w='50px' h='50px' borderRadius='50%' textAlign='center' display='flex' alignItems='center' justifyContent='center' boxShadow='md'>
                <Bank color="white" size='24' />
            </Box>
            <Text fontSize="lg" fontWeight="bold" color="black">AceCoinPay</Text>
        </Stack>
    </Box>
  )
}

export default Logo