const conta = {
    id: '1',
    email: 'symon@symon.com',
    password: '123456',
    name: 'Symon Lima',
    balance: 2000.00
}


export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})