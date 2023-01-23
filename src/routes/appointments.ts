import express from 'express';
import joi from 'joi';
import Appointment from '../db/models/appointment';

const router = express.Router();

const createAppointmentSchema = joi.object({
    username: joi.string().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required()
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
    const appointMent: Appointment = await Appointment.create(req.body);
    // Send back the information about the newly created doctor.
    res.send('test');
});

export default router;