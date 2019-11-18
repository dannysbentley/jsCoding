var containsDuplicate = function(nums) {
    nums = nums.sort((a,b) => a>b);    
    if(nums.length <= 1){
        return false;
    }
    
    for(i =1; i < nums.length; i++){
      console.log(nums[i-1] ^ nums[i])
        if((nums[i-1] ^ nums[i]) === 0){
            return true;
            break;
        }
    }
    return false;
  };
  
  var nums = [2,14,18,-22,-22];
  console.log(containsDuplicate(nums));
  
  // Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.