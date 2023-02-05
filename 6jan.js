

let country = "India"
let A  = country.toUpperCase()
console.log(A)

let B = country.toLowerCase()
console.log(B)

let C = country.includes('d')
console.log(C)

let D = country.includes('dia')
console.log(D)

console.log(typeof country)

let E = country.indexOf('n')
console.log(E)

let F = country.startsWith('I')
console.log(F)
let G = country.startsWith('Ind')
console.log(G)

let H = country.endsWith('a')
let I= country.endsWith('Dia')
console.log(H)
console.log(I)

//----------TRIM---------
let name = "sayali"
console.log(name)

let name1 = " sayali"
console.log(name1.length)
let J = name1.trimStart()
console.log(J.length)

let name2 = "sayali "
console.log(name2.length)
let K = name2.trimEnd()
console.log(K.length)

let name3 = " sayali "
console.log(name3.length)
let L = name3.trim()
console.log(L.length) 

// let fName = " ninad"
// console.log(fName.length)
// let q11 = fName.trimStart()
// console.log(q11.length)

// let fName2 = "ninad "
// console.log(fName.length) 
// let q12 = fName.trimEnd()
// console.log(q12.length)

// let fName3 = " ninad "
// console.log(fName3.length) 
// let q13 = fName3.trim()
// console.log(q13.length)
