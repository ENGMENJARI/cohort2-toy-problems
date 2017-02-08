
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
	var number=0
	for(var i=0; i<romanNumeral.length;i++){
		if(romanNumeral[i]==='I'){
			romanNumeral[i]===1
		}else if(romanNumeral[i]==='V'){
			romanNumeral[i]=5
		}else if(romanNumeral[i]==='X'){
			romanNumeral[i]===10
		}else if(romanNumeral[i]==='L'){
			romanNumeral[i]===50
		}else if(romanNumeral[i]==='C'){
			romanNumeral[i]===100
		}else if(romanNumeral[i]==='D'){
			romanNumeral[i]===500
		}else if(romanNumeral[i]==='M'){
			romanNumeral[i]===1000
		}
		number+=romanNumeral[i]
		for(var key in DIGIT_VALUES){
			if(key.toString()===romanNumeral[i] ){
				return DIGIT_VALUES[key]*romanNumeral.length
			}else if(romanNumeral[0]==='I' && romanNumeral[i]!=='I'){
				var res=0
				res+=DIGIT_VALUES[romanNumeral[i]]-1
			}
		}
	}
	return number
}

