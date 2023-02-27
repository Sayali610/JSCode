//1-10 

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}

//2 table reverese  

let j = 20
while (j >= 2) {
    console.log(j)
    j = j - 2
}


//1-5 3 break

let k = 1
while (k <= 5) {
    if (k == 3) {
        break
    }
    console.log(k)
    k++
}

console.log("===================================")

//10-1 // 5 break
let l = 10
while (l >= 1) {
    if (l == 5) {
        break
    }
    console.log(l)
    l--
}
//10 9 8 7 6


// 1-5 3 continue  1 2 4 5

let i1 = 1
while (i1 <= 5) { //1<=5  2<=5  3<=5   3<=5  3<=5  ..............
    if (i1 == 3) { //1==3  2==3  3==3  3==3 3==3 ................
        continue
    }
    console.log(i) //1  2
    i1++ //2 3
}

// 1 2 4 5

//========================================================

let i2 = 1
while (i2 <= 5) { //1<=5  2<=5  3<=5  4<=5  5<=5  6<=5
    if (i2 == 3) { //1==3  2==3  3==3  4==3  5==3
        i2++  // 4
        continue
    }
    console.log(i) //1  2  4  5
    i2++ //2 3  5 6
}

//===================================================

//javascript 

//Object

//method and property

//Math ==> Object

//Math.floor(12.45) //12

//integer  ==> 1, 2,3
//decimal ==> 2.3 , 6.7

console.log(Math.floor(34.89)) //34

console.log(Math.floor(46.2)) //46

console.log(Math.floor(5.76)) //5

console.log(Math.floor(-5.23)) //-6


//     -13   -12.5   -12.............-6  -5.23  -5    -4   -3   -2    -1     0   1   2    3    4   5   6   7   8 ........... 31   32   33   34  34.5   34.89  35


//Math.ceil(34.5) //35

console.log(Math.ceil(45.1)) //46
console.log(Math.ceil(89.45))//90
console.log(Math.ceil(-12.56)) //-12


console.log(Math.ceil(34)) 