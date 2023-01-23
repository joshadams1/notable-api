import express from 'express';
import joi from 'joi';
import Appointment from '../db/models/appointment';

const router = express.Router();

const createAppointmentSchema = joi.object({
    doctorId: joi.string().guid(),
    name: joi.string().required(),
    time: joi.string().required(),
    kind: joi.string().required()
});

// Add a new appointment to the DB.
router.post('/', async (req, res) => {
    // Joi validation.
    try {
        await createAppointmentSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).send('Invalid request');
    }
    // Create the appointment if validation is passed.
    const appointment = await Appointment.createAppointment(req.body);
    if (!appointment) {
        return res.status(500).send('Failed to create appointment');
    }
    // Send back the information about the newly created appointment.
    res.send(appointment);
});

export default router;