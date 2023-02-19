/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sns = [];
    for(let i  = 0; i < nums.length; i++)
    {
    for(let j = i + 1; j < nums.length;j++)
    {
        if(nums[i] + nums[j] === target)
        {
            sns.push(i);
            sns.push(j);
            break;
            
        }
    }
    }
    return sns;
};