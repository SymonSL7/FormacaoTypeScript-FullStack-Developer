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

    deposit = (value:number): void => {
        if(this.validateStatus()){
            this.balance += value
            console.log(`Deposito de R$${value} efetuado com sucesso seu saldo é R$${this.balance}`)
        }
    };

    withdraw = (value: number): void => {
        if(this.validateStatus()){
            if(this.balance >= value){
                this.balance -= value
                console.log(`Saque de R$${value} efetuado com sucesso seu saldo é R$${this.balance}`)
            } else {
                console.log(`Não é possível fazer o saque, saldo insuficiente! Seu saldo atual é de R$${this.balance}`)
            }
        }
    };

    getBalance = (): number => {
        return this.balance
    };

    getCheckBalance = (): void => {
        console.log(`Seu saldo atual é de R$${this.balance}`);
    }

    setBalance = (value: number): void => {
        this.balance = value;
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } 

        throw new Error('Conta Inválida!');
    }

}