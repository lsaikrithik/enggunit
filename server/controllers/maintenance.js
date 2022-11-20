import Maintenance from "../models/Maintenance.js";


export const createMaintenance = async (req, res, next) => {
  const newMaintenance = new Maintenance(req.body);

  try {
    const savedMaintenance = await newMaintenance.save();
    res.status(200).json(savedMaintenance);
  } catch (err) {
    next(err);
  }
};

export const getMaintenance = async (req, res, next) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id);
    res.status(200).json(maintenance);
  } catch (err) {
    next(err);
  }
};

