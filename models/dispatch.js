const mongoose = require("mongoose");

const dispatchSchema = new mongoose.Schema({
  dispatch_id: { type: String, required: true },
  dispatch_name: {
    type: String,
    required: true,
  },
  location: { type: String, required: true },
  bvn: { type: String, required: true },
  dispatch_plate_number: { type: String, required: true },
});

const Dispatch = mongoose.model("Dispatch", dispatchSchema);

module.exports = Dispatch;
