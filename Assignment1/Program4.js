/*
Program 4- Write a program to display student results. 
		If number above 90 then grade A
		If number above 70 and below 90 then grade B
If number above 50 and below 70 then grade C
If number below 70 then Fail
*/

let score = 51

if (score>90) {
    console.log('grade A');
} else if(score>70&&score<90) {
    console.log('grade B');
}else if(score>50&&score<70){
    console.log('grade C');
}
else{
    console.log('Fail')
}