const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, 'bill name is required'],
    },
    amount: {
      type: Number,
      required: [true, 'amount is required'],
    },
    dueDate: {
      type: Date,
      required: [true, 'date is required'],
    },
    status: {
      type: String,
      default: 'unpaid',
    },
  },
  { timestamps: true }
);

const billModel = mongoose.model('bill', billSchema);
module.exports = billModel;
