/**
 * Reverse the given singly linked list by manipulating its head and return the reversed list. The input is head = [1,2,3,4,5] and the expected output is [5,4,3,2,1]. 
**/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linked_list = new Node(1);
linked_list.next = new Node(2);
linked_list.next.next = new Node(3);
linked_list.next.next.next = new Node(4);
linked_list.next.next.next.next = new Node(5);

function reverseLinkedList(head) {
  if(!head  || !head.next) return head;
  let reverseHead = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;
  return reverseHead;
}


console.log(reverseLinkedList(linked_list));
