
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class GridIllumination {

    int[][] directions = {
        // cur, direct horz & vertical & diagonals
        {0, 0},
        {1, 0}, {-1, 0}, {0, 1}, {0, -1},
        {1, 1}, {1, -1}, {-1, -1}, {-1, 1}
    };

    Set<Integer> litLamps;
    Map<Integer, Integer> rowLit;
    Map<Integer, Integer> colLit;
    Map<Integer, Integer> descendingDiagonalLit;
    Map<Integer, Integer> ascendingDiagonalLit;

    // O(n^2) time | O(n^2) space
    // n = board side length, worst case = all lamps lit and we iterate all lamps and add to set
    public int[] gridIllumination(int n, int[][] lamps, int[][] queries) {
        litLamps = new HashSet<>();
        rowLit = new HashMap<>();
        colLit = new HashMap<>();
        descendingDiagonalLit = new HashMap<>();
        ascendingDiagonalLit = new HashMap<>();

        for (int[] pos : lamps) {
            int r = pos[0], c = pos[1];
            int posHash = r * n + c;
            if (litLamps.contains(posHash)) {
                continue; // manage duplicate inputs
            }
            litLamps.add(posHash);
            light(pos[0], pos[1], n);
        }

        int[] res = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int[] pos = queries[i];

            if (isIlluminated(pos[0], pos[1], n)) {
                res[i] = 1;

                for (int[] d : directions) {
                    int r = pos[0] + d[0], c = pos[1] + d[1];
                    if (r < 0 || r >= n || c < 0 || c >= n) {
                        continue;
                    }
                    int posHash = r * n + c;

                    if (litLamps.contains(posHash)) {
                        lightOff(r, c, n);
                        litLamps.remove(posHash);
                    }
                }
            } else {
                res[i] = 0;
            }
        }
        return res;
    }

    private void light(int r, int c, int n) {
        int d_d = r - c;
        int a_d = r + c;

        rowLit.put(r, rowLit.getOrDefault(r, 0) + 1);
        colLit.put(c, colLit.getOrDefault(c, 0) + 1);
        descendingDiagonalLit.put(a_d, descendingDiagonalLit.getOrDefault(a_d, 0) + 1);
        ascendingDiagonalLit.put(d_d, ascendingDiagonalLit.getOrDefault(d_d, 0) + 1);
    }

    private boolean isIlluminated(int r, int c, int n) {
        int d_d = r - c;
        int a_d = r + c;

        return rowLit.getOrDefault(r, 0) > 0
                || colLit.getOrDefault(c, 0) > 0
                || descendingDiagonalLit.getOrDefault(a_d, 0) > 0
                || ascendingDiagonalLit.getOrDefault(d_d, 0) > 0;
    }

    private void lightOff(int r, int c, int n) {
        int d_d = r - c;
        int a_d = r + c;

        rowLit.put(r, rowLit.get(r) - 1);
        colLit.put(c, colLit.get(c) - 1);
        descendingDiagonalLit.put(a_d, descendingDiagonalLit.get(a_d) - 1);
        ascendingDiagonalLit.put(d_d, ascendingDiagonalLit.get(d_d) - 1);
    }
}
