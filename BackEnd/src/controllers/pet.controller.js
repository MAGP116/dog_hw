const Pet = require("../models/Pets");

const petController = {
  create: async function (species, colors, age, gender, size, imagesUrl, id) {
    return new Pet(species, colors, age, gender, size, imagesUrl);
  },
  update: async function (id, species, colors, age, gender, size, imagesUrl) {
    pet = Pet.findOne({ id });
    if (pet == null) {
      return "Pet not found";
    }
    pet.species = species;
    pet.colors = colors;
    pet.size = size;
    pet.imagesUrl = imagesUrl;
    pet.age = age;
    pet.gender = gender;
    return pet;
  },
  delete: async function (id) {
    pet = Pet.findOne({ id });
    if (pet == null) {
      return "Pet not found";
    }
    pet = {};
    return pet;
  },
  get: async function () {
    return Pet.find({});
  },
  getPet: async function (id) {
    return User.findOne({ id });
  },
};

module.exports = petController;