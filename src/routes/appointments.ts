import express from 'express';
import joi from 'joi';
import Appointment from '../db/models/appointment';

const router = express.Router();

const createAppointmentSchema = joi.object({
    doctorId: joi.string().guid(),
    name: joi.string().required(),
    // figure out how you want to handle the time
    time: joi.string().required(),
    kind: joi.string().required()
});

// Add a new doctor to the DB.
router.post('/', async (req, res) => {
    // Joi validation.
    try {
        await createAppointmentSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).send('Invalid request');
    }
    // Create the doctor if validation is passed.
    const appointment = await Appointment.createAppointment(req.body);
    // Send back the information about the newly created doctor.
    res.send(appointment);
});

export default router;