import express from 'express';
import joi from 'joi';
import Doctor from '../db/models/doctor';
import Appointment from '../db/models/appointment';

const router = express.Router();

const createDoctorShema = joi.object({
    username: joi.string().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required()
});

// Grab all doctors
router.get('/', async (req, res) => {
    const doctors: Doctor[] = await Doctor.getAllDoctors();
    res.send(doctors);
});

// Grab doctor by id
router.get('/:id', async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).send('Failed to provide id');
    }
    const doctors: Doctor[] = await Doctor.getAllDoctors();
    res.send(doctors);
});

// Get all appointments for a doctor based on their id.
router.get('/:id/appointments', async (req, res) => {
    const { id } = req?.params;
    if (!id) {
        return res.status(400).send('Failed to provide id')
    }
    const appointments = await Appointment.findAppointmentsByDoctorID(id);
    res.send(appointments);
})

// Add a new doctor to the DB.
router.post('/', async (req, res) => {
    // Joi validation.
    try {
        await createDoctorShema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).send('Invalid request');
    }
    // Create the doctor if validation is passed.
    const newDoctor: Doctor = await Doctor.create(req.body);
    if (!newDoctor) {
        return res.status(500).send('Failed to create doctor');
    }
    // Send back the information about the newly created doctor.
    res.send(newDoctor);
});

export default router;