const User = require("../models/User");

const userController = {
  create: async function (name, lasname, password, username) {
    return new User(name, lasname, password, username);
  },
  get: async function (username){
      return User.findOne(username);
  },
  update: async function (name, lastname, password){
  }
};
