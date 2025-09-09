def max_area(height):
    left = 0
    right = len(height) - 1
    max_area = 0

    while left < right:
        # Calculate current area
        width = right - left
        curr_height = min(height[left], height[right])
        area = width * curr_height

        # Update max area if larger
        if area > max_area:
            max_area = area

        # Move pointer of the smaller tower inward
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

# Example usage
towers = [1,8,6,2,5,4,8,3,7]
print(max_area(towers))  # Output: 49
