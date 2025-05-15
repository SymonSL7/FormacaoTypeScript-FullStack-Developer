import { login } from "./login"


describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'symon@symon.com';

    

    it('Deve exibir um alert com boas vindas, caso o email seja valido', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })
    it('Não deve exibir um alert com boas vindas', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })

    it('Deve exibir um erro caso o email seja invalido', async () => {
        await login('emailInvalido@invalido.com');
        expect(mockAlert).toHaveBeenCalledWith(`Email invalido!`)
    })
})