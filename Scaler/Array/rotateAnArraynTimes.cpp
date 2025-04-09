#include <vector>
#include <iostream>

using namespace std;

/**
 * Rotates an array to the right by k steps using cyclic replacement approach
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param nums Vector of integers to rotate
 * @param k Number of positions to rotate right
 * @return The rotated vector (same as input vector, modified in-place)
 */
vector<int> rotateArrayCyclic(vector<int>& nums, int k) {
    const int n = nums.size();
    k = k % n; // Handle cases where k is greater than the length
    
    // No need to rotate if k is 0 or array is empty
    if (k == 0 || n <= 1) return nums;
    
    int count = 0; // Count of elements rotated
    
    for (int start = 0; count < n; start++) {
        int current = start;
        int prev = nums[start];
        
        do {
            // Calculate the next position
            const int next = (current + k) % n;
            
            // Save the value at the next position
            const int temp = nums[next];
            
            // Place the previous value at its correct position
            nums[next] = prev;
            
            // Update variables for next iteration
            prev = temp;
            current = next;
            count++;
        } while (start != current);
    }
    
    return nums;
}

/**
 * Alternative approach using reverse technique
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
vector<int> rotateAnArrayNTimes(vector<int>& nums, int k) {
    const int n = nums.size();
    k = k % n; // Handle cases where k is greater than the length
    
    // No need to rotate if k is 0 or array is empty
    if (k == 0 || n <= 1) return nums;
    
    // Helper function to reverse a portion of the array
    auto reverse = [&nums](int start, int end) {
        while (start < end) {
            swap(nums[start], nums[end]);
            start++;
            end--;
        }
    };
    
    // Perform the three reverse operations
    reverse(0, n - 1);       // Reverse the entire array
    reverse(0, k - 1);       // Reverse the first k elements
    reverse(k, n - 1);       // Reverse the remaining elements
    
    return nums;
}

// Example usage
int main() {
    vector<int> arr1 = {1, 2, 3, 4, 5, 6, 7};
    vector<int> arr2 = {1, 2, 3, 4, 5, 6, 7};
    
    rotateArrayCyclic(arr1, 3);
    rotateAnArrayNTimes(arr2, 3);
    
    // Print the results
    cout << "Cyclic method result: ";
    for (int num : arr1) {
        cout << num << " ";
    }
    cout << endl;
    
    cout << "Reverse method result: ";
    for (int num : arr2) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}