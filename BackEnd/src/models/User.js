const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    require: true,
  },
  name: {
    type: "string",
    require: true,
  },
  lasname: {
    type: "string",
    require: true,
  },
  password:{
      type: "string",
      require: true,
  },
  ProfilePicture: {
      type: "string"
  }
});

const User = mongoose.model('User', userSchema);

model.exports = User;
