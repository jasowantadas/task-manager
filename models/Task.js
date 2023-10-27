const mongoose = require("mongoose");
//type , required ,trim ,maxLength are an example of data validation
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name cant be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
