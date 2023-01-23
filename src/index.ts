import express from 'express';
import cors from 'cors';

import doctors from './routes/doctors';

const app = express();

// Add middleware
app.use(cors());
app.use(express.json());

app.listen(8000, () => console.log(`Server running on port 8000`));