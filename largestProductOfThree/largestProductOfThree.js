/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	//begin with sort the numbers from greates to minimum
	// I used sort function after modify it.
	var m1=array.sort(function(a,b){return b-a})[0]
	//the first number here after sorted the array is the maximum m1
	// then m2 ,m3 
	var m2=array.sort(function(a,b){return b-a})[1]

	var m3=array.sort(function(a,b){return b-a})[2]
	// finally return the product of these three numbers
	//which is the largest possible product
	return m1*m2*m3
};
// the time complexity here is O(n)  Linear because sort() is
// a built in function which iterate over all elements and then
// it has Linear time complexity



