linkedlist

1. isEmpty
2. size
3. prepond
4. postpond
5. remove
6. contains
7. print 


function linkedlist () {
	
	this.head = null;
}

linkedlist.prototype.isEmpty = function (){
	
	if(this.head === null){
		return true;
	}else{
		return false;
	}

};

linkedlist.prototype.size	= function () {

	var current = this.head,
	count = 0;

	while (current !== null){
		count ++;
		current = current.next;
	}
	return count;
	// body...
}

// 10 --> 15--> 20 --25 -- null
//1. create a new node with val
//2. make the new node point to the current head.
//3. update this.head to point to the new node

linkedlist.prototype.prepond = function(val){

	var newNode = {
		data : val,
		next : this.head
	}
	this.head = new newNode;
}

var list = new LinkedList();
list.prepond(5);

// 10 --> 15--> 20 --25 -- null


linkedlist.prototype.append = function(val){

	var newNode = {
		data = val,
		next = null
	}
	if(this.isEmpty()){
		this.head = newNode;
		return;
	}

	var current = this.head;

	while (current.next !== null){
		current  = current.next ;
	}
	current.next = newNode;
}
//5 -->10-->15-->20-->25--null

linkedlist.prototype.contains = function(val){
	var current = this head;
	while (current !== null){
		if(current.data == val){
			return true
		}
		current = current.next;
	}
	return false;
}

linkedlist.prototype.remove = function(val){

	if(!this.contains(val)){
		return;
	}
	if(this.head.data === val ){
		this.head = this.head.next;
		return;
	}
	var prev = null,
	current = this.head;
	while (current.data !== val){
			prev = current;
			current = current.next;		
	}
	prev.next = current.next
}


