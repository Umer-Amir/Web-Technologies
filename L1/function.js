function add(a, b) {
  return a + b;
}

let result = add(1, 2);
console.log(result); // 3

//Anonymous function
(function (a, b) {
  return console.log(a, b);
})(1, 2);

//Arrow function
((a, b) => console.log(a, b))(1, 2);
