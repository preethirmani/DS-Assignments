/** Question 1
Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions: 

  The opening brackets: 

- Must match with the corresponding closing brackets of the same type 

- Must be closed in the correct order 

- Should have a corresponding opening bracket of the same type 

Example: 

Input: s = "()" Output: true */

function validParanthesis(str) {
  const stack = [];
  const map = new Map();
  map.set(')', '(');
  map.set('}', '{');
  map.set(']', '[');

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(' ||  str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else {
      if(! (map.get(str[i]) === stack.pop())) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validParanthesis("()"));