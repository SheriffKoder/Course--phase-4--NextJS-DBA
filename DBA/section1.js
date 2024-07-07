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

// another solution
const string_a = "ab1c";
// we want to out put it as cba

// what could be the first step ?
// out put the string

// console.log(string_a[0]);
// we have 0,1,2
// what if we used 2,1,0
// the length is 3

function reverseString2 (string) {
    let result = "";
    // this will iterate three times, 2,1,0
    for (i=string_a.length-1; i>=0; i--) {
        result = result+string_a[i];
        // console.log(string_a[i]);
    }
    return result;
}

console.log(reverseString2(string_a));

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

// what is the corelation between 100 and 5050
// 2 would be 3
// 3 would be 6
// 4 would be 10
// 5 would be 15
// 6 would be 21
// 7 would be 28
// 8

// 5x6 = 30 / 2
// where 6 is n+1

// this is simpler and without loops
// console.log(n*(n+1)/2);

function D2_2 (finalNumber2_2) {
    return (finalNumber2_2 *(finalNumber2_2+1) /2);
}


function getTimePerformance(incomingFunction, incomingInput) {

    const t2 = performance.now();

    const result = incomingFunction(incomingInput);
    
    const t2_2 = performance.now();
    // console.log(`time elapsed: ${(t2_2-t2)/1000} seconds`);
    // console.log(result);
}

getTimePerformance(D2_2, 1000000000);


// these are two solutions
// function D2 scored 0s function D2_2 scored 17.47s for 1000000000

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Day3 - Big O Notation

// measuring complexity according to execution time

