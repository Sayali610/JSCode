// const { fromPairs } = require("cypress/types/lodash")

// let arr = [33,55,66,77,66,77,-89,55]

//console.log( Math.min(...arr))

let arr1 = [
    { firstname:'siddhant',
    lastname:'gadakh',
    skills : ['cypress','js']},
    { firstname:"arjun",
    lastname :'gadakh',
    skills:['python','sql']},
    { firstname:'radhey',
    lastname:'zunjur',
    skills: ['sql','aws']},
];

console.log(arr1[0].firstname,arr1[0].lastname,arr1[0].skills)

NMJ

let student ={
    fn:'Sayali',
    ln:'bhaskar',
    age:23
}
console.log(student)

let propeties = Object.keys(student)
console.log(propeties)
console.log(propeties.length)

for(let prop of propeties){
    console.log(prop);
}

let value = Object.values(student)
console.log(value)