import { Button, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {setIsLoggedIn} = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login(email, senha)

        if(!loggedIn){
            return alert('Email ou Senha invaládio!');
        }

        setIsLoggedIn(true);
        changeLocalStorage({ login: true })
        navigate('/conta/1');
    }

    return (

        <Card>

            <Center>

                <h1>Faça o login</h1>

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

                <Button onClick={() => validateUser(email, password)}
                    colorScheme='teal' size='sm' width='100%' marginTop='10px'>Entrar</Button>

            </Center>

        </Card>

    );

}

export default Home;