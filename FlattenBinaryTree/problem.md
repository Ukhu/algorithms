# Flatten Binary Tree

Write a function that takes in a Binary Tree, flattens it, and returns its leftmost node.

A flattened Binary Tree is a structure that's nearly identical to a Doubly Linked List (except that nodes have left and right pointer instead of `prev` and `next` pointers), where nodes follow the original tree's left-to-right order.

Note that if the input Binary Tree happens to be a valid Binary Search Tree, the nodes in the flattened tree will be sorted.

The flattening should be done in place, meaning that the original data structure should be mutated (no new structure should be created).

Each `BinaryTree` node has an integer `value`, a `left` child node, and a `right` child node. Children nodes can either be `BinaryTree` nodes themselves or `None`/`Null`.
