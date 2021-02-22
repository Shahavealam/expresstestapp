function Node(val) {
    this.data = val;
    this.right = null;
    this.left = null;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.remove = remove;
    this.removeNode = removeNode;
    this.kthSmallestNode = kthSmallestNode;
}

function insert(val) {
    if (val == null || val == undefined)
        return;

    if (this.root == null) {
        this.root = new Node(val);
        return;
    }

    var current = this.root
    var newNode = new Node(val);

    while (true) {
        if (val < current.data) {
            if (current.left == null) {
                current.left = newNode;
                return;
            }
            current = current.left;
        } else {
            if (current.right == null) {
                current.right = newNode;
                return;
            }
            current = current.right;
        }
    }

}

function remove(val) {
    this.root = removeNode(this.root, val);
}

function removeNode(current, value) {
    if (value == null || value == undefined)
        return;

    if (value == current.data) {
        if (current.left == null && current.right == null) {
            return null;
        } else if (current.left == null)
            return current.right;
        else if (current.right == null)
            return current.left;
        else {
            var tempNode = kthSmallestNode(current.right);
            current.data = tempNode.data;
            current.right = removeNode(current.right, tempNode.data);
            return current;
        }


    } else if (value < current.data) {
        current.left = removeNode(current.left, value);
        return current;
    } else {
        current.right = removeNode(current.right, value);
        return current;
    }
}

function kthSmallestNode(node) {
    while (!(node.left == null))
        node = node.left;

    return node;
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.data + " ");
        inOrder(node.right);
    }
}


var tree = new BST();
tree.insert(25);
tree.insert(20);
tree.insert(30);
tree.insert(27);
tree.insert(21);
tree.insert(16);
tree.insert(26);
tree.insert(35);

tree.remove(30)

console.log("Inorder : ")
console.log(tree.inOrder(tree.root))