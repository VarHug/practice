// https://leetcode-cn.com/problems/permutations/

/**
 * @param {number[][]} list
 * @param {number[]} tempList
 * @param {number[][]} nums
 */
const backtrack = (list, tempList, nums) => {
  if (tempList.length === nums.length) {
    list.push(tempList.slice());
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) {
        continue;
      }
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const list = [];
  backtrack(list, [], nums);
  return list;
};

permute([1, 2, 3]);
