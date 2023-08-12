import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Book } from "lucide-react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen p-4 overflow-hidden'>
      <div className='absolute right-4 top-4'>
        <ModeToggle />
      </div>
      <div className='flex justify-center items-center h-full'>
        <Card className='w-full max-w-lg'>
          <CardHeader>
            <CardTitle>Vite + React + Tailwind + shadcn/ui</CardTitle>
            <CardDescription>Button Example</CardDescription>
          </CardHeader>
          <CardContent className='flex justify-center'>
            <Button className='tabular-nums' onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className='absolute bottom-4 left-0 flex justify-center w-full '>
        <Button className='mr-2' variant="outline" asChild>
          <a href="https://github.com/joriskleiber/joris-kleiber-website/" target="_blank" rel="noreferrer">
            <Book className="mr-2 h-4 w-4" /> Repository
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com/joriskleiber/" target="_blank" rel="noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}

export default App
