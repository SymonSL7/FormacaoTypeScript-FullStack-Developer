const conta = {
    email: 'symon@symon.com',
    password: '123456',
    name: 'Symon Lima'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})