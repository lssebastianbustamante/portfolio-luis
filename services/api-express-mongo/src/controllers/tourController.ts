import { Request, Response, NextFunction } from "express";
import { TourModel } from "../models/tourModel";
import asyncHandler from "../utils/catchAsync";
import { AppError } from "../utils/appError";

export const getAllTours = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const tours = await TourModel.find();
    res.status(200).json({
      status: "success",
      result: tours.length,
      data: {
        tours,
      },
    });
  }
);

export const getTourId = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const tourFound = await TourModel.findById(id);

    if (!tourFound) {
      return next(new AppError('No tour found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        tour: tourFound,
      }
    })
  }
);
