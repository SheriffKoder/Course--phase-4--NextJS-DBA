////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Day 1 - Introduction 
//Ex: output a string in reverse

/*
let st = "abc";

// so what would be the first step

console.log(st[0]);

// ok we can access indexes
// so a=0 b=1 c=2 d=3 e=4
// the length is 5
// so i want to have an empty array first

function reverse (st) {
let arr = [];

// then put in it st of length -1

// arr[0] = st[st.length-1];

// now we want to put st.lenght-2

// arr[1] = st[st.length-2];

// arr[2] = st[st.length-3];
// arr[3] = st[st.length-4];
// arr[4] = st[st.length-5];


// so what is happening here

// lenght of n is 1 and increasing by 1 till hits 5 i.e length
//arr index of 0 increasing by 1 till hits 4 i.e length -1

for (i = 0; i < st.length; i++) {
    // console.log(i);
    // console.log(i+1);
    arr[i] = st[st.length-(i+1)];
}

return arr;

}

// console.log(arr);
// now wrap it into a function that takes a string in and returns the result array

console.log(reverse(st));

*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Day2 - Big O Notation - introduction

// Big O: a way of having a measure to compare two versions of code for the same solution


//// General exercises:

// a function adds each number ontop of the number before


function D2 (finalNumber2) {
    let total = 0;
    for (i=1; i<=finalNumber2; i++ ) {
        total = total + i;
    }
    return total;   
}

// you got the result, can you make the code shorter ?
// how to get 5050 from 100


function D2_2 (finalNumber2_2) {
    return (finalNumber2_2 *(finalNumber2_2+1) /2);
}


function getTimePerformance(incomingFunction, incomingInput) {

    const t2 = performance.now();

    const result = incomingFunction(incomingInput);
    
    const t2_2 = performance.now();
    console.log(`time elapsed: ${(t2_2-t2)/1000} seconds`);
    console.log(result);
}

getTimePerformance(D2_2, 1000000000);


// these are two solutions
// function D2 scored 0s function D2_2 scored 17.47s for 1000000000

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Day3 - Big O Notation

// measuring complexity according to execution time

//O(n)
function f3_1 (n) {
    return (n+n+n+n);
}


//O(n^3)
function f3_2 (n) {
    return (n^2 + n^3);
}


//O(n)
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

//O(n)
//time complexity increases with unknown (n) length
//new array 0,1,2,3,4,5 = old array's 0,2,4,6,8,10 
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}


//O(n^2)
// because of nested loops
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}



// measuring complexity according to space taken by inputs

// O(1) as we will take 1 memory space each time
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}


function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}


// O(n) as we will create at first an array of length n/2
// then the variable storages are insignificant to the growing size of n reaching infinity
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

// O(n) as we will create at first an array of length 
// value1 created is in significant also and changes do not add to memory
function subtotals(array) {
    var subtotalArray = Array(array.length);    // define an array in memory
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;                   // define value1 in memory
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];           // same value1 just changes, already defined in memory
        }
        subtotalArray[i] = subtotal;        // value changes, already defined in memory
    }
    return subtotalArray;
}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Day4 - Logarithms

// Objects

// insertion - O(1)
// removal - O(1)
// searching - O(n)
// access - O(1)

let objectName = {
    firstName: "Kelly",
    instructor: true,
    favoriteNumbers: [1,2,3,4]
}

console.log(Object.keys(objectName));           //O(n) ["firstName","instructor", "favoriteNumbers"]
console.log(Object.values(objectName));         //O(n) ["Kelly", true, [1,2,3,4]]
console.log(Object.entries(objectName));        //O(n) [["firstName", "Kelly"], .. etc]
console.log(objectName.hasOwnProperty("firstName"));  //O(1)  true