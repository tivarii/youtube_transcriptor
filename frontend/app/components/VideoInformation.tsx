import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Youtube, User, Calendar, ExternalLink, FileText } from 'lucide-react'

interface VideoData {
  url: string
  title: string
  author: string
  description: string
}

interface VideoInformationProps {
  video: VideoData
  timestamp: string
}

export default function VideoInformation({ video, timestamp }: VideoInformationProps) {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <Youtube className="h-6 w-6 text-red-500" />
          Video Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
            {video.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <User className="h-4 w-4" />
              <span className="font-medium">{video.author}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(timestamp)}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
              YouTube Video
            </Badge>
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium hover:underline transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              View Original
            </a>
          </div>
        </div>
        
        {video.description && (
          <div className="mt-6">
            <Separator className="my-4" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Video Description
              </h4>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
