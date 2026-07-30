// Optimized Way

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        const cur = map.get(num);
        map.set(num, cur === undefined ? 1 : cur + 1);
    }

    const resp = [...map.entries()].sort((a, b) => b[1] - a[1]);

    const ans = new Array(k);
    for (let i = 0; i < k; i++) {
        ans[i] = resp[i][0];
    }
    return ans;
};

console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]

// -- bucket sort 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentBucketSort = function(nums, k) {
    const map = new Map();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        const cur = map.get(num);
        map.set(num, cur === undefined ? 1 : cur + 1);
    }

    const resp = [...map.entries()].sort((a, b) => b[1] - a[1]);

    const ans = new Array(k);
    for (let i = 0; i < k; i++) {
        ans[i] = resp[i][0];
    }
    return ans;
};

console.log(topKFrequentBucketSort([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequentBucketSort([1], 1)); // [1]


// heap 


class MinPriorityQueue {
    constructor(priorityFunction) {
        this.priorityFunction = priorityFunction;
        this.elements = [];
    }

    enqueue(element) {
        this.elements.push(element);
        this.bubbleUp(this.elements.length - 1);
    }

    dequeue() {
        if (this.elements.length === 0) return null;
        const min = this.elements[0];
        const last = this.elements.pop();
        if (this.elements.length > 0) {
            this.elements[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.priorityFunction(this.elements[parentIndex]) <= this.priorityFunction(this.elements[index])) break;
            [this.elements[parentIndex], this.elements[index]] = [this.elements[index], this.elements[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const n = this.elements.length;
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;

            if (left < n && this.priorityFunction(this.elements[left]) < this.priorityFunction(this.elements[smallest])) {
                smallest = left;
            }
            if (right < n && this.priorityFunction(this.elements[right]) < this.priorityFunction(this.elements[smallest])) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.elements[index], this.elements[smallest]] = [this.elements[smallest], this.elements[index]];
            index = smallest;
        }
    }

    size() {
        return this.elements.length;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentHeap = function(nums, k) {
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // v6 API: constructor takes a priority-extractor function; enqueue the object directly
    const heap = new MinPriorityQueue((entry) => entry.freq);
    for (const [num, freq] of freqMap.entries()) {
        heap.enqueue({ num, freq });
        if (heap.size() > k) {
            heap.dequeue();
        }
    }

    const result = [];
    while (heap.size() > 0) {
        result.push(heap.dequeue().num); // dequeue() returns the raw object in v6, no .element wrapper
    }

    return result.reverse();
};

console.log(topKFrequentHeap([1,1,1,2,2,3], 2)); // [1,2]



