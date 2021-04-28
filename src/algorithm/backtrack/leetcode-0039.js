// https://leetcode-cn.com/problems/combination-sum/

/**
 * @param {number[][]} list
 * @param {number[]} tempList
 * @param {number[]} candidates
 * @param {number} remain
 * @param {number} start
 */
const backtrack = (list, tempList, candidates, remain, start) => {
  if (remain < 0) {
    return;
  } else if (remain === 0) {
    list.push(tempList.slice());
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    tempList.push(candidates[i]);
    backtrack(list, tempList, candidates, remain - candidates[i], i);
    tempList.pop();
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const list = [];
  backtrack(list, [], candidates.slice().sort(), target, 0);
  return list;
};

combinationSum([2, 3, 6, 7], 7);
