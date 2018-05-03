// const for variables we don't reassign, and let for changing variables
// variable

// object

// array

// functions!

const colorArray = ['pink', 'blue', 'green', 'yellow']

function changeShape () {
    document.getElementById("one").classList.toggle("circle")
}

let counter = 0;

function changeColor() {

    lastIndex = counter;
    counter++;
    if (counter >= colorArray.length) counter = 0;
    
    document.getElementById("two").classList.remove(`${colorArray[lastIndex]}`);
    document.getElementById("two").classList.add(`${colorArray[counter]}`);

}

function moveSides () {
    document.getElementById("three").classList.toggle("right")
}

function makeBig () {
    document.getElementById("two").classList.replace("box", "biggerbox")
}




