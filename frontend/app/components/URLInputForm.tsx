import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, FileText } from 'lucide-react'

interface URLInputFormProps {
  url: string
  setUrl: (url: string) => void
  loading: boolean
  error: string
  onSubmit: (e: React.FormEvent) => void
}

export default function URLInputForm({ url, setUrl, loading, error, onSubmit }: URLInputFormProps) {
  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <FileText className="h-6 w-6 text-blue-600" />
          Generate Study Notes
        </CardTitle>
        <CardDescription className="text-gray-600">
          Enter a YouTube video URL to generate AI-powered study notes
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="youtube-url" className="text-sm font-medium text-gray-700">
              YouTube Video URL
            </label>
            <div className="flex gap-3">
              <Input
                id="youtube-url"
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 h-12 text-base border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                disabled={loading}
              />
              <Button 
                type="submit" 
                disabled={loading || !url.trim()}
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <FileText className="h-5 w-5 mr-2" />
                    Generate Notes
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {error && (
            <Alert variant="destructive" className="border-red-200 bg-red-50">
              <AlertDescription className="text-red-800">{error}</AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
