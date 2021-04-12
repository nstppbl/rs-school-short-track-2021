/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let x = 1;
  let res = '';
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      x++;
    } else {
      res = res + x + arr[i];
      x = 1;
    }
  }
  res = res.replace(/1/g, '');
  return res;
}

module.exports = encodeLine;
