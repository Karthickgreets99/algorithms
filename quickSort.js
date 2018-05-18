quickSort

//[7,1,2,6,9,4,5,3,8]

function quicksort(data){
	if(data.length <1){
	return [];
	}
	var left = [];
	var right = [];
	var pivot = data[0];
	console.log('pivot',pivot)
	for(var i=1; i < data.length ; i++){
		if(data[i]< pivot){
			left.push(data[i])
		}
		else {
			right.push(data[i])
		}
	}
	console.log(left);
	console.log(right);
	return [].concat(quicksort(left),pivot,quicksort(right));
}