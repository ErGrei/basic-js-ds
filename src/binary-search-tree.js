const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }
  add(data) {
    if (data < this.data) {
      this.addLeft(data);
    } else {
      this.addRight(data);
    }
  }
  addLeft(data) {
    if (this.left) {
      return this.left.add(data);
    }
    this.left = new TreeNode(data);
  }

  addRight(data) {
    if (this.right) {
      return this.right.add(data);
    }
    this.right = new TreeNode(data);
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    if (this.treeRoot) {
      return this.treeRoot.add(data);
    }
    this.treeRoot = new TreeNode(data);
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }

    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
