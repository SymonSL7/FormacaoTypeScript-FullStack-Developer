import { DioAccount } from "./DioAccount";

export class InvestmentAccount extends DioAccount {

    deposit = (value: number): void => {
        let balance = this.getBalance();
        balance += (value+10);
        this.setBalance(balance);
        console.log(`Deposito de R$${value} mais acréscimo de R$10 efetuado com sucesso seu saldo é R$${balance}`)
    }

}