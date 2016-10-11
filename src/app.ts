import BinaryTree from "./components/binaryTree";
import Node from "./components/node";

let BT = new BinaryTree();

BT.add(new Node(95));
BT.add(new Node(103));
BT.add(new Node(96));
BT.add(new Node(97));
BT.add(new Node(170));
BT.add(new Node(120));
BT.add(new Node(110));
BT.add(new Node(104));
BT.add(new Node(105));

console.log(JSON.stringify(BT, null, 4));

BT.remove(103);

console.log(JSON.stringify(BT, null, 4));