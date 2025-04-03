// Require mongoose and travlr from models to get the colletion from the MongoDB database
const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');


// GET method for retrieveing a single trip

const tripFindByCode = async(req, res) => {
    const returnData = await Model
    .find({ 'code' : req.params.tripCode})
    .exec();


    if (!returnData) {
        return res.status(404).json(err);
    }
    else {
        return res.status(200).json(returnData);
    }
}


// GET method request for returning all the trips from the database's 'trips' collection
const tripsList = async(req, res) => {
    const returnData = await Model.find({}).exec();

    if (!returnData) {
        return res.status(404).json(err);
    }
    else {
        return res.status(200).json(returnData);
    }
}

module.exports = {
    tripsList,
    tripFindByCode
};
