import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  duration: {
    type: String,
    required: [true, "A tour must have a duration."],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a group size."],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
    enum: {
      values: ["easy", "medium", "difficulty"],
      message: "Difficulty is either: easy, medium, difficult",
    },
  },
  ratingsAverage: {
    type: Number,
    default: 0,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price."],
  },
  priceDiscount: {
    type: Number,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a cover image."],
  },
  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: {
    type: [Date],
  },
});

export const TourModel = mongoose.model("Tour", TourSchema);
