import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";
import { useState, useEffect, useContext } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";


interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();

    const { id } = useParams();

    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext);

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data);
        }

        getData();
    }, [])

    const actualData = new Date();



    if (userData && id !== userData.id) {
        navigate('/');
    }

    return (

        <Center>

            <SimpleGrid columns={2} spacing={8} paddingTop={8}>

                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner color={'#FFF'} size={'xl'} />
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent={`Bem vindo ${userData?.name}`}
                                    content={`
                                    ${String(actualData.getDate()).padStart(2, '0')} / ${String(actualData.getMonth() + 1).padStart(2, '0')} / ${actualData.getFullYear()} 
                                    ${String(actualData.getHours()).padStart(2, '0')}:${String(actualData.getMinutes()).padStart(2, '0')}`} />

                                <CardInfo mainContent={`Saldo:`} content={`R$ ${userData.balance}`} />
                            </>
                        )
                }

            </SimpleGrid>

        </Center>

    );
}

export default Conta;