
/*
 * @param {number} x
 * @param {number} n
 * @param {number}
*/
var myPow = function(x,n) {
  if(n === 0) return 1;
  if(n ===1) return x;

  const absN = Math.abs(n);
  const isNegative = absN !== n;

  let res = absN % 2 ===0 ? myPow(x * x, asb / 2): myPow(x, absN -1)
  return isNegative ? 1/res :res;
}