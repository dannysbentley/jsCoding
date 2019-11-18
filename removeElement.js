/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(i = 0; i < nums.length; i++){
        if(nums[i] == val){
            console.log('debug')
            nums.splice(i, 1);
        }
    }
    return nums;
};

var nums = [3,2,2,3];
console.log(removeElement(nums, 3));