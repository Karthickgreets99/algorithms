Hello --> h
total --> o
teeter --> r	


1. input the array 
2. find length of array
3. create a new array and size the array as Array(256);
4. for each element assign the value  = 1
5. at the eand of the loop is value is 0  return that element.


}

//total
bool[] = 
t ->1
o>1
t->2
a->1
l->1

t>2
o->1

//teeter

//2 char arrays are anagrams?
arr1 -> abc
arr2 -> cbaajd

arr1 and arr2 anagrams

function checkAnagram(arr1,arr2){
	
			for(var i=0; i < arr1.length ; i++){
				for(var j=0; j < arr1.length ; j++){
					if(arr1[i] == arr2[j]){
						arr3.push[arr2[j]];
					}
				}
			}
			if(arr1 == arr3){
				console.log('anagram')
			}

}
	

function compare (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}
a=(abc);
b=(cba);

1.  input string 
2.  assign variable to %20;
3.  if the string has empty space , change to varibale
return


function checkSpace(str){
	
	var a = '%20';

	//var source = str.length;
	var dest = [];

	for (var i =0 ; i < str.length; i ++){//a b c
		if(str[i] == ' '){//a.indexOf(' ')
			//str[i] = a;
			dest[i]=a;
		}

		dest[i]=str[i];
		
	}




	//return str.replace(' ','%20');
}

arr = ["h","e","l","l","o"];
arr1 = ["a","e","i","o","u"];

checkVowels(arr, arr1){
		
		//check the length of the 


	
	for (var i=0; i<arr1.length; i++){      //a

		for (var j =0 ; j<arr.length ; j++){  //h,l,l,e,e,o

				if(arr1[i] == arr[j]){   //a == h , //e ==
					arr[j].remove();
				}

		}
	}
}



//hello world  time now 
//now time world hello

function reverseWord(str){ //
var str1 = str.split(' ');
var j = str1.length;


	for (var j = str1.length ; j > 0 ; j --){

			str2.push(str1[j]);
		
	}

	//for(var i =0 ;i<str1.length;i++){
	//str2.push(str1.pop());
	//}	

	
}


function reverseWord(str){ //
var str1 = str.split(' ');
var str2=[];
console.log(str1.length)
for (var j = str1.length ; j > 0 ; j --){
str2.push(str1[j]);
}
console.log(str2);
}

reverseWord('hello');


// homework

	

str = 'hello world'
function test(str){
	return str.split(' ').reverse().join(' ');
}

test('hello world  time now ')


//multidimesional array to flattern

var arr = [3,4[5,6], ]


