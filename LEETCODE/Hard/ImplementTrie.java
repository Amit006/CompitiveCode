
class Trie {

    private class TrieNode {
        TrieNode[] children;
        Boolean isWordEnd;
        int childMask; // 26 bits for 'a' to 'z'

        public TrieNode() {
            children = new TrieNode[26];
            isWordEnd = false;
            childMask = 0;
        }
    }

    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            Integer index = c - 'a';
            if (curr.children[index] == null) {
                curr.children[index] = new TrieNode();
                curr.childMask |= (1 << index); // Set the bit for this child
            }
            curr = curr.children[index];
        }

        curr.isWordEnd = true;
    }

    public boolean search(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            Integer index = c - 'a';
            if ((curr.childMask & (1 << index)) == 0) {
                return false;
            }
            curr = curr.children[index];
        }
        return curr.isWordEnd;
    }

    public boolean startsWith(String prefix) {
        TrieNode curr = root;
        for (char c : prefix.toCharArray()) {
            Integer index = c - 'a';
            if ((curr.childMask & (1 << index)) == 0) {
                return false;
            }
            curr = curr.children[index];
        }
        return true;
    }


    public static void main(String[] args) {
        Trie trie = new Trie();
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