//if
//else if
//if else
//switch case
//ternary operator

// If
let marks = 99

if (marks > 90) {
    console.log('best')
}
if (marks > 70) {
    console.log('better')
}
if (marks > 60) {
    console.log('good')
}

//Else if
let marks2 = 65

if (marks2 > 90) {
    console.log('best')
}
else if (marks2 > 70) {
    console.log('better')
}
else if (marks2 > 60) {
    console.log('good')
}


let marks3 = 50

if (marks3 > 90) {
    console.log('best')
}
else if (marks3 > 70) {
    console.log('better')
}
else if (marks3 > 60) {
    console.log('good')
}
else{
    console.log('invalid input')
}

//If else
let a = 20
let b = 100
if (a > b) {
    console.log('A is greater')
}
else{
    console.log('B is greater')
}

//ternary operator  => single condition

//syntax
//condition ? true :false
//a > b ? console.log('A is greater') : console.log('B is greater')
// let result = a > b ? 'A is greater' : 'B is greater'
// console.log(result)

let A = 100
let B = 50

if(A > B){
    console.log('A is greater')
}
else{
    console.log('B is greater')
}
a > b ? console.log('A is greater') : console.log('B is greater')

let age = 18
let a1 = age >= 18 ? "can drive":"cannot drive"
console.log(a1)
//====================================================================

//switch case ==> multiple condition

//1. switch case without break

// 1 => monday  2 => tuesday 3 => wednesday

let day=3
if (day == 1) {
    console.log('monday')
}
else if (day == 2) {
    console.log('tuesday')
}
else if (day == 3) {
    console.log('wednesday')
}

let Day = 2
switch (Day) {
    case 1:
        console.log("monday")
    case 2:
        console.log('tuesday')
    case 3:
        console.log('wednesday')
    case 4:
        console.log('thrusday')
    case 5:
        console.log('friday')
    case 6:
        console.log('saturday')
    case 7:
        console.log('sunday')
}

//2. switch case with break

let dayy = 5
switch (dayy) {
    case 1:
        console.log("monday")
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thrusday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    case 7:
        console.log('sunday')
        break
}



let dAy = 0
switch (dAy) {
    case 1:
        console.log("monday")
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thrusday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    case 7:
        console.log('sunday')
        break
    default:
        console.log('please enter correct number')
}