import {
    Box,
    ChakraProvider,
    Center

} from '@chakra-ui/react'

export const Header = () => {
    return (
        <ChakraProvider>
            <Box backgroundColor='#4B0082' padding='15px' color='#FFF'>
                <Center>
                    <div className='header'>
                        Dio Bank
                    </div>
                </Center>

            </Box>
        </ChakraProvider>

    )
}
