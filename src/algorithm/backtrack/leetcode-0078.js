// https://leetcode-cn.com/problems/subsets/

/**
 * @param {number[][]} list
 * @param {number[]} tempList
 * @param {number[][]} nums
 * @param {number} start
 */
const backtrack = (list, tempList, nums, start) => {
  list.push(tempList.slice());
  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i]);
    backtrack(list, tempList, nums, i + 1);
    tempList.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const list = [];
  backtrack(list, [], nums, 0);
  return list;
};

subsets([1, 2, 3]);
