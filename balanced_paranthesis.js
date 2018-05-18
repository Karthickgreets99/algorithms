//balanced paranthesis


var isValid = function(s) {
    var openParan = ['{','[','('];
    var closedParan = ['}',']',')'];
    var matchingOpenbrackets, ch,stack = [];
    var len = s.split('');
    for (var i=0;i<s.length;i++){
        ch = s[i]
        if(closedParan.indexOf(ch)>-1){
            matchingOpenbrackets = openParan[closedParan.indexOf(ch)];
            if(stack.length == 0 || (stack.pop() !== matchingOpenbrackets) )
            return false;
        }else{
            stack.push(s[i]);
        }
    }
    
    return (stack.length == 0)
    
    
};