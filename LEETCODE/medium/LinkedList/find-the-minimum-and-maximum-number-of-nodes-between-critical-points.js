/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    const nums = [];

    while (head) {
        nums.push(head.val);
        head = head.next;
    }

    const points = [];
    const n = nums.length;

    for (let i = 1; i < n - 1; i++) {
        if (
            nums[i] > nums[i - 1] &&
            nums[i] > nums[i + 1]
        ) {
            points.push(i);
        } else if (
            nums[i] < nums[i - 1] &&
            nums[i] < nums[i + 1]
        ) {
            points.push(i);
        }
    }

    const m = points.length;

    if (m < 2) {
        return [-1, -1];
    }

    let minDist = Infinity;
    const maxDist = points[m - 1] - points[0];

    for (let i = 1; i < m; i++) {
        minDist = Math.min(minDist, points[i] - points[i - 1]);
    }

    return [minDist, maxDist];
};

console.log(nodesBetweenCriticalPoints({
    val: 1,
    next: {
        val: 3,
        next: {
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 2,
                        next: null
                    }
                }
            }
        }
    }
})); // [1, 3]