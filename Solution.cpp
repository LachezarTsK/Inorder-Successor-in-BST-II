
using namespace std;

class Node {
    
public:
    int val;
    Node* left;
    Node* right;
    Node* parent;
};

class Solution {
    
public:
    Node* inorderSuccessor(Node* node) {
        if (node == nullptr) {
            return nullptr;
        }

        if (node->right != nullptr) {
            return leftmostNodeFromCurrentRoot(node->right);
        }

        while (node->parent != nullptr && node == node->parent->right) {
            node = node->parent;
        }

        return node->parent;
    }

    Node* leftmostNodeFromCurrentRoot(Node* node) {
        while (node->left != nullptr) {
            node = node->left;
        }
        return node;
    }
};
