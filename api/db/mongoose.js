// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://chaukoldaravuth21:ykE20LzsNrkOSOPi@tasktrackercluster.et12qia.mongodb.net/', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
  console.log("Error while attempting to connect to MongoDB");
  console.log(e);
});

module.exports = {
  mongoose
};
