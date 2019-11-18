/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var idx = nums.indexOf(target);
    if(idx != -1){
        return idx;
    }
    
    for(i in nums){
        if(target < nums[i]){
            return i;
        }
        
    }
    return nums.length;
};

var nums = [1,3,5,6];
var target = 7;