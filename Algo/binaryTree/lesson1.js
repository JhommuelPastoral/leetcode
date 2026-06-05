var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
function printTree(node) {
    if (!node)
        return;
    if (node.val === 4) {
        console.log("Found", node.val);
        return;
    }
    printTree(node.left);
    printTree(node.right);
}
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
printTree(root);
console.log(root);
