// https://leetcode-cn.com/problems/permutations-ii/

/**
 * @param {number[][]} list
 * @param {number[]} tempList
 * @param {number[][]} nums
 * @param {boolean[]} vised
 */
const backtrack = (list, tempList, nums, vised) => {
  if (tempList.length === nums.length) {
    list.push(tempList.slice());
  } else {
    for (let i = 0; i < nums.length; i++) {
      const isEqual = i > 0 && nums[i] === nums[i - 1] && !vised[i - 1];
      if (vised[i] || isEqual) {
        continue;
      }
      vised[i] = true;
      tempList.push(nums[i]);
      backtrack(list, tempList, nums, vised);
      vised[i] = false;
      tempList.pop();
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  const list = [];
  backtrack(list, [], nums.slice().sort(), []);
  return list;
};

permuteUnique([1, 1, 2]);
