const rectangle = {
    sideA: 10,
    color: 'red'
}

const calculateAres = rectangle => {
    const { sideA = 0, sideB = 0 } = rectangle
    return sideA * sideB
}

console.log(calculateAres(rectangle))