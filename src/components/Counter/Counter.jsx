import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Counter = () => {
  return (
    <Box>
        <Stack direction='row' spacing={2} alignItems='center'>
            <Box>
              <Stack spacing={1} direction='row'>
                <Button fontSize={18} bg='blue.900' color='white'>0</Button>
                <Button fontSize={18} bg='blue.900' color='white'>1</Button>
              </Stack>
            </Box>
            <Text fontWeight='bold' fontSize={18}>:</Text>
            <Box>
              <Stack spacing={1} direction='row'>
                <Button fontSize={18} bg='blue.900' color='white'>1</Button>
                <Button fontSize={18} bg='blue.900' color='white'>9</Button>
              </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Counter