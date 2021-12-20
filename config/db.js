const mongoose = require("mongoose");


const MONGOURI = "mongodb+srv://knight08:pass1234pass@cluster0.4jv2r.mongodb.net/userAuth?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log("MongoDB Error",e);
    // throw e;
  }
};

module.exports = InitiateMongoServer;