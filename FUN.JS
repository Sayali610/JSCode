// //function with parameter and with return type
function mul(x, y) {
    return x * y
}
let s1 = mul(10, 2)
console.log(s1)

// // //function with parameter and without return type
function mul1(a,b){
    console.log(a*b)
}
mul1(20,2)

// // //function without para and without type
function mul2(){
    console.log(20*20)
}
mul2()

//1. function declaration

function add(a, b) {
    return a + b
}
let sum=add(2, 2)
console.log(sum)

//2. function expression

let add1 = function (a, b){
    return (a + b)
}
let sum1 = add1(2, 2)
console.log(sum1)


//3. arrow function
let add2 = (a, b) => {
    return (a + b)
}
let sum2 = add1(2, 2)
console.log(sum2)


let mult = function () {
    console.log(3 * 3)
}
mult()

function multi() {
    console.log(2 * 2)
}
multi()

let multip = () => {
    console.log(3 * 3)
}
multip()


//3 type
// function declaration

function Add(x, y) {
    return x + y
}
let result = Add(2, 3)
console.log(result)


//function expression
let Add1 = function (a, b) {
    return a + b
}
let result1 = Add1(2, 3)
console.log(result1)

//x+y
x=20-y

// arrow function //ES6
let Add2 = (a, b) => {
    return a + b
}
let result2 = Add2(2, 3)
console.log(result2)





