/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){
	var res=[]
	for(var i=0;i<directions.length;i++){
		if(res.indexOf(directions[i])=== -1){
			res.push(directions[i])
		}
	}
	
  var sum=0
	for(var j=0;j<res.length;j++){
		if(res[j]==='SOUTH'){
			res[j]=1
		}
		if(res[j]==='NORTH'){
			res[j]=-1
		}
		if(res[j]==='WEST'){
			res[j]=2
		}
		if(res[j]==='EAST'){
			res[j]=-2
		}
     sum+=res[j]
 }
     if(sum===0){
     	return 'No need to move at all'
     }else if(sum===2){
     	return 'move to WEST'
     }else if(sum===-2){
     	return 'move to EAST'
     }else if (sum===1){
     	return 'move to SOUTH'
     }else if(sum===-1){
     	return 'move to NORTH'
     }else if(sum===3){
     	if(res[0]===1){
     		return 'go to SOUTH then WEST'
     	}return 'go to WEST then SOUTH'
     }else if(sum===-1){
     	if(res[0]===1){
     		return 'go to SOUTH then EAST'
     	}return 'go to EAST then SOUTH'
     }else if(sum===1){
     	if(res[0]===-1){
     		return 'go to NORTH then WEST'
     	}return 'go to WEST then NORTH'
     }else{
     	if(sum===-3){
     		if(res[0]===-1){
     			return 'go to NORTH then EAST'
     		}return 'go to EAST then NORTH'
     	}
     }
	
	}



