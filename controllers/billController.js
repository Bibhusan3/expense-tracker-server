const billModel = require('../models/billModel');

const getAllBill = async (req, res) => {
  console.log(req.body);
  try {
    const bills = await billModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(bills);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteBill = async (req, res) => {
  try {
    await billModel.findOneAndDelete({
      _id: req.body.billId,
    });
    res.status(200).send('Expense deleted');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const editBill = async (req, res) => {
  try {
    await billModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.status(200).send('Edit successful');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addBill = async (req, res) => {
  try {
    const newExpense = new billModel(req.body);
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBill,
  addBill,
  editBill,
  deleteBill,
};
