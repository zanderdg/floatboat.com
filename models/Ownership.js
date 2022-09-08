const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownershipSchema = new Schema(
  {
    Value: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ownership", ownershipSchema);
