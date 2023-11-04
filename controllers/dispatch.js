require('dotenv').config()
const mongoose = require('mongoose')

// create a new dispatch
const createDispatch = async (req, res) => {
    const { dispatch_id, dispatch_name, location, bvn, dispatch_plate_number } = req.body;

    const newDispatch = new Dispatch({
        dispatch_id,
        dispatch_name,
        location,
        bvn,
        dispatch_plate_number
    });
    try {
        await newDispatch.create();
        res.status(200).send('Dispatch added to database successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to add dispatch to database');
    }
};

//  Get all dispatchers

const getAllDispatchers = async (req, res) => {
    try {
        const dispatchers = await Dispatch.findAll();
        res.status(200).json(dispatches);
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to fetch dispatches from database');
    }
};

// Get a specific dispatch by ID

const getDispatchById = async (req, res) => {
    const dispatchId = req.params.id;
    try {
        const dispatch = await Dispatch.findOne({
            dispatch_id: dispatchId
        });
        if (!dispatch) {
            return res.status(404).send('Dispatch not found');
        }
        res.status(200).json(dispatch);
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to fetch dispatch from database');
    }
}

// Update a dispatch by ID

const updateDispatchById = async (req, res) => {
    const dispatchId = req.params.id; // if the dispatch ID is passed in the request params
    const update = req.body; // if the update is sent in the request body

    try {
        const dispatch = await Dispatch.updateOne(
            { dispatch_id: dispatchId },
            update,
            { new: true }
        );
        if (!dispatch) {
            return res.status(404).send('Dispatch not found');
        }
        res.status(200).json(dispatch);
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to update dispatch');
    }
};

// Delete a dispatch by ID

const deleteDispatchById = async (req, res) => {
    const dispatchId = req.params.id;
    try {
        const result = await Dispatch.deleteOne({ _id: dispatchId });
        if (result.deletedCount === 0) {
            return res.status(404).send('Dispatch not found');
        }
        res.status(200).send('Dispatch deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to delete dispatch');
    }
};



module.exports = {
  createDispatch,
  getAllDispatchers,
  getDispatchById,
  updateDispatchById,
  deleteDispatchById
};