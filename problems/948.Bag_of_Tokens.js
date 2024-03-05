/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
function bagOfTokensScore(tokens, power) {
  tokens.sort((a, b) => a - b);
  let max_score = 0;
  let score = 0;
  let left = 0;
  let right = tokens.length - 1;
  while (left <= right) {
    if (power >= tokens[left]) {
      score += 1;
      power -= tokens[left];
      max_score = Math.max(max_score, score);
      left += 1;
    } else if (score > 0) {
      score -= 1;
      power += tokens[right];
      right -= 1;
    } else {
      break;
    }
  }
  return max_score;
}

//  passed all test cases except one : tokens = [100, 200, 300, 400], power = 200 | don't know why ;_;
var bagOfTokensScore = function (tokens, power) {
  // sort the tokens
  tokens.sort((a, b) => a - b);

  let score = 0;
  let maxScore = 0;
  let left = 0,
    right = tokens.length - 1;
  while (left <= right) {
    if (power > tokens[left]) {
      power -= tokens[left];
      score++;
      left++;
      maxScore = score > maxScore ? score : maxScore;
    } else if (score > 0) {
      power += tokens[right];
      score--;
      right--;
    } else {
      break;
    }
  }
  return maxScore;
};
