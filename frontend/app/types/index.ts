export interface VideoData {
  url: string
  title: string
  author: string
  description: string
}

export interface NotesResponse {
  success: boolean
  data?: {
    notes: string
    video: VideoData
    timestamp: string
  }
  error?: string
  timestamp: string
}

export interface YouTubeTranscriptorState {
  url: string
  loading: boolean
  result: NotesResponse | null
  error: string
}
