import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  it("should append a node to the list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.append(1);
    expect(linkedList.find(1)?.data).toBe(1);
  });
  it("should prepend a node to the list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.prepend(0);
    const expectedOutput = [0, 1, 2];
    expect(linkedList.toArray().map((node) => node.data)).toEqual(
      expectedOutput
    );
  });
});
