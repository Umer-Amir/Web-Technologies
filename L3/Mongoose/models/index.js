const mongoose = require("mongoose");
// const Course = require("./Course");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/appdb", {});
})();

module.exports = {
  Course: require("./Course"),
};
