function inorder(root.left){
	var form = LNR;

	inorder(node.left);//L
	console.log(node);//N
	inorder(node.right);//R

}

function preorder(root){	
	console.log(node); //N
	preorder(node.left); //L
	preorder(node.right); //R
}
function postorder(root){	
	
	postorder(node.left); //L
	postorder(node.right);//R
	console.log(node);//N
}

//finding size of the tree 

function size(root){
	var h , l ,r = 0;
	if(root.left != null && root.right != null){

		if(root.left!==null){
			l = 1 + size(root.left);
		}
		else if(root.right != null){
		   r = 1 + size(root.right);
		}
		if(l>r){ h = l; } else if(r > l){ h= r; }

	}
	return 1 + h ;
}