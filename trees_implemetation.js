//tree node insert 

function Trees(){
	constructor(){
		this.root = null;
	}
}

Trees.prototype.insert = function(val){
	var newNode = new Node(val);
		if(this.root == null){
			this.root = newNode;
		}
		else {
			insertNode(this.root,newNode);
		}
}

Trees.prototype.insertNode = function(root,newnode){
	if (newnode.data < root.data){
		if(left.data == null) {
			node.left = newnode;
			}
		else {
			insertNode(node.left,newnode);
		}
	else {
		if(right.data ==null){
			node.right = newnode
		}else{
			insertNode(node.right,newnode)
		}
	}
}