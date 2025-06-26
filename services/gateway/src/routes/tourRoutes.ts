import express from "express";
import { getAllTours, createTour } from '../controllers/tourController';

const router = express.Router()

router.route('/').get(getAllTours).post(createTour);

export default router;