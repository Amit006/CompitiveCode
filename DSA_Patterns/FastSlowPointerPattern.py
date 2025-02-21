def findDuplicate(nums: list[int]) -> int:
    """
    Find duplicate number using Floyd's Cycle Detection.
    Time: O(n), Space: O(1)
    """
    # Phase 1: Find intersection point
    slow = fast = nums[0]
    index = 0
    while True:
        slow = nums[slow]
        
        # print(' Inside Fast Index', nums[fast])
        fast = nums[nums[fast]]
        # print(' Inside fast :', fast)
        # print(' Inside slow', slow)
        if slow == fast:
            break
        index+=1
    # print('slow',slow)
    # print('Index',index)
    # print("Phase two")
    # Phase 2: Find cycle entrance
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    
    return slow

# Example usage:
nums = [1,3,5,4,2,2]
# Output: 2 (duplicate number)/
# print(" NUMS:-- ", nums)
# print('Returns: - ',findDuplicate(nums))


"""
Conditions for Correct Operation:

Array as a Linked List:
The algorithm relies on interpreting the nums array as a linked list where nums[i] points to the next node.
Values in Range [1, n]:
The array nums must contain n + 1 integers, and these integers must be within the range [1, n] (inclusive).
This condition is crucial because it ensures that the "next" pointers are valid indices within the array.
Existence of a Duplicate:
There must be at least one duplicate number in the array. This is what creates the cycle.
Scenarios Where It Might Not Work:

Values Outside the Range [1, n]:
If the array contains values that are less than 1 or greater than n, the "next" pointers might point to invalid indices, causing errors or unexpected behavior.
No Duplicate:
If there are no duplicate numbers in the array, the algorithm might not terminate correctly or might produce an incorrect result.
Zero Values:
If the array contains zero values, it will cause the slow and fast pointers to point to index zero, and the algorithm may not function correctly.
Modifications to the Array:
The algorithm assumes that the array is not modified during its execution.1 Any changes to the array's values could disrupt the cycle and lead to incorrect results.   
1.
Linked list coding pattern. Floyd's cycle-finding algorithm | by Dilip Kumar | Medium

dilipkumar.medium.com

Non-Integer Values:
The algorithm is designed for arrays of integers. If the array contains non-integer values, it will not function correctly.

"""