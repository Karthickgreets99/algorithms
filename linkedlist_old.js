linkedlist


function node(data){
	this.data = data;
	this.next = null;
}


//definition
function linkedList() {
	this.head 	= new Node("head");
	this.find 	= find;
	this.insert	= insert;
	this.remove = remove;
	this.show 	= show;
	this.length = length;
}

//searches for the node having the data
function find(item){
	var current 	= this.head;
	while(current.data != item)
		current 	= current.next

	return current;
}

function insert(newElement,after){
	var newNode 	= new Node(newElement);
	var prev 		= this.find(after);
	newNode.next	= prev.next;
	prev.next 		= newNode;
}


function remove(item){
	var prev	= this.find(item);
	var temp	= prev.next;
	prev.next	= prev.next.next; //temp.next
	delete temp;
}

function show(){
	var current	= this.head;
	while(current != null)
		console.log(current.data);
}

function length(){
	var count	= 0;
	var current	= this.head;
	while(current != null)
		count++;

	return count;


//linked list 


function lengthList(){
	
	var current = head ;
	var counter = 0;

	while (current != null){

		counter = counter + 1;  



	}

	return counter;
}

head -- > a -->b -- >c --> d --->e

i/p -- > head
o/p -- > b

function midlegnth(head){

var current = head;
var  i = 0;

var length = lengthlist(head); //6 

	var mid =  length/2; //3

	while (i != mid || current!= null){
		current = current.next ;
		i = i ++ ;
	}	
	return current;
	
}

function mid(){
	
	var slow = null;
	var fast = null;

	while(fast.next != null){

	 slow = slow.next;
	 fast = fast.next.next;

	}
	return slow;
}

// printing even in linkedlist

 head --> A0 -- > A1 -- >A2 -- >A3 --> A4 -- > A5 ---> null // A0 A2 A4
  var fast = head; // head
	while(fast != null){  // A0 
	 console.log(fast.data); // A0, A2 aA4
	 fast = fast.next.next;   // A2 //A4
	}

// printing node in linked list


function printNode(N){

	 var p1,p2;
	       // N == 2
	 int counter = 0;

	 while(p1 != null ){
		 p1 = p1.next;
			 if(counter = > N){
			  	p2 = p2.next;
			 }
		 counter = counter+1;

	 }
	 return p2;

	}
}

// 1 --> 2 -- > 3 --> 4 --- > 1 ----> 5
 12345
 1. check the current not ! = null
 1. get the current.next value  

function isExists(){
 var current = head;
 var noDuplicates = [];
 var prev;
    while(current != null){ 
		if(bool[current.value] ! = 0){
			 prev.next = current.next;
		}
		prev = current;
  		current = current.next;

  	}
  }
	
}

L1: a->b->c->d

F1(c,L1);
L1: a->b->d;

// a->b->c->d
 var node = c.next;
 c.value = node.value;
 c.next = node.next;

1. get current
2. have a previous
3. check the give node already present in List
4. remove the node 
5. point the previous node to next node


function f1 (c, L1){
	var current = head;
	var prev;
	 while(current != null){ //check tail 
	 	if(current.value == c.value ){ // check value
	 		prev.next = current.next; // point previous to curent.next
	 	}
	 	prev = current; // have a shallow current to previous
	 	current = cuurent.next; // moving next
	 }


}

// 

var node = c.next;
 c.value = node.value;
 c.next = node.next;


//

1. find the highest value in L1 ( this is the last value )
2. Check the first value of L2 with L1 highest value
3. if it is higher we have to insert on the right side
4. if it is lower we have to insert on the left side.
5. Iterate it

6
L2 --->  50
function combineSingleList(l1,l2){

var current = l1.head;
var prev;
var current1 = l2.head;
	
	while (current.next == null){

			if (current.value > current1.value){
				current.next = current1; 
			}else{

			 	prev.next = current1;
			}

			prev = current;	

		}
}

50
  ----Merge sort technique
L3: 1 ->2 ->3 ->4 ->6 ->50

1. compare head value in two list
2. pop the smallest value in the l3 list.
3. Remove the smallest value in the list and point the head to the next 
4. again compare the head value with remaining list.
5. no values to compare push the remaining to the end of the L3 list.


// Write code for this prob.


L1 L2
F1(head1, head2)
:returns 1 if equal
0 if not equal

1->2->NULL
1->2->NULL

1->2->NULL
2->NULL

function F1 (head1 , head2){

var current1 = head1;
var current2 = head2;
	
	while(current1!=null && current2 != null){

		if(current1.value !== current2.value){
			return 0;		
		}
		current1 = current1.next;
		current2 = current2.next;
		

	if(current1!=null || current2 != null)
		return 0;

	return 1;
}

1->2->NULL
1->2->4->NULL


curr1=null
curr2=4

3->4->5->null
3->null

curr1=4
curr2=null

------------------------------------------------


1->1->2->3->4->4->5 --> 1-->2 -->

1 ->1->1->1->1->1->1
s 	f
		s f

1->x---1-->x-->1-->x-->1
1->1->1->1

slow:1
fast:1
function removeDuplicate(){
var current = head;
var slow= current;
var fast = slow.next;

		while (fast !=null){
			if(fast == slow){ //1 1 
				slow.next = fast.next; // remove the slow pointinf to duplicate
				fast = fast.next;
			}else{
				slow = slow.next;
				fast = fast.next;
			}



		}
}
//circular linked list

h --> 1 --2 ---3 --4 ----3

function checkLoop(){
	var current = head;
	var slow = current;
	var fast = slow.next.next;

	While(fast != slow){
		if(fast == slow){
			return 0;
		}

		slow = slow.next;
		fast = fast.next.next;
	}
}





		

