
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
// Day2
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