//O(4)
function f3_1 (number) {
    return (number+number+number+number);
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

// console.log(Object.keys(objectName));           //O(n) ["firstName","instructor", "favoriteNumbers"]
// console.log(Object.values(objectName));         //O(n) ["Kelly", true, [1,2,3,4]]
// console.log(Object.entries(objectName));        //O(n) [["firstName", "Kelly"], .. etc]
// console.log(objectName.hasOwnProperty("firstName"));  //O(1)  true

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

//// Problem solving Concept 1: Frequency counter / same
/*
// accepts two arrays
// return true if every value in the array has it's corresponding value
// squared in the second array.
// the frequency of values must be the same
// the order does not have to match
// however. freq means that for each value in arr1 to have its corresponding in arr2
// no more no less
function FrequencyCounter_draft (arr1, arr2) {
    
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
function FrequencyCounter_my (arr1, arr2) {
    
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
function FrequencyCounter_lec (arr1, arr2) {
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

// let array1 = [1,2,4];
// let array2 = [16,4,1];

// console.log(FrequencyCounter_lec(array1, array2));


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
let st2 = "bba";

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
*/



// EX output stars
/*
const myNumber = 4;

function outputStar(n) {
    let myString = "";
    for (i=0; i<n; i++) {
        myString=myString+"*";
    }
    console.log(myString);
}

// outputStar(2);


// incrementing
for (i=1; i<=myNumber; i++ ) {
    // console.log("row "+i);
    outputStar(i);
}

// decrementing
for (j=myNumber-1; j>=1; j-- ) {
    // console.log("row2 "+j);
    outputStar(j);
}
*/



//// Problem solving Concept 2: Multiple pointers / sumZero
// sumZero
/*
function sumZero_me (arr) {
    
    // check if a string or an array with small length of a number
    if (typeof(arr) === "string" || 
    (typeof(arr) === "object" && arr.length < 2) ||
    arr.length === undefined
    ) {
        return undefined
    }

    // nested method time: O(n^2)
    // for (i=0; i<arr.length; i++) {
    //     for (j=arr.length-1; j > i; j--) {
            //also can use (j=i+1; j<arr.length; j++)
    //         // console.log(arr[j]);
    //         if (arr[i]+arr[j] === 0) {return [arr[i],arr[j],i,j]}
    //         // else keep decrementing till i
    //     }    
    //     if (i === arr.length-1) {return undefined};
    // }

    // how can we avoid nested loops time: O(n), 
    // space: O(n) because we write an object --
    // without the location array and return
    //we can place it in an object for i
    let obj = {};
    for (val in arr) {
        //store value:location/index
        obj[arr[val]] ? obj[arr[val]].push(val) : obj[arr[val]] = [val];
    }

    // console.log(obj);

    for (val in obj) {
        // find in the object if there is an inverse key, not 0 as 0*-1 will be 0 and not display our numbers
        if (obj[val] && obj[val*-1] && val !=0) {
            // console.log(val+" "+(val*-1));
            // return the numbers and their corresponding locations in the array
            return {
                [val]:obj[val],
                [val*-1]:obj[(val*-1)]
            };
        }
    }



}


// console.log(sumZero_me([-2,0,2,2]));

// the lecturer wants an actual sorted numbers
// time: O(n)
// but this is better because has space  complexity of O(1) !
function sumZero_lec(arr) {
    //starting points
    let left=0;
    let right = arr.length - 1;

    while (left < right) {  // not = to avoid 0's
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZero_lec([-2,0,2,2]));

*/


//// Problem solving Concept 2: Multiple pointers / countUniqueValues
/*
// time complexity O(n)
// space complexity: 1
function countUniqueValues (arr) {

    // initial check
    if (arr.length === 0) return 0;
    
    //starting point
    let pointerI = 0;
    // let pointerJ = 1;


    // move j across the array, starting from its position
    for (let j=1; j<arr.length; j++) {
        // as we are moving, check on j's values
        // if value of j is different from value of i
        // move i by 1 and put the value of j in value of i
        if (arr[j] !== arr[pointerI]) {
            pointerI = pointerI + 1;
            arr[pointerI] = arr[j];
        }
        // else (values are equal).. keep incrementing j to continue comparing
    }

    // i+1 would be the length of how many unique numbers
    return pointerI+1;

}


// console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]));
// 1,2,3,4,,6,4,4,5,6
*/


//// Problem solving Concept 3: Sliding windows / maxSubarraySum
/*
// which accepts an array of integers and a number (n)
// calculate the highest sum elements beside each other in n width in that array
function maxSubarraySum_me (arr, n) {

    let result = 0;

    for (i=n-1; i<arr.length; i++) {    //i = 2 //i = 3
        let temp = 0;
        let window = (i-n+1);                
                                            
        for (j=i; j>=(window); j--) {       // temp = arr[2]+arr[1]+arr[0]
            temp += arr[j];                 // temp = arr[3]+arr[2]+arr[1]

            if (temp > result) result = temp;

        }
        console.log(temp);
    }

    return result;

}

// console.log(maxSubarraySum_me([1,2,3,4],2)); //7

// lecturer's answer
function maxSubarraySum_lec (arr, n) {

    if (n > arr.length) return null;

    let result = -Infinity; // as 0 will not help when adding numbers and -ve to take in consideration -ve sums

    // given n=3
    // i=0, till 4-3+1 2, i++ ... 0,1,2, and stop before the end by n
    for (let i=0; i<arr.length - n + 1; i++ ) {
    // for (i=n-1; i<arr.length; i++) {    //i = 2 //i = 3
        let temp = 0;        
        // j 0,1,2
        for (let j = 0; j<n; j++) {
            // at i=0, arr index = 0,1,2
            // at i=1   arr index = 1,2,3
            temp += arr[i+j];

            if (temp > result) result = temp;

        }
    }

    return result;

}

// console.log(maxSubarraySum_lec([1,2,3,4],3)); //7

// better example because we are using time complexity of O(n)
function maxSubarraySum_lec_refactored (arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    // this will add the first three numbers and put aside
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // () now take the number last in the selection of n
    // / add to it the previous add
    // [] remove the first index of the previous add
    // now we have the quantity of the needed indexes exactly
    // [0 1 2] 3 > maxSum
    // [0]/ 1/ 2/ (3)
    // then increase i for the next iteration
    // i.e overlap your movement then add the new index and remove the old index
    for (let i = num; i < arr.length; i++ ) {
        // at i=3, tempSum = prev - arr[3-3] + arr[3]
        tempSum = tempSum - arr[ i - num ] + arr[i];
        maxSum = Math.max(maxSum,tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum_lec_refactored([2,6,9,2,1,8,5,6,3], 3)); //19

*/


//// Problem solving Concept 4: Divide and conquer / search (binary search)
/*

function findIndex1 (array, n) {

    let arr = [...array];

    let middle = Math.floor((arr.length)/2);
    let start = 0;
    let end = arr.length-1;

    // from the start - see if it is in the start or end of the array
    if (arr[start] === n) { return start }
    if (arr[end] === n) { return end }
    if (arr[start] > n || arr[end] < n) {return -1;}

    for (let i=0; i<middle; i++) {



        // if it is somewhere in between, check which side
        // and keep iterating (dividing the numbers) as we do not return here to break the loop
        if (n > arr[middle]) {
            start = middle;
            end = arr.length-1;
            middle = middle+Math.floor((end-start)/2);
            console.log(start,middle,end);
        }
    
        if (n < arr[middle]) {
            start = 0;
            end = middle;
            middle = Math.floor((end-start)/2);
            console.log(start,middle,end);
        }

        // if it is in the middle then it is found
        if (n === arr[middle]) {
            return middle;
            
        }

    }

    if (n !== middle) return -1;


    // start = 1
    // end = 3
    // repeat this again 
    // as long as n !== middle
    //  2, can be 2



}

// time complexity O(logN)
function findIndex (array, val) {

    let min = 0;
    let max = array.length-1;

    while (min <= max) {
        let middle = Math.floor((min + max) /2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle+1;
            console.log("if");
        }
        else if (array[middle] > val) {
            max = middle-1;
            console.log("else if");
        }
        else {
            return middle;
        }
    }

}


console.log(findIndex([1,2,3,4,5,6,7,8,9,11,12,13,14,15,17], 10));
                     // 0   1     2   3   4   5     6




*/



// Assignment on previous concepts: #1
/*
function sameFrequency (n1, n2) {

    // convert to a string to use indexes
    let st1 = n1.toString();
    let st2 = n2.toString();
    if (st1.length !== st2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let val of st1 ) {
        obj1[val] = (obj1[val] || 0) +1;
    }

    for (let val of st2 ) {
        obj2[val] = (obj2[val] || 0) +1;
        if (obj2[val] > obj1[val]) return false;
        if (!obj1[val]) return false;
    }

    console.log(obj1);
    console.log(obj2);

    return true;

}

console.log(sameFrequency(3589578, 5879385)); // true)
*/

// Assignment on previous concepts: #2
/*
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// bonus: time complexity O(nlogn), space O(1)
// O(nlogn) by conditionally quitting the loop, O(1) by not storing any arrays
function areThereDuplicates (...props) {

    let pointer = 0;
    let i = pointer+1;
    
    // keep looping while pointer is not the last in the array.
    while (pointer < props.length ) {
    // console.log(props[pointer], props[i]);

        // check each index in vs. the current pointer value
        if (props[i] === props[pointer]) { return true }
        // increment after each
        i++;

        // if we got to the last item in the array, nothing to compare anymore
        // move+1 in pointer, and set i to the index right after it
        if (i === props.length) {
            pointer++;
            i=pointer+1;
        }
        // ending statement pointer is at the end and we still have not found a duplicate
        // can be above to save a comparison+assignment
        if (pointer === props.length-1) {
            return false;
        }
    }
}


console.log(areThereDuplicates(1,2,2));

*/

// Assignment on previous concepts: #3
/*
// averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average 
// of the pair equals the target average. There may be more than one pair 
// that matches the average target.

// Bonus Constraints: Time: O(N) Space: O(1)
// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair (arr, average) {

    if (arr.length === 0) return false;

    let pointerI = 0;
    let j = pointerI+1;
    let key = 0;

    while (pointerI < arr.length-1 && key < 100) {
        console.log(pointerI, j);
        
        if ((arr[pointerI]+arr[j])/2 === average) return true;
        j++;

        if (j === arr.length) {
            pointerI=pointerI+1;
            j=pointerI+1;
        }

        
        key++;

    }

    return false;

}

console.log(averagePair([],4));
*/

// Assignment on previous concepts: #4
/*
function isSubsequence (st1, st2) {

    let i = 0;
    for (let j=0; j<st2.length; j++) {
        // console.log(st1[i], st2[j]);
        if (st2[j] === st1[i]) {
            i++;
            if (i === st1.length) return true;
        }
    }
    // console.log("finished and i is", i);
    if (i !== st1.length) return false;
}

console.log(isSubsequence('abc', 'acb'));
*/

// Assignment on previous concepts: #5
/*
// Given an array of integers and a number, 
// write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray 
// with the length of the number passed to the function.
// and must be consecutive
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum (arr, num) {

    if (!num || num > arr.length) return null;

    let maxSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum = maxSum+arr[i];
    }

    let temp = maxSum;
    for (let j = 0; j < arr.length; j++ ) {
        console.log(arr[j+num], maxSum, arr[j]);
        temp = arr[j+num]+temp-arr[j];
        console.log(temp);
        if (temp > maxSum) maxSum = temp;
    }
    return maxSum;

}

console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));

*/

// Assignment on previous concepts: #6
/*
// accepts an array and a number
// returns the minimal length of a contiguous sub array
// of sum greater than or equal the number passed to the function
// return 0 if no sum width is greater than or equal the number

function minSubArrayLen (arr, num) {

    let temp = 0;
    let i = 0;
    let start = 0;
    let track = 0;
    let length = Infinity;

    let key = 0;

    while (i < arr.length && key < 100) {

        console.log("..", i,track,temp);
        temp = temp+arr[i]; //0
        
        if (temp < num) { //1,2,3
            i++;
            track++;
        }
        
        if (temp >= num) {
            console.log(temp);
            if (track < length) length = track;
            track = 1;
            start++;
            i=start;
            temp = 0;
            console.log(">=", length, track, start);
        }

        if (track === arr.length-1 && temp < num) {
            return 0;
        }
        key++;
    }

    return length;




}


console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],200));
*/

// Assignment on previous concepts: #7
/*



*/

