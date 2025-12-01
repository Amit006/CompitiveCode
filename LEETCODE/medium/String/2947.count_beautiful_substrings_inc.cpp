// #include <iostream>
// #include <string>
// #include <unordered_set>
// #include <cassert>

// using namespace std;

// /**
//  * Counts the number of beautiful substrings in a given string.
//  * A substring is beautiful if:
//  * 1. The number of vowels equals the number of consonants
//  * 2. The product of vowels and consonants is divisible by k
//  * 
//  * @param s - The input string to analyze
//  * @param k - The divisibility factor
//  * @return - The count of beautiful substrings
//  */
// int beautifulSubstrings(const string& s, int k) {
//     // Using unordered_set for O(1) lookup of vowels
//     const unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
//     int bcount = 0;
    
//     for (size_t i = 0; i < s.length(); i++) {
//         int vowelCount = 0;
//         int consonantCount = 0;
        
//         // Check if the first character is a vowel
//         if (vowels.find(s[i]) != vowels.end()) {
//             vowelCount++;
//         } else {
//             consonantCount++;
//         }
        
//         for (size_t j = i + 1; j < s.length(); j++) {
//             // Check if the current character is a vowel
//             if (vowels.find(s[j]) != vowels.end()) {
//                 vowelCount++;
//             } else {
//                 consonantCount++;
//             }
            
//             // Check if the substring is beautiful
//             if ((vowelCount == consonantCount) && ((consonantCount * vowelCount) % k == 0)) {
//                 bcount++;
//             }
//         }
//     }
    
//     return bcount;
// }

// int main() {
//     // Test cases
//     assert(beautifulSubstrings("aabb", 2) == 1);
//     assert(beautifulSubstrings("baeyh", 2) == 2);
//     assert(beautifulSubstrings("abba", 1) == 3);
//     assert(beautifulSubstrings("bcdf", 1) == 0);
    
//     cout << "All test cases passed!" << endl;
//     return 0;
// }



#include <iostream>
#include <string>
#include <unordered_set>
#include <unordered_map>
#include <cassert>
#include <cmath>

using namespace std;

/**
 * Counts the number of beautiful substrings in a given string.
 * A substring is beautiful if:
 * 1. The number of vowels equals the number of consonants
 * 2. The product of vowels and consonants is divisible by k
 * 
 * Optimized approach using prefix sums and hash maps.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param s - The input string to analyze
 * @param k - The divisibility factor
 * @return - The count of beautiful substrings
 */
int beautifulSubstrings(const string& s, int k) {
    const unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
    
    // Find the smallest x such that x² is divisible by k
    int x = 1;
    while ((x * x) % k != 0) {
        x++;
    }
    
    cout<<"x: "<<x<<endl;
    // Map to store frequency of (vowel-consonant difference, vowel count % x)
    unordered_map<string, int> prefixMap;
    
    // Initialize with 0 difference and 0 vowels at position -1
    prefixMap["0,0"] = 1;
    
    int vowelCount = 0;
    int consonantCount = 0;
    int result = 0;
    
    for (size_t i = 0; i < s.length(); i++) {
        // Update vowel and consonant counts
        if (vowels.find(s[i]) != vowels.end()) {
            vowelCount++;
        } else {
            consonantCount++;
        }
        
        // Calculate the difference between vowels and consonants
        int diff = vowelCount - consonantCount;
        
        // Calculate vowel count modulo x (for the product divisibility check)
        int modVowel = vowelCount % x;
        
        // Create the key for our map
        string key = to_string(diff) + "," + to_string(modVowel);
        
        // If we've seen this combination before, it means there are substrings
        // with equal vowels and consonants and their product is divisible by k
        if (prefixMap.find(key) != prefixMap.end()) {
            result += prefixMap[key];
        }
        
        // Update the frequency map
        prefixMap[key]++;
    }
    
    return result;
}

int main() {
    // Test cases
    assert(beautifulSubstrings("aabb", 2) == 1);
    assert(beautifulSubstrings("baeyh", 2) == 2);
    assert(beautifulSubstrings("abba", 1) == 3);
    assert(beautifulSubstrings("bcdf", 1) == 0);
    
    // Additional test case with larger input
    string largeInput = string(1000, 'a') + string(1000, 'b');
    cout << "Large input test: " << beautifulSubstrings(largeInput, 1) << endl;
    
    cout << "All test cases passed!" << endl;
    return 0;
}