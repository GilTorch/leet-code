// Exercise: https://leetcode.com/problems/add-two-numbers/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {

  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  console.log(l1)

  while (l1 !== null || l2 !== null || carry !== 0) {
    //   console.log(`=====L1=======`,'\n',l1,`==============`);
    //   console.log(`=====L2=======`,'\n',l2,`==============`);
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next;
}

// [2,4,3]
// [5,6,4]
let l1_first_node = new ListNode(2);
let l1_second_node = new ListNode(4);
l1_first_node.next = l1_second_node;
let l1_third_node = new ListNode(3);
l1_second_node.next=l1_third_node;


let l2_first_node = new ListNode(5);
let l2_second_node = new ListNode(6);
l2_first_node.next = l2_second_node;
let l2_third_node = new ListNode(4);
l2_second_node.next=l2_third_node;

console.log(addTwoNumbers(l1_first_node, l2_first_node))
