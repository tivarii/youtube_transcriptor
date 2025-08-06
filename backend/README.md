# YouTube Transcriptor API

A REST API for generating study notes from YouTube videos using AI.

## Endpoints

### POST /api/notes/generate

Generate comprehensive study notes from a YouTube video.

#### Request Body
```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "notes": "Generated study notes content...",
    "video": {
      "url": "https://www.youtube.com/watch?v=VIDEO_ID",
      "title": "Video Title",
      "author": "Channel Name",
      "description": "Video description..."
    },
    "timestamp": "2025-08-07T10:30:00.000Z"
  }
}
```

#### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "timestamp": "2025-08-07T10:30:00.000Z"
}
```

### GET /api/notes/health

Health check endpoint for the notes service.

#### Response
```json
{
  "success": true,
  "message": "Notes service is running",
  "timestamp": "2025-08-07T10:30:00.000Z"
}
```

### GET /health

Main health check endpoint.

#### Response
```json
{
  "success": true,
  "message": "YouTube Transcriptor API is running",
  "version": "1.0.0",
  "timestamp": "2025-08-07T10:30:00.000Z"
}
```

## Environment Variables

Create a `.env` file in the backend directory with:

```
GOOGLE_GENAI_API_KEY=your_google_api_key_here
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## Running the API

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app.ts                 # Express app configuration
├── index.ts              # Entry point
├── config/
│   └── config.ts         # Environment configuration
├── controllers/
│   └── notesController.ts # API logic
├── middleware/
│   └── errorMiddleware.ts # Error handling
├── routes/
│   └── notesRoutes.ts    # Route definitions
└── services/
    └── youtubeService.ts # YouTube processing logic
```
