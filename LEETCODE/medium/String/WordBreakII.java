import java.util.HashSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.ArrayList;
import java.util.Collections;
public class WordBreakII {
      public List<String> wordBreak(String s, List<String> wordDict) {
        Set<String> setDict = new HashSet<>(wordDict);
        Map<String, List<String>> memo = new HashMap<>();
        return dfs(s, setDict, memo);
    }

     // Depth-first search function to find all possible word break combinations
    private List<String> dfs(
        String remainingStr,
        Set<String> wordSet,
        Map<String, List<String>> memoization
    ) {
        // Check if result for this substring is already memoized
        if (memoization.containsKey(remainingStr)) {
            return memoization.get(remainingStr);
        }

        // Base case: when the string is empty, return a list containing an empty string
        if (remainingStr.isEmpty()) return Collections.singletonList("");
        List<String> results = new ArrayList<>();
        for (int i = 1; i <= remainingStr.length(); ++i) {
            String currentWord = remainingStr.substring(0, i);
            // If the current substring is a valid word
            if (wordSet.contains(currentWord)) {
                for (String nextWord : dfs(
                    remainingStr.substring(i),
                    wordSet,
                    memoization
                )) {
                    // Append current word and next word with space in between if next word exists
                    results.add(
                        currentWord + (nextWord.isEmpty() ? "" : " ") + nextWord
                    );
                }
            }
        }
        // Memoize the results for the current substring
        memoization.put(remainingStr, results);
        return results;
    }


    public static void main(String[] args) {
        WordBreakII solver = new WordBreakII();
        String s = "catsanddog";
        List<String> wordDict = List.of("cat", "cats", "and", "sand", "dog");
        List<String> result = solver.wordBreak(s, wordDict);
        System.out.println(result); // Output: ["cats and dog", "cat sand dog"]
    }
}
