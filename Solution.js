
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
    if (node === null) {
        return null;
    }

    if (node.right !== null) {
        return leftmostNodeFromCurrentRoot(node.right);
    }

    while (node.parent !== null && node === node.parent.right) {
        node = node.parent;
    }

    return node.parent;
};

/**
 * @param {Node} node
 * @return {Node}
 */
function leftmostNodeFromCurrentRoot(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
