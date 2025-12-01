import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

       // Handle null or empty input
        if (strs == null || strs.length == 0) {
            return new ArrayList<>();
        }
           
        List<List<String>> result = new ArrayList();

        Set<String> hs = new HashSet<>();
        for (String str : strs)
            hs.add(str);


        while (!hs.isEmpty()) {
            List<String> anagramGroup = new ArrayList<>();
            anagramGroup.add(hs.iterator().next());

            for (int i = 1; i < anagramGroup.get(0).length(); i++) {
                String rotateStr = rotate(anagramGroup.get(0), i);

                StringBuilder res = new StringBuilder(anagramGroup.get(0));
                res.reverse();

                if (hs.contains(rotateStr)) {
                    anagramGroup.add(rotateStr);
                    hs.remove(rotateStr);
                } else if (hs.contains(res.toString())) {
                    anagramGroup.add(res.toString());
                    hs.remove(res.toString());
                }

            }
            hs.remove(anagramGroup.get(0));
            result.add(anagramGroup);
        }
        return result;
    }

    public String rotate(String str, int i) {
        return str.substring(i, str.length()) + str.substring(0, i);
    }
}

class GroupAnagrams {
    public static void main(String args[]) {
        Solution sol = new Solution();
        // String[] strs = { "eat", "tea", "tan", "ate", "nat", "bat" };
        String[] strs1 = { "c", "c" };
        // System.out.println(sol.groupAnagrams(strs));
        System.out.println(sol.groupAnagrams(strs1));
    }
}


/*
  - Approach-1 

    1)I think we can use hashSet 
    2)Loop through hashSet and rotate current element Char to i < n times and check if exits 
    3)If exits delete from HashMap and Place it on result array
    4)Again we can start from same index 
    5)Cover the edge cases

*/