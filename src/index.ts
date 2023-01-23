import express from 'express';
import cors from 'cors';

const app = express();

// Add middleware
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    console.log('hello world');
    res.send('hello world');
})

app.listen(8000, () => console.log(`Server running on port 8000`));