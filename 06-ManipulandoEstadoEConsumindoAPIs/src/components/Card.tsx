import {
    Box,
    Button,
    Center,
    ChakraProvider,
    Input
} from '@chakra-ui/react'
import { login } from '../services/login';
import { useState, useEffect } from 'react';
import { api } from '../api';

interface UserData {
    email: string;
    password: string;
    name: string;
}

export const Card = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userData, setUserData] = useState<null | UserData>();

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data);
        }

        getData();
    }, [])



    return (

        <>

            <ChakraProvider>

                <Box minHeight='90vh' maxHeight={'90vh'} backgroundColor='#9413DC' padding='25px'>

                    <Center>
                        <Box backgroundColor='#A020F0' color='#FFF' borderRadius='25px' padding='15px'
                            minHeight={'80vh'} maxHeight='90vh'>

                            <Center>
                                {userData === null || userData === undefined ?
                                    <h1>Carregando...</h1> :
                                    <h1>Bem vindo ao DioBank</h1>}
                            </Center>

                            <Center>

                                <h1>Faça o login</h1>

                            </Center>

                            <Center>
                                <h2>{userData?.name}</h2>
                            </Center>

                            <Input
                                backgroundColor='#FFF' color='#000'
                                marginBottom='5px' marginTop='5px'
                                placeholder='email' type='email'
                                value={email} onChange={(event) => setEmail(event.target.value)} />

                            <Input backgroundColor='#FFF' color='#000'
                                placeholder='password' type='password'
                                value={password} onChange={(event) => setPassword(event.target.value)} />

                            <Center>

                                <Button onClick={() => login(email)}
                                    colorScheme='teal' size='sm' width='100%' marginTop='10px'>Entrar</Button>

                            </Center>

                        </Box>
                    </Center>
                </Box>

            </ChakraProvider>

        </>

    )
}