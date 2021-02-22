'use strict'
class Node {
    constructor(data, left =null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show(){
        return this.data;
    }
}
//---------BST Class
class BST {
    constructor(){
        this.root = null;
    }
    //----Insert node 
    insertNode(data) {
        //-----create new node
        let n = new Node(data, null, null);
        //----if root is null
        if(this.root === null){
            this.root = n;
        }else {
            let current  = this.root;
            let parent;
            //-----add node to left and assign current to parrent
            while(true) {
                 //----check data for left leaf
                 parent = current;
                 if(data < current.data) {
                    current = current.left;
                    if(current === null) {
                        parent.left = n;
                        break;
                    }
                 } else {
                     current = current.right;
                     if(current === null){
                         parent.right = n;
                         break;
                     }
                 }   
            }
        }
    }
    //----Inorder Traversal L->Root->R
    inOrder(node){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.show()+" ");
            this.inOrder(node.right);
        }
    }
    //-----PreOrder Root->L->R
    preOrder(node){
        console.log(node.show()+" ");
        this.inOrder(node.left);    
        this.inOrder(node.right);
    }
    //-----PreOrder L->R->Root
    postOrder(node){
        this.inOrder(node.left);    
        this.inOrder(node.right);
        console.log(node.show()+" ");
    }
    //---get Min
    getMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }
    //----get Max
    getMax(){
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }else {
                current = current.right;
            }
            if(current === null){
                return null;
            }
        }
        return current.data;
    }
    leftHeight(){
        let count=0;
        let current = this.root;
        while(current.left !== null){
            current = current.left;
            count++
        }
        return count;
    }
    rightHeight(){
        let count=0;
        let current = this.root;
        while(current.right !== null){
            current = current.right;
            count++
        }
        return count;
    }
    heightofBST(){
        let current = this.root;
        let height;
        if(current === null){
            height =1;
        }else{
            let leftHeight = this.leftHeight();
            let rightHeight = this.rightHeight();
            height = 1+ Math.max(leftHeight,rightHeight);
        }
        return height;
    }
    kthSmallest(node){
        while(node !== null){
            node = node.left;
        }
        return node;
    }
    remove(data){
        root = this.removeNode(this.root,data);
    }
    removeNode(node,data) {
        //node null and data undefined
        if(node == null || data == undefined){
            return
        }
        //1. if root node is NUll
        if(node === null){
            return null;
        } 
        //2. if root node is NOT NUll and no leaf node
        else if(node.data === data){
            //1.1 no left and right child 
            if(node.left === null && node.right === null){
                return null;
            }
            //1.2 no right child 
            else if(node.right === null) {
                return node.left;
            }
            //1.3 no left child 
            else if(node.left === null) {
                return node.right;
            }
            //1.4 node has two child 
            else {
                let tempNode = this.kthSmallest(node.right);
                node.data = tempNode.data;
                node.right = this.removeNode(node.right,tempNode.data);
                return node;
            }
        } else if(data < node.data){
            node.left = this.removeNode(node.left,data);
            return node;
        }else {
            node.right = this.removeNode(node.right,data);
            return node;
        }
    }
    edgesCount(node){
        let leftEdges = this.leftHeight(node);
        let rightEdges = this.rightHeight(node);
        if(node === null || node.data == null){
            return 0;
        }
        //console.log(leftEdges, rightEdges);
        return leftEdges + rightEdges;
    }

}

let nums = new BST();
    nums.insertNode(23);
    nums.insertNode(45);
    nums.insertNode(16);
    nums.insertNode(37);
    nums.insertNode(3);
    nums.insertNode(99);
    nums.insertNode(22);
// console.log('Inorder Traversal: ');
// nums.inOrder(nums.root);

// console.log('After Remove :');
// nums.remove(3);

console.log('Inorder Traversal: ');
nums.inOrder(nums.root);
console.log('Edges Count : '+ nums.edgesCount(nums.root));





/*console.log('Pre Order Traversal: ');
nums.preOrder(nums.root);

console.log('Post Order Traversal: ');
nums.postOrder(nums.root);

console.log('Get Min Value: ');
console.log(nums.getMin());

console.log('Get Max Value: ');
console.log(nums.getMax());


console.log('Find Value: ');
console.log(nums.find(99));

console.log('Height of BST');
console.log(nums.heightofBST());*/

