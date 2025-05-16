import {
    Box,
    Center,
    ChakraProvider,
} from '@chakra-ui/react'

export const Card = ({ children }: any) => {

    return (

        <>

            <ChakraProvider>

                    <Center>

                        <Box backgroundColor='#A020F0' color='#FFF' borderRadius='25px' padding='15px'
                            minHeight={'70vh'} maxHeight='80vh'>
                            
                            { children }

                        </Box>
                        
                    </Center>
                
            </ChakraProvider>

        </>

    )
}