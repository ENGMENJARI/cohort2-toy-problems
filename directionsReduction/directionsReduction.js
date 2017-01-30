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

// var dirReduc = function(directions){
//      var sum=0
// 	for(var i=0;i<directions.length;i++){
  
// 		if(directions[i]==='SOUTH'){
// 			directions[i]=1
// 		}
// 		if(directions[i]==='NORTH'){
// 			directions[i]=-1
// 		}
// 		if(directions[i]==='WEST'){
// 			directions[i]=2
// 		}
// 		if(directions[i]==='EAST'){
// 			directions[i]=-2
// 		}
//      sum+=directions[i]
//  }
//      if(sum===0){
//      	return 'No need to move at all'
//      }else if(sum===2){
//      	return 'move to WEST'
//      }else if(sum===-2){
//      	return 'move to EAST'
//      }else if (sum===1){
//      	return 'move to SOUTH'
//      }else if(sum===-1){
//      	return 'move to NORTH'
//      }else if(sum===3){
//      	if(directions[0]===1){
//      		return 'go to SOUTH then WEST'
//      	}return 'go to WEST then SOUTH'
//      }else if(sum===-1){
//      	if(directions[0]===1){
//      		return 'go to SOUTH then EAST'
//      	}return 'go to EAST then SOUTH'
//      }else if(sum===1){
//      	if(directions[0]===-1){
//      		return 'go to NORTH then WEST'
//      	}return 'go to WEST then NORTH'
//      }else{
//      	// if(sum===-3){
//      		if(directions[0]===-1){
//      			return 'go to NORTH then EAST'
//      		}
//                return 'go to EAST then NORTH'
//      	}
     
	
// 	}


var dirReduc = function(directions){
     var No=0
     var Ea=0
     var arr=[];
     for (var i = 0; i < directions.length; i++) {
          if (directions[i] ==='NORTH'){
               No++;
          }else if (directions[i]==='SOUTH') {
               No--;
          }else if (directions[i]==='EAST') {
               Ea++;
          }else if (directions[i]==='WEST') {
               Ea--;
          }
     }
     for (var i = 0; i < Math.abs(No)+Math.abs(Ea); i++) {
          if (No>0){
               arr.push('NORTH');
               No--;
          }else if (No<0){
               arr.push('SOUTH');
               No++;
          }if (Ea>0){
               arr.push('EAST');
               Ea--;
          }else if (Ea<0){
               arr.push('WEST');
               Ea++;
          }
     }
     return arr;
};


