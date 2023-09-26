// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
    const driversMatching = array.filter((driver) => driver.toUpperCase() === name.toUpperCase())
    return driversMatching;
}

function fuzzyMatch(array, letter) {
    const letterMatch = array.filter((driver) => driver.substring(0,2) === letter.substring(0,2))
    return letterMatch
}

function matchName(array, name) {
    const match = array.filter((driver) => driver.name === name) 
    return match
}
