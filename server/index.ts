import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
const PORT = process.env.PORT ?? 4000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/download-cv', (req, res) => {
  const filePath = path.join(__dirname, '../public/assets/Byron_Panimboza_CV.pdf');
  res.download(filePath, 'Byron_Panimboza_CV.pdf', (err) => {
    if (err) console.error('Error downloading file:', err);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
