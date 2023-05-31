import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const ButtonComponent = ({ bg, color, fontSize, text, fontWeight, width, height }) => {
    return (
        <Box mt='10'>
            <Button
                bg={bg}
                color={color}
                fontSize={fontSize}
                fontWeight={fontWeight}
                width={width}
                height={height}>
                {text}
            </Button>
        </Box>
    )
}

export default ButtonComponent