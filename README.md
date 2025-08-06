# 🎬 YouTube Transcriptor

> Transform any YouTube video into comprehensive AI-powered study notes

A modern full-stack application that leverages AI to generate detailed, well-structured study notes from YouTube videos. Built with Next.js, Express.js, and powered by Google's Generative AI.

![YouTube Transcriptor Demo](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

## ✨ Features

- 🤖 **AI-Powered Notes**: Generate comprehensive study notes using Google's Gemini AI
- 🎯 **Smart Formatting**: Automatically formats notes with headers, bullet points, and highlights
- 📱 **Responsive Design**: Beautiful, modern UI that works on all devices
- ⚡ **Real-time Processing**: Fast video analysis and note generation
- 🔗 **Video Metadata**: Displays video title, author, description, and timestamps
- 🎨 **Professional Styling**: Glass-morphism design with smooth animations
- 📝 **Markdown Support**: Rich text formatting for better readability
- 🔄 **Modular Architecture**: Clean, maintainable codebase

## 🏗️ Architecture

```
youtube-transcriptor/
├── frontend/                 # Next.js Frontend
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript definitions
│   │   └── page.tsx        # Main application page
│   └── components/ui/      # Shadcn/ui components
│
└── backend/                 # Express.js API
    ├── src/
    │   ├── config/         # Environment configuration
    │   ├── controllers/    # API route handlers
    │   ├── middleware/     # Express middleware
    │   ├── routes/        # API route definitions
    │   ├── services/      # Business logic
    │   └── app.ts         # Express application
    └── dist/              # Compiled JavaScript
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Generative AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/youtube-transcriptor.git
   cd youtube-transcriptor
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` files:

   **Backend** (`backend/.env`):
   ```env
   GOOGLE_GENAI_API_KEY=your_google_api_key_here
   PORT=3001
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

   **Frontend** (`frontend/.env.local`):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. **Get Google AI API Key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Add it to your backend `.env` file

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend application**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

1. **Enter YouTube URL**: Paste any YouTube video URL into the input field
2. **Generate Notes**: Click "Generate Notes" to start AI processing
3. **View Results**: Get comprehensive study notes with:
   - Main concepts and key points
   - Important definitions and methodologies
   - Organized headings and subheadings
   - Critical insights and examples
   - Summary of main takeaways

### Supported URL Formats
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `http://youtube.com/watch?v=VIDEO_ID`

## 📚 API Documentation

### Endpoints

#### `POST /api/notes/generate`
Generate study notes from a YouTube video.

**Request Body:**
```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

**Response:**
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

#### `GET /health`
Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "YouTube Transcriptor API is running",
  "version": "1.0.0",
  "timestamp": "2025-08-07T10:30:00.000Z"
}
```

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful UI components
- **Lucide React** - Modern icon library

### Backend
- **Express.js** - Fast, minimalist web framework
- **TypeScript** - Type-safe JavaScript
- **LangChain** - AI/ML framework for LLMs
- **Google Generative AI** - Gemini AI model
- **CORS & Helmet** - Security middleware

## 🔧 Development

### Project Scripts

**Backend:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

**Frontend:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Adding New Features

1. **Backend**: Add new routes in `src/routes/`, controllers in `src/controllers/`, and services in `src/services/`
2. **Frontend**: Create components in `app/components/`, hooks in `app/hooks/`, and types in `app/types/`

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📦 Deployment

### Backend Deployment (Railway/Render/Vercel)

1. Connect your repository
2. Set environment variables
3. Deploy from `backend/` directory

### Frontend Deployment (Vercel/Netlify)

1. Connect your repository
2. Set build directory to `frontend/`
3. Add environment variables
4. Deploy

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Add tests for new features
- Update documentation as needed
- Ensure code passes linting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google AI** for providing the Generative AI API
- **LangChain** for the YouTube document loader
- **Shadcn/ui** for the beautiful UI components
- **Vercel** for the Next.js framework

## 📞 Support

If you have any questions or need help:

1. Check the [Issues](https://github.com/yourusername/youtube-transcriptor/issues) page
2. Create a new issue with detailed information
3. Join our [Discussions](https://github.com/yourusername/youtube-transcriptor/discussions)

---

<div align="center">
  <p>Made with ❤️ for students and learners everywhere</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>