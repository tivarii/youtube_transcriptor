import { Request, Response } from 'express';
import { YoutubeService } from '../services/youtubeService.js';

export class NotesController {
  private youtubeService: YoutubeService;

  constructor() {
    this.youtubeService = new YoutubeService();
  }

  generateNotes = async (req: Request, res: Response): Promise<void> => {
    try {
      const { url } = req.body;

      // Validate input
      if (!url) {
        res.status(400).json({
          success: false,
          error: 'YouTube URL is required'
        });
        return;
      }

      // Validate YouTube URL format
      const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]+/;
      if (!youtubeUrlPattern.test(url)) {
        res.status(400).json({
          success: false,
          error: 'Invalid YouTube URL format'
        });
        return;
      }

      // Process the video
      const result = await this.youtubeService.processVideo(url);

      res.status(200).json({
        success: true,
        data: {
          notes: result.notes,
          video: {
            url,
            title: result.metadata.title,
            author: result.metadata.author,
            description: result.metadata.description
          },
          timestamp: new Date().toISOString()
        }
      });

    } catch (error) {
      console.error('Error generating notes:', error);
      
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  };
}
