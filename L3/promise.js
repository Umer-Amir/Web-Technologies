function first() {
  return new Promise((resolve, reject) => {
    return resolve("first call");
  });
}

function second(callback) {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => resolve(`second call ${user.name}`));
    // .then(() => callback());
  });
}

function third(callback) {
  return new Promise((resolve, reject) => {
    return resolve("third call");
  });
}

first()
  .then((data) => console.log(data))
  .then(() => {
    second()
      .then((data) => console.log(data))
      .then(() => third().then((data) => console.log(data)));
  });
