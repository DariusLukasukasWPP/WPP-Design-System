import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

function App() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 p-10">
      <header className="flex flex-col gap-2">
        <Badge variant="secondary">WPP Enterprise Solutions</Badge>
        <h1 className="font-heading text-4xl font-medium tracking-tight">
          Design System
        </h1>
        <p className="text-muted-foreground">
          Component library built on the WPP brand token layer. Browse the full
          catalogue in Storybook.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            A composed example using the shared tokens.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@wpp.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App
