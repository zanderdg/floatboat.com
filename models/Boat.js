const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const boatSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    attributes: String,
    builtYear: Number,
    location: String,
    longitude: Number,
    latitude: Number,
    destination: String,
    zipCode: String,
    amenities: [
      {
        type: Schema.Types.ObjectId,
        ref: "amenities",
      },
    ],
    expenseTotal: {
      type: Number,
      default: 0,
    },
    expenses: {
      propertyTax: {
        type: Number,
        default: 0,
      },
      cleaningFee: {
        type: Number,
        default: 0,
      },
      propertyManagement: {
        type: Number,
        default: 0,
      },
      maintenance: {
        type: Number,
        default: 0,
      },
      utilities: {
        type: Number,
        default: 0,
      },
      programManagementFee: {
        type: Number,
        default: 0,
      },
      insurance: {
        type: Number,
        default: 0,
      },
      repairReserve: {
        type: Number,
        default: 0,
      },
    },
    images: Array,
  },
  { timestamps: true }
);

boatSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("boat", boatSchema);
