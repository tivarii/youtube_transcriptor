import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'

export default function LoadingState() {
  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            <div className="absolute inset-0 h-12 w-12 animate-ping bg-blue-400 rounded-full opacity-20"></div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Processing Your Video</h3>
            <p className="text-gray-600">AI is analyzing the content and generating comprehensive notes...</p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>This may take a few moments</span>
              <span className="animate-pulse">⏳</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
