//importing model 
const Activity = require('../models/activity.model.js');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find(); //querying the DB for the documents
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addActivity = async (req, res) => {
  const activity = new Activity(req.body); //creating a new doc from the post req coming form the client
  try {
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
