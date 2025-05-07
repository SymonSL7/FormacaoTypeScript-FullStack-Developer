import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Symon', 7);
console.log(peopleAccount);
peopleAccount.deposit();
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 1);
companyAccount.deposit();
console.log(companyAccount.getAccountNumber());

