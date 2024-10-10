import { LinkedList } from "./linked-list.ts";

const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.print();
linkedList.append(4);
linkedList.append(5);
linkedList.find(3);
linkedList.prepend(0);

// linkedList.delete(3);

console.log("Hello via Bun!");
console.log(JSON.stringify(linkedList.find(3), null, 2));
