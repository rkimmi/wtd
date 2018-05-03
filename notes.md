set up document - 
comment out links to

## HTML Elements (aka Tags)
```
<h1> Hello world! </h1>
<em>I am emphasised!</em> -->

Sometimes there is no closing tag;
I'm on one line. <br>
And I'm on the next line.

How 'bout a sweet horizontal rule?<hr>
``` 

### HTML attributes 
 ``` 
 <img src="" alt=""> 
 ```

#VIDEO FIX

## CSS 
### <style> tag, then:

 ``` 
 <link rel="stylesheet" type="text/css" media="screen" href="main.css" /> 
 ```

### selectors 
A really popular way to select elements is to assign them a class and then target the classes in your selection.

.h1 {}  

### div/div class=
The first step is to assign a class to an element.

You can add as many as you like just by separating them with a space.

You can also access elements by id's using #

## Declarations

Declarations are made up of the style you want to change and the style's new value.

### fonts 
font: 16px "Open Sans", sans-serif;
### background image
background-image: url('')


## JavaScript!
While the web browser is loading our HTML and CSS, it's creating a structure called the Document Object Model (DOM). If the DOM changes after it has been created by the browser, we see the results of those changes in the browser right away. JavaScript is the language we use to alter the DOM. This allows us to create behaviours that add interactivity to our pages.


## Variables

Variables allow us to work with values - there are different ways to declare variables, using the let or const keyword.

// var, obj, array
```
const age = 21
let name = 'Kimmi'

name = 'Julia'

console.log('My name is ' + name + ', i am ' + age + ' years old')

console.log('i am in the console!')
console.log(var, obj, array)
```

## Functions
Functions give us a way to perform operations. First we have to define the function.

// add
```
function add(num1, num2) {
    const result = num1 + num2
    return result
}
``` 
// minus 
// multiply

## Event Listeners
// change branch
// add script to html

```
function changeShape() {
    document.getElementById("one").classList.toggle("circle")
}

function moveSides() {

}

function makeBig() {

}

function changeColor() {
 // first pink, then change
}

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
```












