/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {
<<<<<<< HEAD
	
	if(n===1){
		return false
	}else if(n===2){
		return true
	}else{
		for(var x=2; x<n;x++){
			if(n%x===0){
				return false
			}
		}
		return true
	}
=======

>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */
<<<<<<< HEAD
  var primeGenerator = function(n){
  	var primaries=[]
  	for(var i=2;i<=n;i++){
  		if(primeTester(i)===true){
  			primaries.push(i)
  		}
  }
  return primaries
}
=======
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645

  