const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    completed: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("tasks", taskSchema);
