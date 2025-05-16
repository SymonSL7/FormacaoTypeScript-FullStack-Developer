import {
    Box,
    ChakraProvider,
    Center,
    Flex,
    Spacer,
    Button
} from '@chakra-ui/react'
import { useContext } from 'react';
import { AppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';


export const Header = () => {

    const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);

    const navigate = useNavigate();

    const logout = () => {
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <ChakraProvider>

            <Flex backgroundColor='#4B0082'>

                <Box padding='15px' color='#FFF' maxHeight={'10vh'} minHeight={'10vh'}>

                    <Center maxHeight={'5vh'} minHeight={'5vh'}>

                        Dio Bank

                    </Center>

                </Box>

                {
                    isLoggedIn && (
                        <>
                            <Spacer />

                            <Button
                                onClick={() => logout()}
                                margin={"15px"}>
                                Sair
                            </Button>
                        </>
                    )
                }

            </Flex>


        </ChakraProvider>

    )
}
