var str ="hello world";


function reverseStack(str){
	var rev=[];
	var len = str.length;
	for (var i=len-1; i >= 0; i--){
		rev.push(str[i]).join('');
	}

	return rev;
	
}
//reverselinkedllist  using stack

h --> 1 --->2--->3---->4---5---t

function reverseLinkedlist(head){

	var current = head;
	var st = new stack();

	while (current !=null){
		st.push(current.data);
		current = current.next;
	}

	while(st.size>0){
		st.pop();
	}


}


// isValid Paranthesis

var str = "[()]{}{[()()]()}"
		function isValid(str){
			var valid = [];
			stack st = new stack();
			for(var i=0;i< str.length;i++){
				if(str[i].value =='{' || str[i].value=='[' || str[i].value == '('){
					st.push(str[i].value);
				}else if(str[i].value =='}' || str[i].value==']' || str[i].value == ')'){
					previous = stack.top();
					if((previous == '[' && str[i] == ']') || (previous == '{' && str[i] == '}') || (previous == '(' && str[i] == ')'))
						st.pop(str[i].value);
				}
			}
				if(st.size==0){
					console.log('valid');
				}else{
					console.log('invalid');
				}
		}
		isValid('[()]{}{[()()]()}')

{[()))

// implementing  main array to two stack 

var main_array = new array(50);

function stack1(main_array){

var data1=('1','2','3','4','5','6','7','8','9','10');
stack st_data = new stack();
		for(var i=0; i<data1.length;i++){
			st_data.push(data1[i]);
			
		}
		while (st_data.size => 0){
			main_array.push(st_data.top());
		}
		console.log(main_array)
}

//Postfix and prefix operands
BODMAS - Bracket opponent Division Multiplication Addition subraction
convert infix to Postfix
convert infix to Prefix

var expression = a+b*c+d;

function convertinfixtoprefix(expression){

		var ex = expression;
		
}

//
//infix to Postfix

function MathSolver() {
 
    this.solvePostfix = function(postfix) {
        var resultStack = [];
        postfix = postfix.split(" ");
        for(var i = 0; i < postfix.length; i++) {
            if(postfix[i].isNumeric()) {
                resultStack.push(postfix[i]);
            } else {
                var a = resultStack.pop();
                var b = resultStack.pop();
                if(postfix[i] === "+") {
                    resultStack.push(parseInt(a) + parseInt(b));
                } else if(postfix[i] === "-") {
                    resultStack.push(parseInt(b) - parseInt(a));
                } else if(postfix[i] === "*") {
                    resultStack.push(parseInt(a) * parseInt(b));
                } else if(postfix[i] === "/") {
                    resultStack.push(parseInt(b) / parseInt(a));
                } else if(postfix[i] === "^") {
                    resultStack.push(Math.pow(parseInt(b), parseInt(a)));
                }
            }
        }
        if(resultStack.length > 1) {
            return "error";
        } else {
            return resultStack.pop();
        }
    }
 
}

//infix to prefix


function infixtoPrefix(){

}


//insert stack value at the bootm
function insert(item,st){	
	if(st.isEmpty){
		st.push(item);
	}
	else{
		var previous = st.pop();
		insert(item);
		st.push(previous);
	}
}

//reverse stack
function reverseStack(){
	stack st = new stack();
	var arr = [];
	//4,3,2,1   -- > 1,2,3,4
	//for(var i=0; i<st.size();i++){
		while(st.size > 0 ){  
			if(!st.isEmpty()){
				arr.push(st.pop());
			}
		}
		// for(var i = arr.length; i => arr.length; i--){
		// 	st.push(arr[i].pop());
		// }
		while (arr.length>0){
			st.push(arr.shift());
		}
	//}
}


//
1.size of the stack
2.
3. pop the top value 
4. check the item with previous item
4. check the value with insert function  

13 -- -3 -- -5 -40 -- -1


function insertsortedStack(st,previous){
	
		if(st.isEmpty || ){st.push();}
		else{
			if(previous > st.top()){
				var top1 = st.pop();
				st.push(previous);
				insertsortedStack(st,top1)
				st.push(top1);
			}
				
			// }else{
			// 	// var greater = st.pop();
			// 	// st.push(previous);
			// 	// st.push(greater);
			// }
		}

}

//find minimum value in the stack

//insert function

function insert(){

	stack st2 = new stack();

}


//merge two stack

function merge(st2){

		if(st1.isEmpty()){
			insert(st2);
		}

}
