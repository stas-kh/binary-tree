import Node from "./node";

export default class BinaryTree {
    _root: Node;
    _count: number;

    constructor() {
        this.clear();
    }
    public add(element: Node) {
        let currentElement = this._root;
        if (currentElement === null) {
            this._root = element;
            this._count++;
            return element;
        }
        while (currentElement !== null) {
            if (currentElement.key > element.key) {
                if (currentElement.left === null) {
                    currentElement.left = element;
                    this._count++;
                    break;
                } else {
                    currentElement = currentElement.left;
                }
            } else if (currentElement.key < element.key) {
                if (currentElement.right === null) {
                    currentElement.right = element;
                    this._count++;
                    break;
                } else {
                    currentElement = currentElement.right;
                }
            } else {
                console.log(`Node -[${element.key}]- already exists`);
                return;
            }
        }
    }

    public contains(element: Number, tree: Node = this._root) {
        let isFound = false,
            currentElement = tree,
            result = null,
            parent = null;
        while (currentElement !== null) {
            if (currentElement.key > element) {
                parent = currentElement;
                currentElement = currentElement.left;
            } else if (currentElement.key < element) {
                parent = currentElement;
                currentElement = currentElement.right;
            } else {
                result = currentElement;
                isFound = true;
                break;
            }
        }
        return {isFound, result, parent};
    }

    public remove(value: Number, tree: Node = this._root, isRecursively: boolean = false) {
        let searchResult = this.contains(value, tree),
            parentNode = searchResult.parent,
            foundNode;
        if(searchResult.isFound) {
            foundNode = searchResult.result;
            if(!isRecursively) {
                this._count--;
            }
            if(foundNode.right === null) {
                if(foundNode.left === null) {
                    // case when node is leaf
                    foundNode.key = null;
                    this.removeNullLeaf(parentNode);
                } else {
                    // case when node doesn't contain right node, buy has left node;
                    let leftNode = foundNode.left;
                    foundNode.key = leftNode.key;
                    foundNode.right = leftNode.right;
                    foundNode.left = leftNode.left;
                }
            } else {
                // case if node has right child
                let leftMost = foundNode.right,
                    parentLeft = null;
                if (leftMost.left !== null) {
                    // case if right child has left node
                    while(leftMost.left !== null) {
                        parentLeft = leftMost;
                        leftMost = leftMost.left;
                    }
                    foundNode.key = leftMost.key;
                    this.remove(leftMost.key, parentLeft, true);
                } else {
                    // case if right child doesn't have left node
                    foundNode.key = leftMost.key;
                    foundNode.right = leftMost.right;
                }
            }
        } else {
            console.log(`Node -[${value}]- doesn't exist`);
        }
    }

    private removeNullLeaf(tree: Node) {
        if (tree.left && tree.left.key === null) {
            tree.left = null;
        } else if (tree.right && tree.right.key === null) {
            tree.right = null;
        }
        return tree;
    }

    public size() {
        return this._count;
    }

    public clear() {
        this._root = null;
        this._count = 0;
    }

    public min() {
        let currentNode = this._root;
        while(currentNode.left && currentNode.left.key !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    public max() {
        let currentNode = this._root;
        while(currentNode.right && currentNode.right.key !== null) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }
}