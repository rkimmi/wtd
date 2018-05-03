// const for variables we don't reassign, and let for changing variables
// variable
let divs = document.querySelectorAll('div').forEach(changeColor())
// object

const colorArray = []
let counter = 0

function changeColor() {
    let lastIndex = counter
    counter++

    if (counter >= colorArray.length) counter = 0;
    console.log(lastIndex)
    console.log(counter)

    document.getElementById("two").classList.remove(`${colorArray[lastIndex]}`);
    document.getElementById("two").classList.add(`${colorArray[counter]}`);
}
// array

// const box = document.getElementsByClassName('box')
// const circle = document.getElementsByClassName('circle')
