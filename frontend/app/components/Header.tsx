import { Youtube } from 'lucide-react'

export default function Header() {
  return (
    <div className="text-center space-y-6 pt-8">
      <div className="flex items-center justify-center gap-3">
        <div className="bg-white p-3 rounded-2xl shadow-lg">
          <Youtube className="h-10 w-10 text-red-500" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          YouTube Transcriptor
        </h1>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Transform any YouTube video into comprehensive study notes using AI. 
        Simply paste a YouTube URL and get detailed, organized notes in seconds.
      </p>
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <span className="bg-white px-3 py-1 rounded-full shadow-sm">✨ AI-Powered</span>
        <span className="bg-white px-3 py-1 rounded-full shadow-sm">🚀 Fast</span>
        <span className="bg-white px-3 py-1 rounded-full shadow-sm">📚 Comprehensive</span>
      </div>
    </div>
  )
}
