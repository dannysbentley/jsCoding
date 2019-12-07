// given the two arrays find two number that make up the sum. 
var nums = [1,20,2,7,11,15];
var target = 9;

function twoSum(nums, target){
    const hash = {};
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i])
        if(hash.hasOwnProperty(nums[i])){
             return [hash[nums[i]],i];
        }

        const result = target - nums[i];
        hash[result] = i;
    }    
}

/*
hash {6:0, -13:1, 7:2}
1 20 2 7 11 15
^
9-1 = 8
1 20 2 7 11 15
   ^
9-20 = -11
1 20 2 7 11 15
     ^
9-2 = 7
1 20 2 7 11 15
       ^
9-7 = 2  (nums[i] = 7) found in hash
*/

console.log(twoSum(nums, target));
