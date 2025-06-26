import { Request, Response, NextFunction } from "express";
import { TourModel } from "../models/tourModel";
import asyncHandler from "../utils/catchAsync";
import { connect, JSONCodec } from "nats";

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

export const createTour = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const tour = await TourModel.create(req.body);
    const nc = await connect({
      servers: `${process.env.NATS_HOST}:${process.env.NATS_PORT}`,
    });

    const jsc = JSONCodec();

    await nc.publish("tour.add", jsc.encode(tour));

    return res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  }
);
