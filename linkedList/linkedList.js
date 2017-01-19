/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
}

var LinkedList = function(){
	this.head=null
	this.tail=null
  //fill me in!
}
LinkedList.prototype.addToTail=function(value){
	var x=Node(value)
	if(this.head===null){
    this.tail=x
    this.head=x;
  }
  else{
    this.tail.next=x
    this.tail=this.tail.next
  }
},
LinkedList.prototype.removeHead=function(){
	var temp=this.head.value;
   this.head=this.head.next;
          return temp;
    
},
LinkedList.prototype.contains=function(target){
	var found=false
	var t=this.head
	
	while(t){
		if(t.value!==target){
			t=t.next
		}
		else{
			found=true
			break;
		}
	}
	return found
}

//write methods here!