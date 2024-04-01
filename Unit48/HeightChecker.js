/** Question 3
You are given an array heights representing the heights of students in a class. The students are standing in a line, and their heights are listed in the order they appear from left to right. The school wants to arrange the students in a non-decreasing order by their heights. However, when they rearrange the students, a few may end up in different positions from their original positions.

You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

Example: 

Input: heights = [1,1,4,2,1,3]
Output: 3
 */

function heightChecker(heights) {
  let sortedHeights = [...heights].sort((a,b) => a - b);
  let wrong_position = 0;
  for(let i = 0; i < sortedHeights.length; i++) {
    if(sortedHeights[i] != heights[i]) {
      wrong_position++;
    }
  }

  return wrong_position;
}

console.log(heightChecker([1,1,4,2,1,3]))