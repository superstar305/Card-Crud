/*

Issues:
1) countZeroValues function should accept values argument as optional. If no value is provided, it should use the default value of [].
2) Function multiplyByClosure returns NaN for non-numeric values. To fix this, we should check if the value is a number or not before multiplying.
3) button.onclick event is currently using i from a global scope, which always has the value of 10 when the button is clicked. We should capture the value of i at the time when the button is created.

*/

function multiplyByClosure(mult) {
  const values = [0, 0.5, 1, 2, 3, 4, 5, 'a', false];
  return values.map(function (value) {
    if (typeof value === 'number') {
      return value * mult;
    }
    return value;
  });
}
function countZeroValues(values) {
  return values.filter(function (value) {
    return value === 0;
  }).length;
}
for (var i = 0; i < 10; i++) {
  const multiplyByI = multiplyByClosure(i);
  const button = document.createElement('button');
  button.textContent = `Multiply by ${i}`;
  document.body.appendChild(button);
  button.onclick = function () {
    console.log(multiplyByI);
  };
}
// console.log output
const multiplyByTwo = multiplyByClosure(2);
console.log(multiplyByTwo);
const multiplyByThree = multiplyByClosure(3);
console.log(multiplyByThree);
// count zero values, expecting 1: console.log(countZeroValues(multiplyByTwo));
