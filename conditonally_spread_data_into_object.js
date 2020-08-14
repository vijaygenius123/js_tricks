const isAdmin = () => false

const userData = {
    name: 'John',
    surname: 'Doe',
}

const userObject = {
    userId: 123,
    ...userData,
    ...isAdmin() ? { is_admin: true } : {}
}

console.log(userObject)
