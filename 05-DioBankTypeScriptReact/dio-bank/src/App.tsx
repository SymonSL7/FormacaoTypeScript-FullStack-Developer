
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input
} from '@chakra-ui/react'
import { login } from './services/login';


function App() {
  return (

    <ChakraProvider>

      <Box minHeight='100vh' backgroundColor='#9413DC' padding='25px'>

        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >

          <Center>

            <h1>Faça o login</h1>

          </Center>

          <Input placeholder='email' />

          <Input placeholder='password' />

          <Center>

            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='10px'>Entrar</Button>

          </Center>
          
        </Box>

      </Box>

    </ChakraProvider>


  );
}

export default App;