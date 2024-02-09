class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        # Initialize the stack to keep track of indices of opening parentheses
        stack = [-1]
        max_length = 0
        
        # Iterate through each character in the string
        for i in range(len(s)):
            if s[i] == '(':
                # Push the index of the opening parenthesis onto the stack
                stack.append(i)
            else:
                # If the current character is a closing parenthesis
                # Pop the top index from the stack
                stack.pop()
                if len(stack) == 0:
                    # If the stack becomes empty, push the current index onto the stack
                    stack.append(i)
                else:
                    # Calculate the length of the valid substring
                    max_length = max(max_length, i - stack[-1])
        
        return max_length

# Define a test class to organize your test cases
class TestSolution(object):

    # Test case 1: Valid input
    def test_valid_input(self):
        solution = Solution()
        assert solution.longestValidParentheses("(()") == 2
        assert solution.longestValidParentheses(")()())") == 4
        assert solution.longestValidParentheses("") == 0

    # Test case 2: More test cases
    def test_more_cases(self):
        solution = Solution()
        assert solution.longestValidParentheses("()") == 2
        assert solution.longestValidParentheses("((()))") == 6
        assert solution.longestValidParentheses("()()()") == 6

# Run the test cases
if __name__ == "__main__":
    test = TestSolution()
    test.test_valid_input()
    test.test_more_cases()
    print("All tests passed!")
