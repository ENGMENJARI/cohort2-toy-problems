/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */
//Given an array A of n elements with values or records A0 ... An−1, sorted such that A0 ≤ ... ≤ An−1, and target value T, the following subroutine uses binary search to find the index of T in A.[6]

// If target greater than the middle element then consider this middle as first 
// element, go to wright, else  go to left and consider this is last element
//the time complexity is O(log(n))
var binarySearch = function (array, target) {
	var f=0;
	var l=array.length-1;
	var middle=Math.floor((f+l)/2);
	var index=array.indexOf(target)
	if(array[middle]===target){
		return index
	}
	else if(array[middle]<target){

		f=middle+1
			
		}
	else {
		l=middle-1
	}
	return index
};

