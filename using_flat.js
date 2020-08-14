const scoresByDay = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const average = arr => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    return sum / arr.length
}

const scoresWithoutFlat = scoresByDay.reduce((acc, curr) => acc.concat(curr), [])

console.log(average(scoresWithoutFlat))

console.log(average(scoresByDay.flat()))
