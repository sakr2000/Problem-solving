/**
 * Given an integral number, determine if it's a square number
 * Ex:
 -1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
 */

function isSquare(int) {
  return Math.sqrt(int) == Math.floor(Math.sqrt(int)) ? true : false;
}
function isSquare2(int) {
  return Math.sqrt(int) % 1 === 0;
}
