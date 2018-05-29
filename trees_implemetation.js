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

Trees.prototype.remove = function(key){
	this.root = this.removeData(this.root, key);
}
Trees.prototype.removeData = function(node,key){
	if(node == null){
		return null;
	}
	else if(key < node.data){
		node.left = removeData(node.left,key);
		return node;
	}
	else if(key > node.data){
		node.right = removeData(node.right,key);
		return node;
	}else{
		if(node.left == null && node.right == null){
			node=null;
			return node;
		}
		if(node.left == null){
			node = node.right;
			return node;
		}
		if(node.right ==null){
			node = node.left;
			return node;
		}
		var aux = this.findMinNode(node.right);
        node.data = aux.data;

	}

}