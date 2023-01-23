import express from 'express';
import cors from 'cors';

import doctorsRoute from './routes/doctors';

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
app.use('/doctors', doctorsRoute);

app.listen(8000, () => console.log(`Server running on port 8000`));