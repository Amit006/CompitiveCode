

class PriorityQueue {
    constructor(comparator = (a, b) => a - b) {
        this._heap = [];
        this._comparator = comparator;
    }


    size() {
        return this._heap.length;
    }


    front() {
        return this._heap[0];
    }

    enqueue(value) {
        this._heap.push(value);
        this._siftUp();
    }

    dequeue() {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this._heap.pop();
        const front = this._heap[0];
        this._heap[0] = this._heap.pop();
        this._siftDown();
        return front;
    }

    _siftUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this._comparator(this._heap[index], this._heap[parentIndex]) >= 0) break;
            [this._heap[index], this._heap[parentIndex]] = [this._heap[parentIndex], this._heap[index]];
            index = parentIndex;
        }
    }

    _siftDown() {
        let index = 0;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let minIndex = index;
            if (leftChildIndex < this.size() && this._comparator(this._heap[leftChildIndex], this._heap[minIndex]) < 0) {
                minIndex = leftChildIndex;
            }
            if (rightChildIndex < this.size() && this._comparator(this._heap[rightChildIndex], this._heap[minIndex]) < 0) {
                minIndex = rightChildIndex;
            }
            if (minIndex === index) break;
            [this._heap[index], this._heap[minIndex]] = [this._heap[minIndex], this._heap[index]];
            index = minIndex;
        }
    }
}

class SparseTable {
    constructor(nums) {
        const n = nums.length;
        const bitW = 32 - Math.clz32(n);
        this.min = Array.from({ length: bitW }, () => Array(n));
        this.max = Array.from({ length: bitW }, () => Array(n));
    }
    build(nums) {
        const n = nums.length;
        const bitW = this.min.length;
        nums.forEach((cur, i) => { this.min[0][i] = this.max[0][i] = cur });

        for (let i = 1; i < bitW; i++)
            for (let j = 0; j + (1 << i) <= n; j++) {
                this.min[i][j] = Math.min(this.min[i - 1][j], this.min[i - 1][j + (1 << (i - 1))]);
                this.max[i][j] = Math.max(this.max[i - 1][j], this.max[i - 1][j + (1 << (i - 1))]);
            }

    }

    query(left, right) {
        const k = 31 - Math.clz32(right - left);
        return Math.max(this.max[k][left], this.max[k][right - (1 << k)]) -
               Math.min(this.min[k][left], this.min[k][right - (1 << k)]);
    }

}


const maxTotalValue = (nums, k) => {
    const n = nums.length;
    const LUT = sparseTable(nums);
    const pq = new PriorityQueue(([a], [b]) => b - a);
    nums.forEach((_, i) => pq.enqueue([LUT.query(i, n), i, n]));

    let res = 0;
    while (pq.front()[0] && k--) {
        const [v, l, r] = pq.dequeue();
        res += v;
        pq.enqueue([LUT.query(l, r - 1), l, r - 1]);
    }

    return res;
};

const sparseTable = nums => {
    const n = nums.length;
    const bitW = 32 - Math.clz32(n);
    const min = Array.from({ length: bitW }, () => Array(n));
    const max = Array.from({ length: bitW }, () => Array(n));

    nums.forEach((cur, i) => { min[0][i] = max[0][i] = cur });

    for (let i = 1; i < bitW; i++)
        for (let j = 0; j + (1 << i) <= n; j++) {
            min[i][j] = Math.min(min[i - 1][j], min[i - 1][j + (1 << (i - 1))]);
            max[i][j] = Math.max(max[i - 1][j], max[i - 1][j + (1 << (i - 1))]);
        }

    return {
        query: (left, right) => {
            const k = 31 - Math.clz32(right - left);
            return Math.max(max[k][left], max[k][right - (1 << k)]) -
                   Math.min(min[k][left], min[k][right - (1 << k)]);
        }
    };
};

console.log(maxTotalValue([1, 2, 3], 3)); // Output: 6
console.log(maxTotalValue([5, 5, 5], 2)); // Output: 0