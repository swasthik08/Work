/*
Program 7- Create an array of length 5 and store below numbers 
       1,11,111,222,555 . Write a program to calculate the average of numbers.
*/

arr = [1,11,111,222,555]

function average(a){
    let sum =0
    for (i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    console.log(sum/arr.length)
}

average(arr)