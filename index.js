let age = 21
const name = 'kimmi'

age = 24



const friend = {
    age: 28,
    name: 'Julia',
    interests: ['books', 'coding', 'gaming']
}

console.log(age)
console.log(name)

console.log(`my friends name is ${friend.name}, they are ${friend.age} years old. they are interested in ${friend.interests}`)

function addNumbers (num1, num2) {
    const result = num1 + num2
    return result
}

function multiplyNumbers (num1, num2) {
    const answer = num1 * num2
    return answer
}

console.log(addNumbers(18, 32))
console.log(multiplyNumbers(20, 32))