const express = require('express');

const {
  addBill,
  getAllBill,
  editBill,
  deleteBill,
} = require('../controllers/billController');

const router = express.Router();

router.post('/add-bill', addBill);

router.post('/edit-bill', editBill);

router.post('/delete-bill', deleteBill);

router.post('/get-bill', getAllBill);

module.exports = router;
