import {
    Box,
    ChakraProvider,
    Center

} from '@chakra-ui/react'

export const Footer = () =>  {
    return(
        <ChakraProvider>
            <Box backgroundColor='#4B0082' padding='15px' color='#FFF'>
                <Center>
                    <div className='header'>
                        Footer
                    </div>
                </Center>

            </Box>
        </ChakraProvider>
    )
}