/**
 * JavaScript program to quicksort an array
 * using the naive partition approach (stable within partitions).
 *
 * The naive partition uses extra O(n) space per partition step.
 * This version is in-place overall and sorts by recursively partitioning subranges.
 */

/**
 * Partition the subarray arr[l..r] using the last element as pivot.
 * Naive approach: build a temp array with all <= pivot first (in stable order),
 * then all > pivot, and copy back into arr[l..r].
 *
 * Returns the final index of the pivot within arr (between l and r).
 */
function partitionRange(arr, l, r) {
  const n = r - l + 1;
  const pivot = arr[r];

  const temp = new Array(n);
  let idx = 0;

  // Fill elements <= pivot into temp
  for (let i = l; i <= r; i++) {
    if (arr[i] <= pivot) {
      temp[idx++] = arr[i];
    }
  }

  // The pivot (which is arr[r]) is the last element inserted above,
  // because we scan left-to-right and include arr[r] at the end.
  const pivotIndex = l + idx - 1;

  // Fill elements > pivot into temp
  for (let i = l; i <= r; i++) {
    if (arr[i] > pivot) {
      temp[idx++] = arr[i];
    }
  }

  // Copy back into arr[l..r]
  for (let i = 0; i < n; i++) {
    arr[l + i] = temp[i];
  }

  // Uncomment for debugging:
  // console.log(`Partitioned [${l}, ${r}] around pivot=${pivot} at index ${pivotIndex}:`, arr.slice(l, r + 1));

  return pivotIndex;
}

/**
 * Internal recursive quicksort on subarray arr[l..r].
 */
function quickSortInPlace(arr, l, r) {
  if (l >= r) return;
  const p = partitionRange(arr, l, r);
  quickSortInPlace(arr, l, p - 1);
  quickSortInPlace(arr, p + 1, r);
}

/**
 * Public API: sorts the array in place and returns it.
 */
function quickSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr;
  quickSortInPlace(arr, 0, arr.length - 1);
  return arr;
}

// Driver Code
let arr = [5, 13, 6, 9, 12, 11, 8];
console.log(quickSort(arr)); // [5, 6, 8, 9, 11, 12, 13]
