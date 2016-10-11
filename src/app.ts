import BinaryTree from "./components/binaryTree";
import Node from "./components/node";

let BT = new BinaryTree();

BT.add(new Node(33));
BT.add(new Node(5));
BT.add(new Node(35));
BT.add(new Node(1));
BT.add(new Node(20));
BT.add(new Node(99));
BT.add(new Node(4));
BT.add(new Node(17));
BT.add(new Node(31));

console.log(JSON.stringify(BT, null, 4));

BT.remove(5);
BT.remove(99);
BT.remove(33);

console.log(JSON.stringify(BT, null, 4));