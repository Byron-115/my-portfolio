import express from 'express';
import cors from 'cors';
import downloadCvRouter from './routes/download-cv'


const app = express();
app.use(cors());
const PORT = process.env.PORT ?? 4000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/download-cv', downloadCvRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
