interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
};

const pessoa: Pessoa = {
    nome: 'Symon',
    idade: 27,
    profissao: 'Desenvolvedor'
};

const pessoa2: Pessoa = {
    nome: 'Lucas',
    idade: 30
};


const arrayPessoa: Array<Pessoa> = [
    pessoa,
    pessoa2
];

const arrayNum: number[] = [1, 2, 3];

const arrayString: Array<string> = ['1', '2', '3'];

console.log("----------------------------------------------------------------------------------------------------");

const tiposUsuarios = {
    admin: 'Seja bem vindo admin',
    estudante: 'Você é um estudante',
    viewer: 'Você pode visualizar'
};

function validateUser(usuario: string) {
    console.log(tiposUsuarios[usuario as keyof typeof tiposUsuarios])
};

const usuario = 'admin';

validateUser(usuario);
validateUser('estudante');
validateUser('viewer');

console.log("----------------------------------------------------------------------------------------------------");

for(let i =0; i < 5; i++){

    console.log(i);

};

console.log("----------------------------------------------------------------------------------------------------");

let n = 2;

while(n < 6){
    console.log(n);
    n++;
};


