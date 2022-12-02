export default class BinaryTree {
    constructor(value, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // if the value is less than the root nodes value
        if (value < this.value) {
          // if there is an existing left node
            if (this.left) {
            // insert the value into the existing left node
                this.left.insert(value);
            } else {
            // otherwise, create a new binary tree with the value and + the current depth
                this.left = new BinaryTree(value, this.depth + 1);
            }
        } else {
          // and if the value is greater than the root node, do the mirror opposite of the above
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BinaryTree(value, this.depth + 1)
            }
        }
    }

    getNodeByValue(value) {
        // if the current value equals the target value, return the current node
        if (value === this.value) {
          return this;
        // otherwise, if a left node exists and the target value is less than the current nodes value
        } else if (this.left && value < this.value) {
          // recursively call getNode on the left node with the target value
          return this.left.getNodeByValue(value)
        } else if (this.right) {
          // otherwise, recursively call getNode in the right branch with the target value
          return this.right.getNodeByValue(value);
        } else {
          // if nothing is found, return null
          return null
        }
    }

    depthFirstTraversal() {
        // if left node exists
        if (this.left) {
            // recursively call this function on it
            this.left.depthFirstTraversal();
        }
        // and log its values
        console.log(`Depth=${this.depth}, Value=${this.value}`);
        if (this.right) {
            // same thing for the right branch :p
            this.right.depthFirstTraversal();
        }
    }
}