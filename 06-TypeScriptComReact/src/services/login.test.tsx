
import { login } from "./login"


describe('login', () => {

    const mockEmail = 'symon@symon.com';
    const mockSenha = '123456'

    

    it('Deve exibir um alert com boas vindas, caso o email seja valido', async () => {
       const response = await login(mockEmail, mockSenha)
        expect(response).toBeTruthy();
    })

    it('Deve exibir um erro caso o email seja invalido', async () => {
        const response = await login('Email ou senha invalido', '');
        expect(response).toBeFalsy();
    })
})