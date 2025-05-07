import { CompanyAccount } from './class/CompanyAccount';
import { InvestmentAccount } from './class/InvestmentAccount';
import { PeopleAccount } from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Symon', 7);
peopleAccount.getCheckBalance();
peopleAccount.deposit(100);
peopleAccount.withdraw(70);
peopleAccount.withdraw(35);

console.log("---------------------------------------------------------------------------------------");

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 1);
companyAccount.getCheckBalance();
companyAccount.deposit(100);
companyAccount.getLoan(1000);
companyAccount.getLoan(500);
companyAccount.withdraw(750);
companyAccount.withdraw(850);

console.log("---------------------------------------------------------------------------------------");

const investmentAccount: InvestmentAccount = new InvestmentAccount('Pedro', 5);
investmentAccount.getCheckBalance();
investmentAccount.deposit(200);

