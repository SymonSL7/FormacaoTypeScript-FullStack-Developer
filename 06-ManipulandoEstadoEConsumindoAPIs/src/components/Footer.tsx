import {
    Box,
    ChakraProvider,
    Center

} from '@chakra-ui/react'

export const Footer = () => {
    return (
        <ChakraProvider>
            <Box backgroundColor='#4B0082' padding='15px' color='#FFF' minHeight='5vh' maxHeight={'5vh'}>
                <Center>
                    Footer
                </Center>

            </Box>
        </ChakraProvider>
    )
}