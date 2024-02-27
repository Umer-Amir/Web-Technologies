// basic function
function add(a, b) {
  return a + b;
}

//anonymous function

var sub = function (a, b) {
  return a - b;
};

// arrow function

var mul = (a, b) => {
  return a * b;
};

//single line arrow function

var div = (a, b) => a / b;

//anonymous function with IIFE
(function (num1, num2) {
  return num1 + num2;
})();

((num1, num2) => {
  return num1 + num2;
})();
