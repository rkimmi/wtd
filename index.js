// const for variables we don't reassign, and let for changing variables
// variable
const age = 21
let name = 'Kimmi'

name = 'Julia'


console.log('My name is ' + name + ', i am ' + age + ' years old')

// object
const friend = {
    name: name,
    age: 28,
    hair: 'brown',
    interests: ['books', 'coding', 'food']
}
// array

const allVariables = [age, name, friend]
console.log(allVariables)
// const box = document.getElementsByClassName('box')
// const circle = document.getElementsByClassName('circle')
