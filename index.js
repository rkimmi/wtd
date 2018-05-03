let age = 21
const name = 'Kimmi'

age = 24

// console.log(`Hi, my name is ${name}. I am ${age} years old`)

const friend = {
    name: "Julia",
    age: age + 1,
    interests: ['books', 'coding', 'sleeping']
}

// console.log(`My friend is ${friend.name}, they are ${friend.age} years old, they are interested in ${friend.interests}`)

function addNumbers (num1, num2) {
    const result = num1 + num2
    return result
}

function multiplyNumbers (x, y) {
    const answer = x * y
    return answer
}

// console.log(addNumbers(20, 8))
// console.log(multiplyNumbers(2, 8))

function changeShape () {
    document.getElementById('one').classList.add('circle')
}

function moveSides () {
    document.getElementById('three').classList.add('right')
}

function makeBig () {
    document.getElementById('two').classList.replace('box', 'biggerbox')
}

const colorArray = ['pink', 'green', 'orange', 'dodgerblue', 'grey', 'violet', 'red']
let counter = 0


function changeColor () {
    let lastIndex = counter
    counter++

    if (counter >= colorArray.length) counter = 0
    console.log(lastIndex)
    console.log(counter)

    document.getElementById('two').classList.remove(colorArray[lastIndex])
    document.getElementById('two').classList.add(colorArray[counter])
}
