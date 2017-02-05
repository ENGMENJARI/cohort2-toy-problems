/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
	var array=[]
	array[0]=[1]
	array[1]=[1,1]
	for(var i=0;i<array.length;i++){
		for(var j=0;j<array[i].length;j++){
			array[i+1].length=array[i].length+1
			
			array[i][0]=1
			array[i][array[i].length -1]=1
			array[i][j]=array[i - 1][j -1]+array[i-1][j]
			array.push(array[i])

		}
	}
	return array
}
		