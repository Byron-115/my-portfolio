import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    try{
        const filePath = path.join(process.cwd(), 'public', 'assets', 'Byron_Panimboza_CV.pdf');

        if(!fs.existsSync(filePath)) {
            console.error('[download-cv] File not found:', filePath);
            return res.status(404).json({ error: 'File not found' });
        }

        console.log('[download-cv] Serving file:', filePath);
        res.download(filePath, 'Byron_Panimboza_CV.pdf', (err) => {
            if(err) {
                console.error('[download-cv] Download error:', err);
                if (!res.headersSent) res.status(500).json({ error: 'Download error' });
            }
        });
    } catch (err) {
        console.error('[download-cv] unexpected error', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;