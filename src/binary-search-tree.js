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

  has(data) {
    let current = this.treeRoot;
  
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        if (!current.left) {
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          break;
        }
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    if (!this.treeRoot) {
      return null;
    }
    let current = this.treeRoot;
    while (true) {
      if (current === undefined) {
        return null;
      }
      if (current.data === data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      }
      if (data > current.data) {
        current = current.right;
      }
    }
  }

  remove(data) {
      if (!this.treeRoot) {
      return null;
    }
    this.treeRoot = removeTreeRoot(this.treeRoot, data);

    function removeTreeRoot(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeTreeRoot(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeTreeRoot(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeTreeRoot(node.right, minRight.data);
        return node;
      }
    }
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
