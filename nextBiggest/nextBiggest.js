/*

**** PICK ONE OF THE TWO PROBLEMS ****

Problem 1 (Medium):
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. 
If n is less than 0 it should rotate the array to the left. 
If n is 0, then it should return the array unchanged.

Examples:

Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]

var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3] 5 4 
rotate(data, 5) // => [1, 2, 3, 4, 5] 
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]

The rotation shouldn't be limited by the indices available in the array. 
Meaning that if we exceed the indices of the array it keeps rotating.

rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]

*/
function rotate(array, steps){
	var result=[]
	if(steps===0 || steps===array.length){
		return array
	}else if(steps>0 && steps<array.length){
		
		for(var i=steps;i>0;i--){
			result.push(array[array.length-i])
		}
	}
	else if(steps>array.length && steps%array.length!==0){
		for(var i=steps%array.length;i>0;i--){
			result.push(array[array.length-i])
		}

	}else{
		for(var i= -steps;i>0;i--){
			result.push(array[array.length-i])
	}

}
return result
}

/*
Problem 2 (Advanced)
You have to create a function that takes a positive integer number and returns the 
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

function nextBigger(num){
	var d=num.toString()
  var a=d.split('')
  var l=a.length
  if(l===1){
    return -1
  }
  for(var i=0;i<l;i++){

  if((l===2) && (a[0]>a[1])){
    return -1
  }else if((l===2) && (a[0]<a[1])) {
    return parseFloat([a[1],a[0]].join(''))
  }else if(a[l-1]>a[l-2]){
    var b=a[l-1]
    a[l-1]=a[l-2]
    a[l-2]=b
		    return parseFloat(a.join(''))
    }
    else{
      return -1
    }
  }

}
