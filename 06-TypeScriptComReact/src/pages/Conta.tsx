import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";
import { useState, useEffect } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data);
        }

        getData();
    }, [])

    const actualData = new Date();

    const { id } = useParams();

    const navigate = useNavigate();

    if(userData && id !== userData.id){
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
                                    ${actualData.getDate()} / ${actualData.getMonth()+1} / ${actualData.getFullYear()} 
                                    ${actualData.getHours()}:${actualData.getMinutes()}`} />

                                <CardInfo mainContent={`Saldo:`} content={`R$ ${userData.balance}`} />
                            </>
                        )
                }

            </SimpleGrid>

        </Center>

    );
}

export default Conta;