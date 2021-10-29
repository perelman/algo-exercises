/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
   if (!nums.length) {
      return -1;
   }
   if (nums.length === 1) {
      if (nums[0] === target) {
         return 0;
      }
      return -1;
   }
   let start = 0, end = nums.length - 1;
   const isRotated = nums[start] > nums[end];
   const pivotIndex = isRotated ? searchForPivot(nums): 0;
   nums = isRotated ? fixArray(nums, pivotIndex) : nums;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const num = nums[mid];
      if (num === target) {

        if (isRotated) {
          return mid >= (nums.length - pivotIndex) ? mid - (nums.length - pivotIndex)  : mid + pivotIndex;
        } else {
          return mid;
        }
      }
      if (num > target) {
         end = mid - 1;
      } else {
         start = mid + 1;
      } 
   }
    return -1;
};

const fixArray = ([...nums], pivot) => {
   return [...nums.splice(pivot, nums.length - pivot), ...nums.splice(0, pivot)]
}

const searchForPivot = nums => {
   let start = 0, end = nums.length -1, lowNumber = nums[0];
   while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const curNum = nums[mid];
      const nextNum = nums[mid +1];
      
       if (curNum > nextNum) {
         return mid + 1;
      }
       
      if (curNum >= lowNumber) {
         
          start = mid + 1;
      } else {
         end = mid - 1;
      }
 
   }
}
