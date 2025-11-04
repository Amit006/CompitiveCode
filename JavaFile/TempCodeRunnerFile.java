import java.util.HashMap;

public class TempCodeRunnerFile {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY public int[]
    public static int[] twoSum(final int[] A, int B) {
        HashMap<Integer, Integer> idx = new HashMap<>();

        for (int i = 0; i < A.length; i++) {
            int num = A[i];
            int temp = B - num;
            if (idx.containsKey(temp)) {
                return new int[] { idx.get(temp) + 1, i + 1 };
            }

            if (!idx.containsKey(num)) {
                idx.put(num, i);
            }
        }
        return new int[] {};
    }


    public static void Main(){
        int[] A  =  {2, 7, 11, 15, 3, 6, 8, 1};
    int B = 9;
        int[] res = twoSum(A, B);
        for (int i : res) {
            System.out.println(i + " ");
        }
    }
}