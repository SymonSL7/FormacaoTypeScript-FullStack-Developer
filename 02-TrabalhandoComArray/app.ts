
const numeroArray: Array<number> = [1, 2, 3, 4];

const stringArray: string[] = ['a', 'b', 'c', 'd'];

console.log('Array original', numeroArray);

numeroArray.push(5);

console.log('Array com novo elemento', numeroArray);

numeroArray.pop();

console.log('Array após remover o último elemento', numeroArray);

console.log('-----------------------------------------------------------------------------------------');

const buscaLetra = stringArray.find(letra => letra === 'c');

console.log('Find, Buscou a Letra', buscaLetra?.toLocaleUpperCase());

console.log('-----------------------------------------------------------------------------------------');

numeroArray.forEach(num => {
    if (num > 2) {
        console.log(num)
    }
});

console.log('-----------------------------------------------------------------------------------------');

numeroArray.map(num => {
    if(num > 2 && num % 2 ===0){
        console.log(num*2);
    }
});