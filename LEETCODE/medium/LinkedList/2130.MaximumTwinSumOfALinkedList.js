/**
 * @param {ListNode} head
 * @return {number}
 */

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

var pairSum = function (head) {
    let slow = (fast = head);

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null,
        curr = slow;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    let maxSum = 0,
        left = head,
        right = prev;
    while (right !== null) {
        maxSum = Math.max(maxSum, left.val + right.val);
        left = left.next;
        right = right.next;
    }
    return maxSum;
};

console.log(
    pairSum(new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1))))),
); // Output: 6
