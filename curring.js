// curring -> allows us to take a function with multiple parameter  and to convert it into a function with single parameter 
console.log("hello world")
function num1(a){
    return function num2(b){
        return a +b
    }
}
// ________________________________________________

let sum = num1(5)
console.log(sum(5))
// ________________________________________________
const num = a=> b=> a + b

let total = num(7)(8)
console.log(total)