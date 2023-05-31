import { Box, Heading, Text, Input, Icon, Stack, InputGroup } from '@chakra-ui/react'
import React from 'react'

const CardText = ({heading, text,}) => {
  return (
    <Box mb='4'>
      <Stack>
        <Box>
          <Heading mb='1' fontSize={16} fontWeight='bold'>{heading}</Heading>
          <Text fontSize={14} color='gray.400' fontWeight='medium'>{text}</Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default CardText