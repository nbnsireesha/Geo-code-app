const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  formatted_address: { type: String },
  lat: { type: String },
  lng: { type: String }
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;