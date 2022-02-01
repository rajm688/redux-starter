console.log("Hello World!");
import { Map } from "immutable";
import {produce} from "immer"
import { compose, pipe } from "lodash/fp";

// function Programming

//Functions are first class citizens in javascript -> they can pass to variables or argumennts to other functions similar to objects or can be returned by a function

//Higher order functions -> function which takes other function as arguments or returns a function
// examples of higher order function map, settimeout

// ________________________________________________

//basic function
function sayHello() {
  return "Hello world";
}
const fn = sayHello; // we are not calling the function here we are just passing as a referance
console.log(fn()); // similar to sayHello()

// ________________________________________________

function greet(fnMessage) {
  // passing a function as a parameter for another function
  console.log(fnMessage());
}
greet(sayHello);

// ________________________________________________

function hello() {
  return function () {
    // function returning a another function
    return "Hello world";
  };
}
const fnhello = hello();
console.log("function returning another function", fnhello());
// ________________________________________________

// Function composition
let input = "   javascript   ";
// let trim = input.trim()
// let div = "<div>"+trim+"<div>"
// console.log(div)

// we can write this as a function
// const trim = (input) => input.trim();
// const wrapInDiv = (trim) => `<div>${trim}<div>`;
// const tolowerCase = (str) => str.toLowerCase();
// console.log(wrapInDiv(trim(input))); // Function composition

// ________________________________________________

//composing and piping

// we need to import a module called npmm lodash and import it -> utility library for js and helps in writing functional programming

// const trim = (input) => input.trim();
// const tolowerCase = (str) => str.toLowerCase();
// const wrapInDiv = (trim) => `<div>${trim}<div>`;
// const traansform = compose(wrapInDiv,tolowerCase,trim)// passing function referaance as an argument
// //compoise is a higher order function
// console.log("output from compose" , traansform(input))

// using pipe
// const trim = (input) => input.trim();
// const tolowerCase = (str) => str.toLowerCase();
// const wrapInDiv = (trim) => `<div>${trim}<div>`;
// const traansform = pipe(trim,tolowerCase,wrapInDiv)// passing function referaance as an argument ->we can not pass pass function with two parameter in pipeline
// //pipe is a higher order function
// console.log("output from compose" , traansform(input))

// ________________________________________________

// curring -> allows us to take a function with multiple parameter  and to convert it into a function with single parameter 
// const trim = (input) => input.trim();
// const tolowerCase = (str) => str.toLowerCase();
// const wrap = type => trim=> `<${type}>${trim}</${type}>`;
// const traansform = pipe(trim,tolowerCase,wrap("div"))// passing function referaance as an argument ->we can not pass pass function with two parameter in pipeline
// //pipe is a higher order function
// console.log("output from compose after curring" , traansform(input))

// pure functions -> functions which always return same value when same parameter is passed

// Immutabiltiy -> values cnnnot change

// to create a duplicate obj
const person = {name:"mahesh"}
// const updated = Object.assign({},person,{name:"suresh"})
const updated = {...person,name:"mahesh"}
console.log(person,updated)

//array  mutability

// ________________________________________________
 
// Immutable.js

// ________________________________________________

// immer

const book = {title:"harry potter"}
function publish(book){
    produce(book,DraftBook=>{
        DraftBook.isPublished = true;

    })
}
let updatedbook = publish(book)
console.log(book)
console.log(updatedbook)

// ________________________________________________
