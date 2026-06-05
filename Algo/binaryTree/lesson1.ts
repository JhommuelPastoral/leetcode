class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function printTree(node: TreeNode | null): void {
    if (!node) return;
    if(node.val === 4){
      console.log("Found", node.val);
      return;
    }

    printTree(node.left);
    printTree(node.right);
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
printTree(root);
console.log(root);
