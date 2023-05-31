import { Box, Text, Stack, Image, Flex, Heading } from '@chakra-ui/react'
import { Apple, Archive } from 'iconsax-react'
import React from 'react'
import mastercard from '../../assets/mastercard.png'
import CardChip from './CardChip'
import CardWaves from './CardWaves'

const Card = () => {
  return (
    <Box>
      <Box width='70px' h='30px' mx='auto' borderRadius={2} bg='blue.300' position='absolute' inset='0'></Box>
      <Box 
        w='220px' 
        h='300px'
        mx='auto'
        inset='0'
        top='7px' 
        bg='rgba(255, 255, 255, 0.64)' 
        borderRadius='16px' 
        boxShadow='0 4px 30px rgba(0, 0, 0, 0.1)' 
        border='1.5px solid rgba(255, 255, 255, 0.3)' 
        backdropFilter='blur(12.9px)'
        position='absolute'
        zIndex='1'
        p='5'
      >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <CardChip />
          <CardWaves />
        </Stack>

        <Stack direction='column' mt='16' mb='12'>
          <Text color='blue.900' fontWeight='medium'>Jonathan Micheal</Text>
          <Flex alignItems='flex-start' gap={4} my='0'>
            <Heading color='blue.900' fontSize={23}>.... </Heading>
            <Heading fontSize={23} color='blue.900'>3456</Heading>
          </Flex>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Text color='blue.900' fontWeight='medium'>09/22</Text>
          <Box>
            <Image src={mastercard} alt='mastercard logo' w='100&' h='100%' />
          </Box>
        </Stack>
    </Box>
    </Box>
  )
}

export default Card


export const CardDetailsBg = () => {
  return (
    <>
      <Box bg='gray.200' p='4' w='300px' h='450px' position='absolute' mx='auto' inset='0' top='120px' borderRadius={10}>
        <Stack direction='column' spacing={4} mt='70%'>
          <Box>
            <Stack direction='row' alignItems='center' justifyContent='space-between' fontSize={14}>
              <Text fontWeight='semibold' color='gray.500'>Company</Text>
              <Flex>
                <Apple variant='Bold' /> 
                <Text fontWeight='bold' color='blue.900'>Apple</Text>
              </Flex>
            </Stack>
          </Box>
          <Box>
            <Stack direction='row' alignItems='center' justifyContent='space-between' fontSize={14}>
              <Text color='gray.500' fontWeight='semibold'>Order Number</Text>
              <Text color='blue.900' fontWeight='bold'>1234676858</Text>
            </Stack>
          </Box>
          <Box>
            <Stack direction='row' alignItems='center' justifyContent='space-between' fontSize={14}>
              <Text color='gray.500' fontWeight='semibold'>Product</Text>
              <Text color='blue.900' fontWeight='bold'>MacBook Air</Text>
            </Stack>
          </Box>
          <Box>
            <Stack direction='row' alignItems='center' justifyContent='space-between' fontSize={14}>
              <Text color='gray.500' fontWeight='semibold'>VAT(20%)</Text>
              <Text color='blue.900' fontWeight='bold'>$100.00</Text>
            </Stack>
          </Box>

          <Box w='100%' h='2px' border='1.5px dashed lightgray'></Box>

          <Box>
            <Text color='gray.500' fontWeight='semibold' fontSize={14} mb='2'>You have to pay</Text>
            <Stack direction='row' justifyContent='space-between'>
              <Flex alignItems='flex-end'>
                <Heading color='blue.900' fontSize={29}>549</Heading>
                <Text color='blue.900' fontWeight='semibold' fontSize={16}>.99 </Text>
                <Text ml='2' color='gray.500' fontWeight='semibold' fontSize={14}> USD</Text>
              </Flex>
              <Archive color='darkblue' />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  )
}