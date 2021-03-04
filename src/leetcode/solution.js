/**
 Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Your goal is to reach the last index in the minimum number of jumps.
You can assume that you can always reach the last index.
Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 */
var jump = function(nums) {
     let result=0;
     for( let i in nums) 
         {
              
             let jump = nums[i]
             
              while(jump < nums.length)
                  {
                      
                      jump = nums[jump]
                      console.log(jump)
                      result +=1;
                  }
                 
             if(nums[jump] === nums.length)
                 {
                     result +=1;
                     return result;
                 } 
         }
         return result;
 };
 
 console.log(jump([2,3,0,1,4]))

 /**
  * take first one, jump to the end save as result the steps 
  * take second one do the same 
  * if max > current then swap
  * else go to the next
  * do to the end of list 
  * @return {number}
  */