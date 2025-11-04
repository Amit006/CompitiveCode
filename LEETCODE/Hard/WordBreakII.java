import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class WordBreakII {

    private List<String> result = new ArrayList<>();

    public List<String> wordBreak(String s, List<String> wordDict) {
        Set<String> set = new HashSet<>(wordDict); // for O(1) lookup
        backtrack(s, 0, new StringBuilder(), set);
        return result;
    }

 private void backtrack(String s, int start, StringBuilder temp, Set<String> wordDict) {
        if (start == s.length()) {
            result.add(temp.toString());
            return;
        }

        for (int end = start + 1; end <= s.length(); end++) {
            String word = s.substring(start, end);
            if (wordDict.contains(word)) {
                int lenBefore = temp.length();

                if (lenBefore != 0) temp.append(" ");
                temp.append(word);

                backtrack(s, end, temp, wordDict);

                temp.setLength(lenBefore); // backtrack
            }
        }
    }



  public static void main(String[] args) {
    WordBreakII solver = new WordBreakII();
    String s = "catsanddog";
    List<String> wordDict = List.of("cat", "cats", "and", "sand", "dog");
    List<String> results = solver.wordBreak(s, wordDict);
    System.out.println(results); // Expected: ["cats and dog", "cat sand dog"]
  }  
}