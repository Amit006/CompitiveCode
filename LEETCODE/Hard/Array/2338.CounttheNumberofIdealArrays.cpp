#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <cassert>
#include <cmath>
#include <algorithm>
#include <numeric>
using namespace std;

class Solution {
   public:
    int idealArrays(int n, int maxValue) {
        const int MOD = 1e9 + 7;

        // Calculate the maximum possible number of distinct values in a
        // strictly increasing ideal array. If a sequence is v1, v2, ..., vk
        // with v_i | v_{i+1} and v_i < v_{i+1}, then v_{i+1} >= 2 * v_i. So, vk
        // >= v1 * 2^(k-1) >= 1 * 2^(k-1). Since vk <= maxValue, 2^(k-1) <=
        // maxValue, which implies k-1 <= log2(maxValue), or k <= log2(maxValue)
        // + 1.
        int max_distinct_values = 0;
        long long current_val =
            1;  // Use long long to avoid overflow in multiplication
        while (current_val <= maxValue) {
            max_distinct_values++;
            if (maxValue / current_val < 2)
                break;  // Avoid overflow and ensure strictly increasing step
            current_val *= 2;
        }
        // The number of distinct values 'k' in an ideal array can range from 1
        // up to min(n, max_distinct_values).

        // Precompute factorials and inverse factorials for combinations C(n-1,
        // k-1) We need combinations C(N, K) where N = n-1 and K = k-1. Max N is
        // n-1, max K is max_distinct_values - 1.
        const int max_comb_n = n - 1;
        // const int max_comb_k = max_distinct_values; // k goes up to
        // max_distinct_values, so k-1 goes up to max_distinct_values - 1

        vector<long long> fact(max_comb_n + 1);
        vector<long long> invFact(max_comb_n + 1);
        fact[0] = 1;
        invFact[0] = 1;

        for (int i = 1; i <= max_comb_n; i++) {
            fact[i] = (fact[i - 1] * i) % MOD;
        }

        // Modular exponentiation for modular inverse (Fermat's Little Theorem)
        auto power = [&](long long base, long long exp) {
            long long res = 1;
            base %= MOD;
            while (exp > 0) {
                if (exp % 2 == 1)
                    res = (res * base) % MOD;
                base = (base * base) % MOD;
                exp /= 2;
            }
            return res;
        };

        // Modular inverse
        auto modInverse = [&](long long num) { return power(num, MOD - 2); };

        // Precompute inverse factorials
        invFact[max_comb_n] = modInverse(fact[max_comb_n]);
        for (int i = max_comb_n - 1; i >= 1; i--) {
            invFact[i] = (invFact[i + 1] * (i + 1)) % MOD;
        }

        // Modular combinations (n choose k)
        auto nCr_mod_p = [&](int N, int K) {
            if (K < 0 || K > N)
                return 0LL;
            if (K == 0 || K == N)
                return 1LL;
            if (K > N / 2)
                K = N - K;  // Use symmetry C(N, K) = C(N, N-K)
            // C(N, K) = N! / (K! * (N-K)!) = N! * (K!)^-1 * ((N-K)!)^-1
            long long numerator = fact[N];
            long long denominator = (invFact[K] * invFact[N - K]) % MOD;
            return (numerator * denominator) % MOD;
        };

        // DP state: dp[j] will store the number of strictly increasing
        // sequences of the *current* length ending with value j. We iterate
        // through the length of the strictly increasing sequence (k).
        vector<long long> dp(maxValue + 1, 0);

        // Base case: k = 1 (strictly increasing sequences of length 1)
        // Any number from 1 to maxValue is a strictly increasing sequence of
        // length 1.
        for (int j = 1; j <= maxValue; j++) {
            dp[j] = 1;
        }

        // Initialize total count with the contribution from arrays with 1
        // distinct value. These are arrays like [j, j, ..., j] for j from 1 to
        // maxValue. There is 1 such sequence (just j). The number of ways to
        // form an array of length n with 1 distinct value is C(n-1, 1-1) =
        // C(n-1, 0) = 1. Sum of dp[j] for k=1 is maxValue. Total for k=1 is
        // maxValue * C(n-1, 0) = maxValue.
        long long total_ideal_arrays = 0;
        for (int j = 1; j <= maxValue; ++j) {
            total_ideal_arrays = (total_ideal_arrays + dp[j]) % MOD;
        }

        // Iterate through the number of distinct values k from 2 up to min(n,
        // max_distinct_values)
        for (int k = 2; k <= min(n, max_distinct_values); k++) {
            vector<long long> next_dp(maxValue + 1,
                                      0);  // DP array for sequences of length k
            long long sum_dp_k =
                0;  // Sum of next_dp[j] over all j for the current k

            // Calculate next_dp based on current dp (which represents sequences
            // of length k-1) Iterate through possible previous ending values
            // 'd' (from sequences of length k-1)
            for (int d = 1; d <= maxValue; d++) {
                if (dp[d] > 0) {
                    // If there are strictly increasing sequences of length k-1
                    // ending in 'd'...
                    // ... these can be extended by appending any multiple 'j'
                    // of 'd' such that j > d. Iterate through multiples 'j' of
                    // 'd' starting from d * 2.
                    for (long long j = (long long)d * 2; j <= maxValue;
                         j += d) {
                        // The number of strictly increasing sequences of length
                        // 'k' ending in 'j' is increased by the number of
                        // sequences of length k-1 ending in 'd'.
                        next_dp[j] = (next_dp[j] + dp[d]) % MOD;
                    }
                }
            }

            dp = next_dp;  // Update dp to represent strictly increasing
                           // sequences of length k

            // Sum the number of strictly increasing sequences of length k
            // ending in any value j.
            for (int j = 1; j <= maxValue; j++) {
                sum_dp_k = (sum_dp_k + dp[j]) % MOD;
            }

            // Add the contribution of ideal arrays with exactly k distinct
            // values to the total. The number of ideal arrays of length n with
            // k distinct values (forming a strictly increasing sequence) is
            // (number of strictly increasing sequences of length k) * C(n-1,
            // k-1). C(n-1, k-1) is the number of ways to choose k-1 positions
            // out of n-1 to place the transitions between distinct values.
            long long combinations = nCr_mod_p(n - 1, k - 1);
            total_ideal_arrays =
                (total_ideal_arrays + (sum_dp_k * combinations) % MOD) % MOD;
        }

        return total_ideal_arrays;
    }
};