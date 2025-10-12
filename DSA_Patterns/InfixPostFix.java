import java.util.Scanner;
import java.util.Stack;

class InfixPostFix {

    // Check if a character is an operand (alphabetic character)
    public static boolean isOperand(char character) {
        return (character >= 'a' && character <= 'z');
    }

    // Get the precedence of an operator
    public static int getPrecedence(char operator) {
        if (operator == '+' || operator == '-') {
            return 1; // Lowest precedence
        } else if (operator == '*' || operator == '/') {
            return 2; // Medium precedence
        } else if (operator == '^') {
            return 3; // Highest precedence
        }
        return -1; // Non-operator characters
    }

    // Convert infix expression to postfix
    public static void convertToPostfix(String infixExpression) {
        Stack<Character> operatorStack = new Stack<>();

        for (int i = 0; i < infixExpression.length(); i++) {
            char currentChar = infixExpression.charAt(i);

            // If the character is an operand, print it directly
            if (isOperand(currentChar)) {
                System.out.print(currentChar);
            }
            // Handle opening parenthesis
            else if (currentChar == '(') {
                operatorStack.push(currentChar);
            }
            // Handle closing parenthesis
            else if (currentChar == ')') {
                while (!operatorStack.isEmpty() && operatorStack.peek() != '(') {
                    System.out.print(operatorStack.pop());
                }
                operatorStack.pop(); // Remove '(' from the stack
            }
            // Handle operators
            else {
                while (!operatorStack.isEmpty() && getPrecedence(operatorStack.peek()) >= getPrecedence(currentChar)) {
                    System.out.print(operatorStack.pop());
                }
                operatorStack.push(currentChar);
            }
        }

        // Pop all remaining operators from the stack
        while (!operatorStack.isEmpty()) {
            System.out.print(operatorStack.pop());
        }
    }

    public static void main(String[] args) {
        System.out.println("Enter the infix expression:");
        Scanner scanner = new Scanner(System.in);
        // String infixExpression = scanner.nextLine();
        String infixExpression = "a+b*(c^d-e)^(f+g*h)-i";
        System.out.print("Postfix expression: ");
        convertToPostfix(infixExpression);
    }
}