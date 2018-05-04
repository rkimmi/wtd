function changeShape () {
    document.getElementById('one').classList.add('circle')
}

function makeBig () {
    document.getElementById('two').classList.replace('box', 'biggerbox')
}

const colorArray = ['green', 'pink', 'dodgerblue', 'yellow', 'orange', 'grey', 'red', 'violet']
let counter = 0

function changeColor () {
    const lastIndex = counter
    counter++

    if (counter >= colorArray.length) counter = 0
    console.log(lastIndex)
    console.log(counter)

    document.getElementById('two').classList.remove(colorArray[lastIndex])
    document.getElementById('two').classList.add(colorArray[counter])
}

function moveSides () {
    document.getElementById('three').classList.add('right')
}



