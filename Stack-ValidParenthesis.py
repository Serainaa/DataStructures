class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # Define a dictionary to map opening brackets to their corresponding closing brackets
        my_dictionary = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        # Initialize an empty list to simulate a stack
        my_array = []
        # Extract keys from the dictionary for efficient lookup
        keys = my_dictionary.keys()
        
        # Iterate through each character in the input string
        for i in s:
            # If the character is an opening bracket, push its corresponding closing bracket onto the stack
            if i in keys:
                my_array.append(my_dictionary[i])
            else:
                # If the character is not an opening bracket
                if my_array != []:
                    # Check if the current character matches the last element in the stack
                    if i == my_array[-1]:
                        # If so, pop the last element from the stack (matching opening bracket found)
                        my_array.pop()
                    else:
                        # If the current character does not match the last element in the stack, return False
                        return False
                else:
                    # If the stack is empty and a closing bracket is encountered, return False
                    return False
        
        # After iterating through all characters in the string, check if the stack is empty
        # If the stack is empty, all opening brackets have been closed properly, return True
        # Otherwise, there are unmatched opening brackets, return False
        if len(my_array) == 0:
            return True
        else:
            return False

        

# Define a test class to organize your test cases
class TestSolution(object):

    # Test case 1: Valid input
    def test_valid_input(self):
        solution = Solution()
        assert solution.isValid("()") == True
        assert solution.isValid("()[]{}") == True
        assert solution.isValid("{[]}") == True

    # Test case 2: Invalid input
    def test_invalid_input(self):
        solution = Solution()
        assert solution.isValid("(]") == False
        assert solution.isValid("([)]") == False
        assert solution.isValid("]") == False

# Run the test cases
if __name__ == "__main__":
    test = TestSolution()
    test.test_valid_input()
    test.test_invalid_input()
    print("All tests passed!")
