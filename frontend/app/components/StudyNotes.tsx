import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from 'lucide-react'

interface StudyNotesProps {
  notes: string
  timestamp: string
}

export default function StudyNotes({ notes, timestamp }: StudyNotesProps) {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  const formatNotesForDisplay = (notes: string) => {
    // Convert markdown-like formatting to HTML
    return notes
      // Convert headers
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
      
      // Convert bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      
      // Convert italic text
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      // Convert bullet points
      .replace(/^\* (.*$)/gm, '<li>$1</li>')
      .replace(/^    \* (.*$)/gm, '<li class="ml-4">$1</li>')
      
      // Convert code blocks (inline)
      .replace(/`(.*?)`/g, '<code>$1</code>')
      
      // Convert line breaks to paragraphs
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.includes('<li>')) {
          return `<ul class="list-disc ml-6 space-y-1">${paragraph}</ul>`
        }
        if (paragraph.includes('<h')) {
          return paragraph
        }
        if (paragraph.trim()) {
          return `<p>${paragraph}</p>`
        }
        return ''
      })
      .join('')
      
      // Clean up any remaining newlines in lists
      .replace(/\n/g, '')
      .replace(/<\/li><li/g, '</li><li')
  }

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <FileText className="h-6 w-6 text-green-600" />
          Generated Study Notes
        </CardTitle>
        <CardDescription className="text-gray-600">
          AI-generated comprehensive notes from the video content
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="bg-white rounded-b-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                📚 Study Notes
              </Badge>
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                Generated on {formatDate(timestamp)}
              </span>
            </div>
          </div>
          <div className="p-8">
            <div 
              className="prose prose-lg prose-gray max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-3xl prose-h1:mb-6 prose-h1:pb-3 prose-h1:border-b-2 prose-h1:border-blue-200 prose-h1:text-blue-900
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:text-blue-800 prose-h2:border-l-4 prose-h2:border-blue-500 prose-h2:pl-4 prose-h2:bg-blue-50 prose-h2:py-2 prose-h2:rounded-r-lg
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-800 prose-h3:font-semibold
                prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold prose-h4:text-gray-700
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base
                prose-strong:text-gray-900 prose-strong:font-bold prose-strong:bg-yellow-100 prose-strong:px-1 prose-strong:rounded
                prose-em:text-blue-700 prose-em:font-semibold prose-em:not-italic
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-base
                prose-li:marker:text-blue-600 prose-li:marker:text-lg
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:border
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{
                __html: formatNotesForDisplay(notes)
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
