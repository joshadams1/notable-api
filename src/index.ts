import express from 'express';
import cors from 'cors';

import doctorRoutes from './routes/doctors';
import appointmentRoutes from './routes/appointments';

import doctorDB from './db/db_connections/doctor_connection';
import appointmentDB from './db/db_connections/appointment_connection';

const app = express();

// Sync databases
doctorDB.sync();
appointmentDB.sync();

// Add middleware
app.use(cors());
app.use(express.json());

// Import routes
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);


app.listen(8000, () => console.log(`Server running on port 8000`));