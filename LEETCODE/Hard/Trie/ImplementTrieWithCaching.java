
import java.util.HashMap;


class ImplementTrieWithCaching {

    // Implemented using HashMap for child existence checks 
    private class TrieNode {
        HashMap<Character, TrieNode> children;
        Boolean isWordEnd;

        public TrieNode() {
            children = new  HashMap<>();
            isWordEnd = false;
        }
    }

    private TrieNode root;

    public ImplementTrieWithCaching() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            curr.children.putIfAbsent(c, new TrieNode());
            curr = curr.children.get(c);
        }

        curr.isWordEnd = true;
    }

    public boolean search(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            curr.children.putIfAbsent(c, new TrieNode());
            curr = curr.children.get(c);
        }
        return curr.isWordEnd;
    }

    public boolean startsWith(String prefix) {
        TrieNode curr = root;
        for (char c : prefix.toCharArray()) {
            curr.children.putIfAbsent(c, new TrieNode());
            curr = curr.children.get(c);
        }
        return true;
    }


    public static void main(String[] args) {
        ImplementTrieWithCaching trie = new ImplementTrieWithCaching();
        trie.insert("apple");
        System.out.println(trie.search("apple"));   // returns true
        System.out.println(trie.search("app"));     // returns false
        System.out.println(trie.startsWith("app")); // returns true
        trie.insert("app");
        System.out.println(trie.search("app"));     // returns true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */