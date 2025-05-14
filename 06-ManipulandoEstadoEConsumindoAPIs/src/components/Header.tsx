import {
    Box,
    ChakraProvider,
    Center

} from '@chakra-ui/react'

export const Header = () => {
    return (
        <ChakraProvider>
            <Box backgroundColor='#4B0082' padding='15px' color='#FFF' minHeight='5vh' maxHeight='5vh'>
                <Center>
                    Dio Bank
                </Center>

            </Box>
        </ChakraProvider>

    )
}
