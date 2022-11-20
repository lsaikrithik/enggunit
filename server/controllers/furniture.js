import Furniture from "../models/Furniture.js";


export const createFurniture = async (req, res, next) => {
  const newFurniture = new Furniture(req.body);

  try {
    const savedFurniture = await newFurniture.save();
    res.status(200).json(savedFurniture);
  } catch (err) {
    next(err);
  }
};
export const updateFurniture = async (req, res, next) => {
  try {
    const updatedFurniture = await Furniture.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFurniture);
  } catch (err) {
    next(err);
  }
};
export const deleteFurniture = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Furniture has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getFurniture = async (req, res, next) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    res.status(200).json(furniture);
  } catch (err) {
    next(err);
  }
};
export const getFurnitures = async (req, res, next) => {
    try {
        const furnitures = await Furniture.find();
        res.status(200).json(furnitures);
      } catch (err) {
        next(err);
      }
    };

