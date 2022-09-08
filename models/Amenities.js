const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amenitiesSchema = new Schema(
  {
    Name: String,
    Icon:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("amenities", amenitiesSchema);
