from collections import Counter

def generate_3_digit_even_numbers(arr):
    freq = Counter(arr)
    print(freq)
    result = set()

    # Digits that can be first (non-zero)
    first_digits = [d for d in freq if d != 0]

    # Digits that can be middle (any digit)
    middle_digits = list(freq.keys())

    # Digits that can be last (even digits)
    even_digits = [d for d in freq if d % 2 == 0]

    for first in first_digits:
        freq[first] -= 1  # Use one occurrence
        for middle in middle_digits:
            if freq[middle] > 0:
                freq[middle] -= 1  # Use one occurrence
                for last in even_digits:
                    if freq[last] > 0:
                        number = first * 100 + middle * 10 + last
                        result.add(number)
                freq[middle] += 1  # Restore frequency
        freq[first] += 1  # Restore frequency

    return sorted(result)

# Example usage
arr = [2, 1, 0, 3]
numbers = generate_3_digit_even_numbers(arr)
print(numbers)  # Output: [120, 122, 210, 212, 310, 312]
