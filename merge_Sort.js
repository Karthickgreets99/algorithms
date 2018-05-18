//merge Sort 

function mergesort(arr){
	
	if(len <2) return arr;
	var len =arr.lenth,

	middle = math.round(arr.length/2);

	return merge(
	mergesort(arr.slice(0,middle)),
	mergesort(arr.slice(middle))
	)
}

function merge(left,right){
	
	var out =[];

	while (left.length && right.length){
	out.push( left[0] < right[0] ? left.shift() : right.shift());
	}
	while(left.length){
	out.push(left.shift());
	}
	while(right.length){
	out.push(right.shift())
	}
}