import java.util.TreeMap;

public class ReorganizeString {
        public String reorganizeString(String s) {
        TreeMap<String, Integer> thp = new TreeMap<>();
        
        for(char ch : s.toCharArray()) {
            String str = String.valueOf(ch);
            thp.put(str, thp.getOrDefault(str, 0) + 1);
        }
        
        String result = "";
        while (thp.size() > 0){
            for(String str: thp.keySet()){
                result += str;
                
                Integer lastCount = thp.get(str); 
                if(lastCount < 2) thp.remove(str);
                else thp.put(str, lastCount -1 );
                
                Integer topElementCount = thp.get(thp.firstKey());
                
                if(topElementCount > 1) break;                                
            }
        }
        
        return result;
    }

    public static void main(String[] args) {
        ReorganizeString rs = new ReorganizeString();
        System.out.println(rs.reorganizeString("aab"));
        System.out.println(rs.reorganizeString("aaab"));
        System.out.println(rs.reorganizeString("vvvlo"));
    }
}

// --- IGNORE ---