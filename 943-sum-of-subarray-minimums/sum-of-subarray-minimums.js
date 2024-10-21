/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(a) {
  const MOD = 1e9 + 7;
  const n = a.length;
  let finalSum = 0;
  const stack = [];
  stack.top = () => stack.at(-1);
  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || a[stack.top()] >= a[i])) {
      const j = stack.pop()
      const L = stack.length ? stack.top() : -1;
      const R = i;
      const temp = a[j];
      
      const times = (j - L) * (R - j);
      const total = (temp * times) % MOD;
      finalSum += total;
      finalSum %= MOD;
    }
    stack.push(i);
  }
  return finalSum;
};