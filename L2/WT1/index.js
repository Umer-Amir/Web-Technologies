const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware

const logger = (req, res, next) => {
  req.msg = "Hello from middleware";
  console.log("Middleware executed");
  next();
};

const auth = (req, res, next) => {
  if (req.query.username === "Peter") {
    console.log("User is authenticated");
    next();
  } else {
    console.log("User is not authenticated");
    res.send("Access Denied");
  }
};

app.use(logger);

app.get("/login", auth, (req, res) => {
  res.send(`hello  \n ${req.msg}`);
});

app.get("/", (req, res) => {
  res.send(`hello  \n ${req.msg}`);
});

app.get("/msg", (req, res) => {
  res.send("hello from msg");
});

app.listen(PORT, () =>
  console.log(`Server is listening on Port http://localhost/"${PORT}`)
);
