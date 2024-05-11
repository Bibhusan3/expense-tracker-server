const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, 'amount is required'],
    },
    type: {
      type: String,
      required: [true, 'category is required'],
    },
    name: {
      type: String,
      required: [true, 'description is required'],
    },
    date: {
      type: Date,
      required: [true, 'date is required'],
    },
  },
  { timestamps: true }
);

const expenseModel = mongoose.model('expenses', expenseSchema);
module.exports = expenseModel;
