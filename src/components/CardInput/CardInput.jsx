import React, {useState} from 'react'
import {Input, InputGroup, Icon, InputRightElement, InputLeftElement, Image, Stack, Box, Flex, Text} from '@chakra-ui/react'
import {Verify, Magicpen, Menu, Category} from 'iconsax-react'
import mastercard from '../../assets/mastercard.png'
import CardText from '../Text/CardText'
const CardInput = ({type, value, onChange, placeholder, width, maxLength, pl, textAlign}) => {
  return (
    <Box w={width}>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        fontWeight='medium'
        bg='gray.50'
        border='1.7px solid lightgray'
        outline='none'
        size='lg'
        color='blue.900'
        _placeholder={{ color: 'gray.400' }}
        w='100%'
        pl={pl}
        textAlign={textAlign}
        _focus={{bg: 'blue.50', color: 'blue.500'}}
      /> 
    </Box>
  )
}

export default CardInput



export const CardNumberInput = () => {

  const [cardNumber, setCardNumber] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [password, setPassword] = useState('');

  const formatCardNumber = (value) => {
    const formattedValue = value.replace(/\D/g, '');
    const groups = formattedValue.match(/(\d{1,4})/g);
    if (!groups) {
      return value;
    }
    const formattedNumber = groups.join('  -  ');
    return formattedNumber;
  };

  const handleChange = (event) => {
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, '');
    const formattedNumber = formatCardNumber(numericValue);
    setCardNumber(formattedNumber);
  };

  return (
    <>
    <Stack spacing={9}>
      <Box>
      <Box>
        <Flex alignItems='center' justifyContent='space-between'>
          <CardText heading='Card Number' text='Enter the 16 digit number on the card' />
          <Box cursor='pointer'>
            <Flex gap={2} alignItems='center'>
              <Magicpen color='#4ae' variant='Bold' />
              <Text color='#4ae' fontWeight='medium'>Edit</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box>
        <InputGroup>
          <InputLeftElement ml='3' mt='1'>
            <Image src={mastercard} />
          </InputLeftElement>
            <CardInput 
              type='text' 
              value={cardNumber} 
              width='100%' 
              onChange={handleChange} 
              pl='16' 
              maxLength={33} 
              placeholder='2412  -  7512  -  3412  -  3456' 
            />
          <InputRightElement mr='2'>
            <Icon as={Verify} color='#4ae' mt='2' variant='Bold' fontSize={23} />
          </InputRightElement>
        </InputGroup>
      </Box>
      </Box>

       <Box>
        <Flex alignItems='center' justifyContent='space-between' flexWrap={{base: 'wrap',}}>
          <CardText heading='CVV Number' text='Enter 3 or 4 digit number on the card' />
            <InputGroup w={{ base: '100%', lg: '50%' }}>
              <CardInput
                type='text'
                value={cvvNumber}
                width='100%'
                onChange={(e) => setCvvNumber(e.target.value)}
                maxLength={3}
                placeholder='123'
                textAlign='center'
              />
              <InputRightElement mr='2' mt='1'>
                <Icon as={Category} color='gray' fontSize={23} variant='Bold' />
              </InputRightElement>
            </InputGroup>
        </Flex>
      </Box>


      <Box>
        <Flex alignItems='center' justifyContent='space-between' flexWrap={{base: 'wrap',}}>
          <CardText heading='Expiry Date' text='Enter the expiration date of the card' />
            <Box w={{ base: '100%', lg: '50%' }}>
              <Flex alignItems='center' gap={6}>
                <CardInput
                  type='text'
                  value={expiryMonth}
                  width='100%'
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  maxLength={2}
                  placeholder='06'
                  textAlign='center'
                />

              <Text fontWeight='bold'>/</Text>

                <CardInput
                  type='text'
                  value={expiryYear}
                  width='100%'
                  onChange={(e) => setExpiryYear(e.target.value)}
                  maxLength={2}
                  placeholder='09'
                  textAlign='center'
                />
              </Flex>
            </Box>
        </Flex>
      </Box>

      <Box>
        <Flex alignItems='center' justifyContent='space-between' flexWrap={{base: 'wrap',}}>
          <CardText heading='Password' text='Enter your Dynamic password' />
            <InputGroup w={{base: '100%',lg: '50%'}}>
              <CardInput
                type='password'
                value={password}
                width='100%'
                onChange={(e) => setPassword(e.target.value)}
                maxLength={12}
              />
              <InputRightElement mr='2' mt='1'>
                <Icon as={Category} color='gray' fontSize={23} variant='Bold' />
              </InputRightElement>
            </InputGroup>
        </Flex>
      </Box>

    </Stack>
    </>
  );
};




