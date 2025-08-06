import { Router } from 'express';
import { NotesController } from '../controllers/notesController.js';

const router = Router();
const notesController = new NotesController();

// POST /api/notes/generate
router.post('/generate', notesController.generateNotes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Notes service is running',
    timestamp: new Date().toISOString()
  });
});

export default router;
