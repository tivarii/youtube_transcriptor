import { useState } from 'react'

interface VideoData {
  url: string
  title: string
  author: string
  description: string
}

interface NotesResponse {
  success: boolean
  data?: {
    notes: string
    video: VideoData
    timestamp: string
  }
  error?: string
  timestamp: string
}

export function useYouTubeTranscriptor() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<NotesResponse | null>(null)
  const [error, setError] = useState('')

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/
    return youtubeRegex.test(url)
  }

  const generateNotes = async (videoUrl: string) => {
    if (!videoUrl.trim()) {
      setError('Please enter a YouTube URL')
      return
    }

    if (!isValidYouTubeUrl(videoUrl)) {
      setError('Please enter a valid YouTube URL')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl.trim() }),
      })

      const data: NotesResponse = await response.json()
      setResult(data)

      if (!data.success) {
        setError(data.error || 'Failed to generate notes')
      }
    } catch (err) {
      setError('Network error. Please check if the API is running.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await generateNotes(url)
  }

  const reset = () => {
    setUrl('')
    setResult(null)
    setError('')
    setLoading(false)
  }

  return {
    url,
    setUrl,
    loading,
    result,
    error,
    handleSubmit,
    generateNotes,
    reset,
    isValidYouTubeUrl
  }
}
