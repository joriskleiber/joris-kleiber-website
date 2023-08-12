import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
    </div>
  )
}

export default App
