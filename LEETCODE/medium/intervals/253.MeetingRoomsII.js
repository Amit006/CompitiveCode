/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) return 0;

    let starts = intervals.map(i => i[0]).sort((a,b) => a-b);
    let ends   = intervals.map(i => i[1]).sort((a,b) => a-b);

    let s = 0, e = 0;
    let rooms = 0, maxRooms = 0;

    while (s < starts.length) {
        if (starts[s] < ends[e]) {
            rooms++;
            maxRooms = Math.max(maxRooms, rooms);
            s++;
        } else {
            rooms--;
            e++;
        }
    }

    return maxRooms;
};


console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1


// using min heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    shift() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleUp();
        }

        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
}        

const minMeetingRoomsHeap = function(intervals) {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[0] - b[0]);
    const heap = new MinHeap();
    heap.insert(intervals[0][1]);
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= heap.heap[0]) {
            heap.shift();
        } else {
            heap.insert(intervals[i][1]);
        }
    }

    return heap.heap.length;
};
