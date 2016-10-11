export default class Node {
    key: number;
    left: Node;
    right: Node;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}