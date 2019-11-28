let nums = [1, 2, 3, 4, 5, 6, 7, 9, 10];

function missingNumber(nums) {
  total = ((nums.length + 2) * (nums.length + 1)) / 2;
  missingTotal = nums.reduce((a, b) => a + b);
  return total - missingTotal;
}

console.log(missingNumber(nums));
