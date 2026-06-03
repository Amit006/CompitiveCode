import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;



class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;

    public TrieNode() {
        children = new TrieNode[26];
        isEndOfWord = false;
    }
}

class TrieClass {

    private TrieNode root;

    public TrieClass() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEndOfWord = true;
    }
}


public class WordBreakIITrie {
 
    private TrieNode root = new TrieNode();

    public List<String> wordBreak(String s, List<String> wordDict) {
        buildTrie(wordDict);
      
        Map<Integer, List<String>> memo = new HashMap<>();

        for(Integer startIndex = s.length() - 1; startIndex >= 0; startIndex--) {
            List<String> sentences = new ArrayList<>();
            TrieNode node = root;

            for(int endIndex = startIndex; endIndex < s.length(); endIndex++) {
                char c = s.charAt(endIndex);
                int charIndex = c - 'a';
                if (node.children[charIndex] == null) {
                    break;
                }
                node = node.children[charIndex];
                if (node.isEndOfWord) {
                    String word = s.substring(startIndex, endIndex + 1);
                    if (endIndex + 1 == s.length()) {
                        sentences.add(word);
                    } else if (memo.containsKey(endIndex + 1)) {
                        for (String subSentence : memo.get(endIndex + 1)) {
                            sentences.add(word + " " + subSentence);
                        }
                    }
                }
            }
            memo.put(startIndex, sentences);
        }
        
      
        return memo.getOrDefault(0, new ArrayList<>());
    }

    private void buildTrie(List<String> wordDict) {
        for (String word : wordDict) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                int index = c - 'a';
                if (node.children[index] == null) {
                    node.children[index] = new TrieNode();
                }
                node = node.children[index];
            }
            node.isEndOfWord = true;
        }
    }


    // what if we do prefix tree / trie
    
    
    
    
    public static void main(String[] args) {
        WordBreakIITrie solver = new WordBreakIITrie();
        String s = "catsanddog";
        List<String> wordDict = List.of("cat", "cats", "and", "sand", "dog");
        List<String> result = solver.wordBreak(s, wordDict);
        System.out.println(result); // Output: ["cats and dog", "cat sand dog"]
    }

}
