import java.util.ArrayDeque;
import java.util.Deque; // Efficient implementation of Deque

public class PerfectNumber {

    /**
     * Finds the Ath Perfect Number using Breadth-First Search (BFS)
     * with ArrayDeque.
     *  
     *   @param A The index of the Perfect Number to find (1-based).
     *   @return The Ath Perfect Number as a String.
     */

    public static String findAthPerfectNumber_BFS(int A) {
        if (A <= 0) {
            throw new IllegalArgumentException("A must be a positive integer.");
        }

        // Use Deque interface implemented by ArrayDeque
        // push() in JS maps to offerLast() or addLast() in Deque (add to the end)
        // shift() in JS maps to pollFirst() or removeFirst() in Deque (remove from the front)
        Deque<String> deque = new ArrayDeque<>();
        
        // 1. Initialize the deque with base terms S = "1" and S = "2"
        deque.offerLast("1"); // Equivalent to JS push()
        deque.offerLast("2"); // Equivalent to JS push()

        // 2. Loop A-1 times to discard the first A-1 terms
        for (int i = 0; i < A - 1; i++) {
            // Retrieve and remove the element from the front (Equivalent to JS shift())
            String front = deque.pollFirst(); 
            
            if (front == null) {
                // Should not happen for valid A
                break; 
            }
            
            // Generate and enqueue the next two terms
            deque.offerLast(front + "1");
            deque.offerLast(front + "2");
        }
        
        // 3. The A-th term (S) is now at the front. Retrieve it.
        String result = deque.pollFirst(); // Equivalent to JS shift()

        if (result == null) {
             return "Error: Could not find Ath term.";
        }

        // 4. Construct the palindrome S S^R
        StringBuilder sb = new StringBuilder(result);
        String reversed = sb.reverse().toString();
        
        return result + reversed;
    }

    // Example Usage:
    public static void main(String[] args) {
        // A=2 -> S="2" -> Perfect Number: "22"
        System.out.println("2nd Perfect Number (A=2): " + findAthPerfectNumber_BFS(2)); 
        
        // A=4 -> S="12" -> Perfect Number: "1221"
        System.out.println("4th Perfect Number (A=4): " + findAthPerfectNumber_BFS(4)); 
    }
}