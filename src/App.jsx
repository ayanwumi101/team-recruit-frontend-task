import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width='100%' h={{base: '1450px', lg: '100%'}} bg='gray.50'>
      <Box width='90%' mx='auto' py='7'>
        <Layout />
      </Box>
    </Box>
  )
}

export default App
