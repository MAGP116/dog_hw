const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    species :{
      string: 'string',
  },
  imagesUrl:{
      type: 'string',
  },
  colors:{
      type: 'string',
  },
  age:{
      type: 'string',
  },
  gender:{
      type: 'string'
  },
  size:{
      type: 'string'
  },
  id:{
      type: 'int'
  }
});

const Pet = mongoose.model('Pets', petSchema);

model.exports = Pet;
