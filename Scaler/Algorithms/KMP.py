# This code implements the KMP (Knuth-Morris-Pratt) algorithm's preprocessing step to build the longest prefix-suffix (LPS) array.
# The LPS array is used to skip characters while matching the pattern with the text.
def build_lps(pattern):
    n = len(pattern)
    lps = [0] * n
    length = 0  # Length of the previous longest prefix suffix
    i = 1

    while i < n:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            print(f"Mismatch at i={i}, length={length}, lps={lps}")
            # This is tricky. Consider the example "AAACAAAA" and i = 7.
            if length != 0:
                length = lps[length - 1]
                print(f"Updated length={length} after mismatch")
            else:
                lps[i] = 0
                i += 1

    return lps

# Example Usage
pattern = "ABABACA"
print(build_lps(pattern))  # Output: [0, 0, 1, 2, 3, 0, 1]