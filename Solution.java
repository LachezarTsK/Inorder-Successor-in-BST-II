
public class Solution {

    public Node inorderSuccessor(Node node) {

        if (node == null) {
            return null;
        }

        if (node.right != null) {
            return leftmostNodeFromCurrentRoot(node.right);
        }

        while (node.parent != null && node == node.parent.right) {
            node = node.parent;
        }

        return node.parent;
    }

    public Node leftmostNodeFromCurrentRoot(Node node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }
}

class Node {

    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
