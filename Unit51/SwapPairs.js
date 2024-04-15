/**
 * Solve the problem without changing the values in the nodes. Note that only the positions of the nodes can be changed, for example, if the input linked list is [1, 2, 3, 4], the output should be [2, 1, 4, 3].   
 */

class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
console.log(node);
console.log(node.next.next);


function swapPairs(head) {
  if(!head || !head.next) return head;

  let nextPair = head.next.next;
  let newHead = head.next;
  head.next.next = head;
  head.next = swapPairs(nextPair);

  return newHead;
}

console.log(swapPairs(node));
