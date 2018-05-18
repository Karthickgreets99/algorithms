//RACECAR

//length
//split into each piece
//pop one by one
//store it in new array
//match the array
//if ti match return true else return false


var isplaindrome = function (a){

return a == a.split("").reverse().join(“”);

}
RACECAR
function isPalindrome(a){

var b = a.length;
var j = a.length-1;

	for(var i=0;i<b; i++){ 
		if(a[i] == a[j]){
			j--;
		}
		else 
		{ 
		return false;
		}
	}

	return  true;

}

1. find the length of the arr
2. create new array.
3. compare the value



var a = ("t","o","t","a","l");
function  isUnique(a){
	var b = a.length;
		for(var i =0; i< b; i++){
			for (var j=1; j< b ; j++){
				if(a[i] == a[j]){
					return false;
				}
			}
				
		}
		return true;
}

function firstDuplicate() {
	let a  = [2, 3, 4, 1, 5, 2]
    let len = a.length;
    let arr = [];
    for (let i=0; i <len-1; i++){
        arr.push(a[i]);
        console.log('outside',arr[i])
        if(arr[i] === a[i+1]){     
            console.log('firstDuplicate@@@@@',arr[i]);
        }
    }
}

function duplicateNumber() {
	let arr  = [2, 3, 4, 1, 5, 2]
  var item = null;

  for (var i = 0; i < arr.length; i++) {
  	console.log('arr.INDEX@@@', arr.indexOf(arr[i]));
  	console.log('arr.value@@@', arr[i]);
  	console.log('arr.value@@@', i);
  	console.log('arr.condition@@@', arr.indexOf(arr[i]) !== i);
    if (arr.indexOf(arr[i]) !== i) {
      item = arr[i];
      break;
    }
  }

  return item;
}