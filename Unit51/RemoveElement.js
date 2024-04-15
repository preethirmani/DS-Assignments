/**
 * Remove nodes with a specific value from a linked list. The given linked list has a head node [1,2,6,3,4,5,6] and the specified value is 6. The expected output is a modified list with nodes [1,2,3,4,5]. 
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linked_list = new Node(1);
linked_list.next = new Node(2);
linked_list.next.next = new Node(6);
linked_list.next.next.next = new Node(3);
linked_list.next.next.next.next = new Node(4);
linked_list.next.next.next.next.next = new Node(5);
linked_list.next.next.next.next.next.next= new Node(6);

console.log(linked_list);

function removeElement(head, val) {
  if(!head) return null;
  if(head.val === val) {
     return removeElement(head.next, val);
  }
  head.next = removeElement(head.next, val);
  return head;
}

console.log(removeElement(linked_list,6));
console.log(linked_list.next.next);
