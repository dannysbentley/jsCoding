/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<=1){
        return nums.length;
    }
    for(let i = 1; i < nums.length; i++){
        console.log(i);
        console.log(nums);
        while(nums[i] === nums[i-1]){
            nums.splice(i-1, 1);
        }
        if(nums[i] > nums[i-1]){
            continue;
        }
    }
    return nums;
};

var arr = [0,0,1,1,1,2,2,3,3,4];

var result = removeDuplicates(arr);
console.log('result: ' + result);