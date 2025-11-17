// 1st approach - using stack 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head === null) return head;
    if (n == 0) return null;

    if (head.next == null && n == 1) return null;

    let count = 1;
    let tail = head;
    let stack = [];

    while (tail) {
        stack.push(tail.val);
        tail = tail.next;
        count++;

    }

    let deletePostion = (stack.length - n);
    stack.splice(deletePostion, 1);

    let newList = new ListNode();
    let newHead = newList;
    for (let val of stack) {
        newList.next = new ListNode(val);
        newList = newList.next;
    }

    return newHead.next;

};



//  using two pass algorithm
var removeNthFromEnd = function (head, n) {
    let Tail = head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let ListLength = 0;

    while (Tail) {
        Tail = Tail.next;
        ListLength++;
    }

    let removePositionBeforeIndex = (ListLength - n) - 1;

    if (ListLength == n) return head.next;

    let newList = dummy.next;
    while (removePositionBeforeIndex > 0 ) {
        newList = newList.next;
        removePositionBeforeIndex--;
    }

    newList.next = newList.next.next;

    return dummy.next;
};


// using one pass algorithm - two pointer approach
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let frist = dummy;
    let second = dummy;

    for (let i = 0; i<= n; i++) {
        frist = frist.next;
    }

    while(frist != null){
        frist = frist.next;
        second = second.next;
    }

    second.next = second.next.next;


    return dummy.next;
};