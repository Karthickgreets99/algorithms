//[654,1,5,3,2,8,6999,5,7]

function binary_search(arr, val){
var sortArr = arr.sort();
var high = sortArr.length-1;
var low =0 ;
var mid = 0;


while (low<=high){
mid = Math.floor((low + high) /2)
if(sortArr[mid]===val){
	return sortArr[mid];
}
else if (val > sortArr[mid] ){
	low = mid + 1;
}
else{
	low = mid -1;
}
}
return -1;
}