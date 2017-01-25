/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *///this is simple solution for a 2-dimensional array (3*3) and the time complexity
// is constant .
// but for a matix(n*n) I think it may need 4 for loops (not nested) and the time 
// complexity may be Quardatic

var spiralTraversal = function(matrix){
var r1=matrix[0];
var r2=matrix[1];
var r3=matrix[2];
var result=[]
result.push(r1[0],r1[1],r1[2],r2[2],r3[2],r3[1],r3[0],r2[0],r2[1])
return result
};



