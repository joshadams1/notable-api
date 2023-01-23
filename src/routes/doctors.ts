import express from 'express';
import Doctor from '../models/doctor';

const router = express.Router();

// Grab all doctors
router.get('/', async (req, res) => {
    const doctors: Doctor[] = await Doctor.getAllDoctors();
    res.send(doctors);
});

export default router;