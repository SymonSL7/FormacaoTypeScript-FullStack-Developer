export abstract class DioAccount {

    private name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    };

    setName = (name: string): void => {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }

    getAccountNumber = (): number => {
        return this.accountNumber;
    }

    deposit = (): void => {
        if(this.validateStatus()){
            console.log('Você depositou!')
        }
    };

    withdraw = (): void => {
        console.log('Você sacou!')
    };

    getBalance = (): void => {
        console.log(`Você tem R$${this.balance} de saldo`);
    };

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } 

        throw new Error('Conta Inválida!');
    }

}