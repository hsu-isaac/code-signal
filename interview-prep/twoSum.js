var twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let key in obj) {
    if (obj[target - key]) {
      return [obj[target - key]], obj[key]
    }
  }
}
