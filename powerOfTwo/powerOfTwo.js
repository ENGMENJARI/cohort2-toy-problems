/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
var x=Math.pow(2,num)
var a=x.toString().split('')

var sum=0
for(var i=0;i<a.length;i++){

sum+=parseFloat(a[i])
}
return sum
}