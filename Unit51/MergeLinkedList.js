/**Question 1
Merge the two sorted linked lists linked_list1 and linked_list2 into a single sorted list. Create the merged list by splicing together the nodes of the first two lists. Return the head of the resulting merged linked list.  

The input will be linked_list1 = [1,2,4] and linked_list2 = [1,3,4], and the expected output is [1,1,2,3,4,4]. **/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linked_list1 = new Node(1);
linked_list1.next = new Node(2);
linked_list1.next.next = new Node(4);

const linked_list2 = new Node(1);
linked_list2.next = new Node(3);
linked_list2.next.next = new Node(4);

console.log(linked_list1, linked_list2);

function mergeTwoLists(l1, l2) {
 
  if(!l1  ) return l2;
  if(!l2 ) return l1;

 if(l1.val < l2.val) {
   l1.next = mergeTwoLists(l1.next,l2);
   return l1;
 } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
 }
  
}

console.log(mergeTwoLists(linked_list1, linked_list2));
