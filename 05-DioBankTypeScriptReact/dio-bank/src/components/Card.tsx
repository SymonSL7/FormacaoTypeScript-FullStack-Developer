import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input
} from '@chakra-ui/react'
import { login } from '../services/login';
import { Header } from './Header/Header';
import { Footer } from './Footer';


export const Card = () => {
    return (

    <>

    <ChakraProvider>

            <Box minHeight='100vh' backgroundColor='#9413DC' padding='25px'>

                <Box backgroundColor='#A020F0' borderRadius='25px' padding='15px' minHeight='100vh' color='#FFF'>

                    <Center>

                        <h1>Faça o login</h1>

                    </Center>
                    
                    <Input backgroundColor='#FFF' color='#000' marginBottom='5px' marginTop='5px' placeholder='email' type='email' />

                    <Input backgroundColor='#FFF' color='#000' placeholder='password' type='password' />
                   
                    <Center>

                        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='10px'>Entrar</Button>

                    </Center>

                </Box>

            </Box>

        </ChakraProvider>
        
        </>
    
    )
}