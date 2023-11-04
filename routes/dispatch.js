const express = require('express')
const router = express.Router()
const {
  createDispatch,
  getAllDispatchers,
  getDispatchById,
  updateDispatchById,
  deleteDispatchById,
} = require('../controllers/dispatch')


// CREATE Dispatch 
router.post("/new-dispatch", createDispatch);

// GET all Dispatch
router.get('/dispatch', getAllDispatchers);

// GET single Dispatch
router.get('/dispatch/:id', getDispatchById);

// UPDATE Dispatch
router.put('/dispatch/:id', updateDispatchById);

// DELETE Dispatch
router.delete('/dispatch/:id', deleteDispatchById);