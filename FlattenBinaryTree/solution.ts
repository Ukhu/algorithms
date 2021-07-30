class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function flattenBinaryTree(root: BinaryTree) {
  const inOrderNodes = getNodesInOrder(root, []);
  for (let i = 0; i < inOrderNodes.length - 1; i++) {
    const leftNode = inOrderNodes[i];
    const rightNode = inOrderNodes[i + 1];
    leftNode.right = rightNode;
    rightNode.left = leftNode;
  }
  return inOrderNodes[0];
}

function getNodesInOrder(tree: BinaryTree | null, array: BinaryTree[]) {
  if (tree !== null) {
    getNodesInOrder(tree.left, array);
    array.push(tree);
    getNodesInOrder(tree.right, array);
  }
  return array;
}
