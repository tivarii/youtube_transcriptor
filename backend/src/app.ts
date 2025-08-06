import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/config.js';
import notesRoutes from './routes/notesRoutes.js';
import { errorHandler, notFoundHandler, requestLogger } from './middleware/errorMiddleware.js';

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: config.corsOrigin,
  credentials: true,
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'YouTube Transcriptor API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});


// API routes
app.use('/api/notes', notesRoutes);

// 404 handler
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`🚀 YouTube Transcriptor API running on port ${PORT}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🌐 CORS origin: ${config.corsOrigin}`);
});

export default app;
