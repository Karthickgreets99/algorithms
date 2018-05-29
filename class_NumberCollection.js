class NumberCollection {
	constructor(){
		// initialize any internal variables for NumberCollection class
    this.num = {};
	}
	/**
	 * Adds the element into the NumberCollection
 	 */
	addElement (element) {
    	this.num.push[number]
}
  //{1,3,7}

/**
* Manipulates this NumberCollection so that it becomes the union between 
* itself and input NumberCollection
 */
union (input){ //{2,3,6,8}
  //get elements from the first list
  // return union for 2 object 
  let inputarr = input.num 
  let len = input.length, i,NCList =[];
  for (i =0 ; i < len ; i++){
    return NCList.cancat(input[i]);
  }
  
  if(this.num.length > 0 && NumberCollection.length > 0){
    [...this.num, ...NCList];
  }
}

/**
 * Returns a new NumberCollection that is the range overlap (intersection) 
 * between this NumberCollection and input NumberCollection
 **/
rangeOverlap(input: NumberCollection): NumberCollection {
	…
} 
}
---------------------------------------------------

Union: 
let NC1 = new NumberCollection();
NC1.addElement(1); 
NC1.addElement(3);
NC1.addElement(7);

let NC2 = new NumberCollection();
NC2.addElement(2);
NC2.addElement(3);
NC2.addElement(6);
NC2.addElement(8);

NC1.union(NC2); // results in NC1 having elements {1,2,3,7,6,8} (in any order)
-------------------------------------
rangeOverlap:
let NC1 = new NumberCollection();
NC1.addElement(1); 
NC1.addElement(3);
NC1.addElement(7);

let NC2 = new NumberCollection();
NC2.addElement(2);
NC2.addElement(6);
NC2.addElement(8);
{1,3,7,2,6,8} = {3,7} {2,6}
let NC3 = NC1.rangeOverlap(NC2) // NC3 has elements {2, 3, 6, 7} (in any order)
----
let NC1 = new NumberCollection();
NC1.addElement(4); 
NC1.addElement(5);
NC1.addElement(9);

let NC2 = new NumberCollection();
NC2.addElement(3);
NC2.addElement(5);
NC2.addElement(6); 
NC2.addElement(10);
NC2.addElement(11);
{4,5,9}{3,5,6,10,11} = {4,5,6,9}
Let NC3 = NC1.rangeOverlap(NC2) // NC3 has elements {4, 5, 6, 9} (in any order)
