'use client'

import { useYouTubeTranscriptor } from './hooks/useYouTubeTranscriptor'
import Header from './components/Header'
import URLInputForm from './components/URLInputForm'
import LoadingState from './components/LoadingState'
import VideoInformation from './components/VideoInformation'
import StudyNotes from './components/StudyNotes'
import ErrorDisplay from './components/ErrorDisplay'
import Footer from './components/Footer'

export default function YouTubeTranscriptor() {
  const {
    url,
    setUrl,
    loading,
    result,
    error,
    handleSubmit
  } = useYouTubeTranscriptor()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <Header />
        
        <URLInputForm 
          url={url}
          setUrl={setUrl}
          loading={loading}
          error={error}
          onSubmit={handleSubmit}
        />

        {loading && <LoadingState />}

        {result && result.success && result.data && (
          <div className="space-y-8">
            <VideoInformation 
              video={result.data.video}
              timestamp={result.data.timestamp}
            />
            
            <StudyNotes 
              notes={result.data.notes}
              timestamp={result.data.timestamp}
            />
          </div>
        )}

        {result && !result.success && (
          <ErrorDisplay error={result.error || 'Failed to generate notes. Please try again.'} />
        )}

        <Footer />
      </div>
    </div>
  )
}
