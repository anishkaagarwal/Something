import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Hackathon Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect, collaborate, and create amazing projects. The ultimate platform for students, 
          developers, and hackathon organizers.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything you need for hackathons
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>For Participants</CardTitle>
              <CardDescription>
                Create profiles, join events, form teams, and network with other developers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GitHub integration</li>
                <li>• Smart team formation</li>
                <li>• Professional networking</li>
                <li>• Event discovery</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Organizers</CardTitle>
              <CardDescription>
                Manage events, form teams, and communicate with participants seamlessly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Event management dashboard</li>
                <li>• Automated team formation</li>
                <li>• Real-time announcements</li>
                <li>• Participant analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Recruiters & Sponsors</CardTitle>
              <CardDescription>
                Find talent, analyze performance, and connect with the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Advanced candidate search</li>
                <li>• Performance analytics</li>
                <li>• Direct outreach</li>
                <li>• Event insights</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
