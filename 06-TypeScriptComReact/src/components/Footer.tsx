import {
    Box,
    ChakraProvider,
    Center

} from '@chakra-ui/react'

export const Footer = () => {
    return (
        
        <ChakraProvider>

            <Box backgroundColor='#4B0082' padding='15px' color='#FFF' maxHeight={'10vh'} minHeight={'10vh'}>
                
                <Center maxHeight={'5vh'} minHeight={'5vh'}>

                    Footer

                </Center>

            </Box>

        </ChakraProvider>
        
    )
}