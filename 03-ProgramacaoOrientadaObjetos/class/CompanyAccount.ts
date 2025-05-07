import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        let balance = this.getBalance();
        balance += value;
        this.setBalance(balance);
        console.log(`Empréstimo de R$${value} efetuado com sucesso seu saldo é R$${balance}`)
    }


}