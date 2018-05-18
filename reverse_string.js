//reverse a string 

var output = function reverse(str) {
	if(str.length <= 1)  { return str }
	 var temp="";
	 for (var i = str.length - 1; i>= 0; i--){
	 	console.log(str[i])
	 	temp += str[i]; 
	 }
	reverse(temp.split(' '));
}


function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

var output = function(strF){

	if (strF.length < 0) {
		return null;
	}
	var temp = [reverse(strF).split()];	
	console.log('temp',temp);
	var outStr = "";
	if(temp){
		
		for (var i=0; i<temp.length;i++){
			outStr += reverse(temp[i])
		}
	}

	return outStr;

}

console.log(output('i am car'))

output('i am car').split(' ').map((w) => {return output(w)}).join('');