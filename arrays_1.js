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

function letterValue(str){
    var anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    var result = 0 ;
    if(str.length== 1) return anum[str] || ' ';
    return result = result + str.split('')
}


var resultArr = [
  { id: 9, value: 'bcd' },
  { id: 6, value: 'abc' },
  { id: 12, value: 'cde' },
]sort(function(a, b) { 
  return a.id - b.id  ||  a.value.localeCompare(b.value);
});