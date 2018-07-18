class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value = null) {
        const node = new Node(value);

        if (node.value > this.value) {
            if (this.left !== null) {
                this.left.insert(value);
            } else {
                this.left = node
            }
        } else {
            if (this.right !== null) {
                this.right.insert(value);
            } else {
                this.right = node
            }
        }
    }

    log(node) {
        if (node !== null) {
            this.log(node.right);
            console.log(node.value);
            this.log(node.left);
        }
    }
}

let tree = new Node(5);

tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(2);
tree.insert(51);
tree.insert(32);
tree.insert(21);
tree.insert(0);
tree.insert(-123);


tree.log(tree);





