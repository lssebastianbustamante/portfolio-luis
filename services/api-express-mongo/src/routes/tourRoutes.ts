import express from "express";
import { getAllTours, getTourId } from '../controllers/tourController';

const router = express.Router()

router.route('/').get(getAllTours)
router.route('/:id').get(getTourId)

export default router;