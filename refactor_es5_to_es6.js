var animals = [
    { name: 'dogs', legs: 4 },
    { name: 'cats', legs: 4 },
    { name: 'humans', legs: 2 },
]


var twoLeggedAnimals_es5 = animals
    .filter(function (animal) {
        return animal.legs === 2
    })
    .map(function (animal) {
        return animal.name
    })


var twoLeggedAnimals_es6 = animals
    .filter(animal => animal.legs === 2)
    .map(animal => animal.name)

console.log(twoLeggedAnimals_es5)
console.log(twoLeggedAnimals_es6)