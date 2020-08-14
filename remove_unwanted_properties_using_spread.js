const sensitiveData = {
    name: 'John',
    surname: 'Doe',
    password: 'secretPassword',
    userId: 123456,
    bankBalance: 100
}

const { password, bankBalance, ...userData } = sensitiveData

console.log(userData)