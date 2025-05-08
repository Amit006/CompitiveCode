class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(time, i, j) {
    const element = [time, i, j];
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }
    return { time: min[0], i: min[1], j: min[2] };
  }

  heapifyUp(index) {
    const element = this.heap[index];
    const currentTime = element[0];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentElement = this.heap[parentIndex];
      if (parentElement[0] <= currentTime) break;
      this.heap[index] = parentElement;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  heapifyDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    const currentTime = element[0];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swapIdx = null;

      if (leftChildIdx < length) {
        const leftChildTime = this.heap[leftChildIdx][0];
        if (leftChildTime < currentTime) {
          swapIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        const rightChildTime = this.heap[rightChildIdx][0];
        if (
          (swapIdx === null && rightChildTime < currentTime) ||
          (swapIdx !== null && rightChildTime < this.heap[swapIdx][0])
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;
      this.heap[index] = this.heap[swapIdx];
      index = swapIdx;
    }
    this.heap[index] = element;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function findMinimumTime(moveTime) {
  const n = moveTime.length;
  const m = moveTime[0].length;
  const dist = Array.from({ length: n }, () => Array(m).fill(Infinity));
  dist[0][0] = 0;
  const pq = new PriorityQueue();
  pq.enqueue(0, 0, 0);
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (!pq.isEmpty()) {
    const { time: currentTime, i, j } = pq.dequeue();
    if (i === n - 1 && j === m - 1) {
      return currentTime;
    }
    if (currentTime > dist[i][j]) {
      continue;
    }
    for (const [dx, dy] of directions) {
      const x = i + dx;
      const y = j + dy;
      if (x >= 0 && x < n && y >= 0 && y < m) {
        const newTime = Math.max(currentTime, moveTime[x][y]) + 1;
        if (newTime < dist[x][y]) {
          dist[x][y] = newTime;
          pq.enqueue(newTime, x, y);
        }
      }
    }
  }
  return -1; // according to problem constraints, unreachable
}