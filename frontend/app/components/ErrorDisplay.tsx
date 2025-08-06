import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ErrorDisplayProps {
  error: string
}

export default function ErrorDisplay({ error }: ErrorDisplayProps) {
  return (
    <Card className="shadow-lg border-red-200 bg-red-50/50 backdrop-blur-sm">
      <CardContent className="pt-6">
        <Alert variant="destructive" className="border-red-300 bg-red-100">
          <AlertDescription className="text-red-800 font-medium">
            {error || 'Failed to generate notes. Please try again.'}
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
