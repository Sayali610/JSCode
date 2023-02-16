//1. function without para and without return type

function add(){
    console.log(10+10)
}
add() //20
add() //20
add() //20


//2. function with para and without return type

function add1(x, y) {
    console.log(x + y)
}
add1(10,2) //12
add1(5,6) //11
add1(100,20) //120

//100 give

//100 show

//3. function with para and with return type

function add2(a, b) {
    return a + b
}
let y1 = add2(20, 2)
console.log(y1) //22

console.log(y1 + 10) //32