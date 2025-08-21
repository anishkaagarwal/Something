'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ConnectionsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const connections = [
    {
      id: 1,
      name: 'Jane Smith',
      role: 'Full-stack Developer',
      company: 'Tech Corp',
      skills: ['React', 'Node.js', 'Python'],
      mutualConnections: 5,
      avatar: '/avatar2.jpg',
      status: 'connected'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      role: 'AI/ML Engineer',
      company: 'AI Startup',
      skills: ['Python', 'TensorFlow', 'PyTorch'],
      mutualConnections: 3,
      avatar: '/avatar3.jpg',
      status: 'connected'
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      role: 'Frontend Developer',
      company: 'Design Studio',
      skills: ['React', 'Vue.js', 'TypeScript'],
      mutualConnections: 7,
      avatar: '/avatar4.jpg',
      status: 'connected'
    }
  ]

  const pendingRequests = [
    {
      id: 4,
      name: 'Alex Chen',
      role: 'Mobile Developer',
      company: 'App Studio',
      skills: ['iOS', 'Swift', 'React Native'],
      mutualConnections: 2,
      avatar: '/avatar6.jpg'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'UX Designer',
      company: 'Creative Agency',
      skills: ['Figma', 'Sketch', 'User Research'],
      mutualConnections: 4,
      avatar: '/avatar7.jpg'
    }
  ]

  const suggestions = [
    {
      id: 6,
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'Cloud Solutions',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      mutualConnections: 6,
      avatar: '/avatar8.jpg',
      reason: 'Complementary skills for your projects'
    },
    {
      id: 7,
      name: 'Emma Davis',
      role: 'Data Scientist',
      company: 'Analytics Inc',
      skills: ['Python', 'SQL', 'Machine Learning'],
      mutualConnections: 8,
      avatar: '/avatar9.jpg',
      reason: 'Similar tech stack and interests'
    }
  ]

  const filteredConnections = connections.filter(connection =>
    connection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    connection.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    connection.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleConnect = (id: number) => {
    // TODO: Implement connection request logic
    console.log('Sending connection request to:', id)
  }

  const handleAccept = (id: number) => {
    // TODO: Implement accept connection logic
    console.log('Accepting connection from:', id)
  }

  const handleDecline = (id: number) => {
    // TODO: Implement decline connection logic
    console.log('Declining connection from:', id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Connections</h1>
        <p className="text-gray-600">Build your professional network and discover new collaborators</p>
      </div>

      <Tabs defaultValue="connections" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="connections">My Network ({connections.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingRequests.length})</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions ({suggestions.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="connections" className="space-y-6">
          {/* Search */}
          <div className="mb-6">
            <Input
              placeholder="Search connections by name, role, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          {/* Connections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConnections.map((connection) => (
              <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={connection.avatar} />
                    <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{connection.name}</CardTitle>
                  <CardDescription>{connection.role}</CardDescription>
                  <p className="text-sm text-gray-600">{connection.company}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {connection.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      {connection.mutualConnections} mutual connections
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" variant="outline">
                      Message
                    </Button>
                    <Button size="sm" variant="ghost">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingRequests.map((request) => (
              <Card key={request.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={request.avatar} />
                    <AvatarFallback>{request.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{request.name}</CardTitle>
                  <CardDescription>{request.role}</CardDescription>
                  <p className="text-sm text-gray-600">{request.company}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {request.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      {request.mutualConnections} mutual connections
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleAccept(request.id)}
                    >
                      Accept
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDecline(request.id)}
                    >
                      Decline
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((suggestion) => (
              <Card key={suggestion.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={suggestion.avatar} />
                    <AvatarFallback>{suggestion.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{suggestion.name}</CardTitle>
                  <CardDescription>{suggestion.role}</CardDescription>
                  <p className="text-sm text-gray-600">{suggestion.company}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {suggestion.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      {suggestion.mutualConnections} mutual connections
                    </p>
                    <p className="text-xs text-blue-600 mt-1">{suggestion.reason}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleConnect(suggestion.id)}
                    >
                      Connect
                    </Button>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
