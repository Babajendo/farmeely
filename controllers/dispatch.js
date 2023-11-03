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
        await newDispatch.save();
        res.status(200).send('Dispatch added to database successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to add dispatch to database');
    }
};