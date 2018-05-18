var removeNthFromEnd = function(head, n) {
    var current = head;
    var previous = null;
    if(current == n){
        this.head = this.head.next;
    }
    while(current.val !== n){
       previous = current;
        current = current.next;        
    }
    previous.next = current.next;
    
};