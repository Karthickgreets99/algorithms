//Closure

function F1(){
	var x =5;
	var y = 10;
	function F2(){
		var p = 15 ; 
		var z  = 20 ;

		console.log(x + y + p +z);

	}
	//console.log(F2);
	return F2;

}

var func = F1();
//console.log(func)
func();


test