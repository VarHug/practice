// https://leetcode-cn.com/problems/subsets-ii/

/**
 * @param {number[][]} list
 * @param {number[]} tempList
 * @param {number[][]} nums
 * @param {number} start
 */
const backtrack = (list, tempList, nums, start) => {
  list.push(tempList.slice());
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    tempList.push(nums[i]);
    backtrack(list, tempList, nums, i + 1);
    tempList.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  const list = [];
  backtrack(list, [], nums.slice().sort(), 0);
  return list;
};

subsetsWithDup([1, 2, 2]);
