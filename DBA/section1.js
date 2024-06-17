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
// Day4 - Built-in data-structures

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

////////////////////////////////////////////////////////////
// Day5 - Built-in data-structures
// arrays

// Arrays: n's because the whole index map will need to be updated
// Insertion - first O(n) / last O(1)
// Removal   - first O(n) / last O(1)
// Searching - O(n)
// Access    - O(1)
// merge - O(n) - concact()
// copy - O(n) - slice(start, end+1)
// trans replace/insert - O(n)  - splice(position, number of replacements) if not at the end then O(n)
// sort - O(N*logN)
// forEach/map/filter/reduce/etc. - O(n)


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// problem solving strategies
/*
// 1. understand the problem        - analyze
// 2. explore concrete examples     - draft
// 3. break it down
// 4. solve/simplify
// 5. look back and refactor

//1 understand the problem
words, [inputs/outputs], clues?
a) can you restate the problem in your own words
b) what are the inputs that go into the problem ?
c) what are the outputs that should come from the solution to the problem ?
c) can the outputs be determined from the inputs ? do i have enough information to solve the problem ?
d) what are the things that really matter in that problem

//2 explore concrete examples
ask yourself, what if
a) start with simple examples, easiest use cases - small input w/output
b) process to more complex examples              - large real world input ex. charCount("hello")  // {h: 1, e: 1, l:2, o:1}
c) explore examples with empty inputs            - different empty types
d) explore examples with invalid inputs          - different invalids

//3 break it down, show a process, game plan
take the actual steps of the problem and write them down in comments with communicating through
then fill the comments with code, 

//4 solve/simplify
code in what you know then work/collaborate on what you do not know yet
0) take it step by step to make sure the code works or needs re-adjustment
a) Find the core difficulty in what you are trying to do
b) Temporarily ignore that difficulty
c) Write a simplified solution then work your way up
d) Incorporate that difficulty back in

//5 look back and refactor
a) can you check the result ? does it work ?
b) can you derive the result differently ? can you write it differently ?
c) can you understand it at a glance ?
d) can you use the result or method for some "other problem" ? maybe you are facing
e) can you "improve the performance" of your solution ? in terms of complexity for example
f) can you think of other ways to "refactor and make it more neat?"
g) how have other people solved this problem ? what other approaches out there and learn
(good for being better)


*/

//// Problem solving Exercise 1: Frequency counter / same
// accepts two arrays
// return true if every value in the array has it's corresponding value
// squared in the second array.
// the frequency of values must be the same
// the order does not have to match
// however. freq means that for each value in arr1 to have its corresponding in arr2
// no more no less
function same_draft (arr1, arr2) {
    
    // it will be something like that..
    // arr1 and arr2 have to have lengths > 0
        // arr1 and arr2 have to have same lengths

            // loop over arr1[i]
                // we have arr1[i]
                // if arr1[i] is not a number return false
                // loop over arr2[j]
                    // if arr2[j] is not a number return false
                    // if arr2[j] === arr1[i] * arr1[i]
                    // remove arr2[j] from arr[2]
                    // Added: go out from this j loop
                    // if we reached the end and no result return false

            // arr1/arr2 success, if arr2.length > 0 return false

}


// Time complexity O(n^2) because of nested loops
// Space complexity O(n) because of splice
// answer is correct
// but consider using arr2.indexOf(arr[i] ** 2) which returns -1/1
function my_same (arr1, arr2) {
    
    //try it step by step to re-adjust

    // arr1 and arr2 have to have lengths > 0
    if (arr1.length < 1 && arr2.length < 1) return false;

    // arr1 and arr2 have to have same lengths
    if (arr1.length !== arr2.length) return false;

    // loop over arr1[i]
    for (let i=0; i<arr1.length; i++) {

        // if arr1[i] is not a number return false
        if (isNaN(arr1[i])) return false;

            // loop over arr2[j] i.e arr1[i] and arr2[0,1,2..]
            for (let j=0; j<arr2.length; j++) {

                // if arr2[j] is not a number return false
                if (isNaN(arr2[j])) return false;

                // if arr2[j] === arr1[i] * arr1[i]
                // remove arr2[j] from arr[2]
                // Added: go out from this j loop
                if (arr2[j] === arr1[i] * arr1[i]) {
                    arr2.splice(j, 1);
                    break;

                // if we reached the end and still not equal return false
                } else if (j === arr2.length-1 && arr2[j] !== arr1[i] * arr1[i]) {
                        return false;
                }
            }
        }

        // if reached here then success
        return true;



}

// lecture's refactored solution
// time complexity of O(3n)=O(n) better than O(n) previously as we separated the loops
function lec_same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //FC will be {1: 1, 2:1, 3:2} etc
    // store the numbers as keys with their quantity
    // if there are there increase by 1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        // check on powered occurrence
        if (!(key ** 2 in frequencyCounter2 )) {
            return false;
        }
        // else if occurred, check on quantity match
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
    

}

let array1 = [1,2,4];
let array2 = [16,4,1];

// console.log(same(array1, array2));


//// Problem solving Exercise 2: Frequency counter / Anagram
// a function that returns true if both strings contains the same characters
// even if un-ordered or have signs

// 45
function ObjectFromChars (string) {
    // create an empty object
    let obj = {};
    
    // loop over string and add each of its chars in a separate key in this object 
    for (key of string) {
        obj[key.charCodeAt(0)] ? obj[key.charCodeAt(0)]++ : obj[key.charCodeAt(0)] =1;
    }

    // return object
    return obj;
}

// time complexity (4n+9) ~ n
// constant 9
// n, 4
// space complexity 3n
// constant
// n, 3
function validAnagram(str1, str2) {

    // check if a string is null/undefined, or both do not have the same lengths
    // if (!str1 || !str2) return false;
    if (str1.length !== str2.length) return false;

    // have two objects, each with the quantity of chars in ASCII code
    let obj1 = ObjectFromChars(str1);
    let obj2 = ObjectFromChars(str2);
  
    // compare each char in the opposite string against quantity
    let keys = Object.keys(obj1)
    for (let key of keys) {
        if (obj1[key] !== obj2[key]) return false; 
    }
    // console.log(keys);

    return true;

}

let st1 = "abb";
let st2 = "baa";

// lecture answer, less complexity by 2n by decrementing n instead of comparing n against object n
function validAnagram2(str1, str2) {

    // check if a string is null/undefined, or both do not have the same lengths
    // if (!str1 || !str2) return false;
    if (str1.length !== str2.length) return false;

    // have two objects, each with the quantity of chars in ASCII code
    let obj1 = ObjectFromChars(str1);
    // let obj2 = ObjectFromChars(str2);
    console.log(obj1);
  
    // compare each char in the opposite string against quantity
    for (key in str2) {
        let letter = str2[key].charCodeAt(0);
        // console.log(letter);
        // if the quantity in str1 has been decreased to 0, 
        // 0 is falsey, so will return false
        if (!obj1[letter]) {
            return false;
        } else {
            obj1[letter] -= 1;
        }
    }

    return true;

}

// console.log(validAnagram2(st1, st2));

