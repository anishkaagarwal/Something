'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  UserPlus, 
  Clock, 
  Check, 
  X, 
  MessageSquare, 
  MapPin,
  Star,
  Search,
  Filter
} from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Connection {
  id: number
  name: string
  role: string
  avatar: string
  location: string
  skills: string[]
  hackathonWins: number
  mutualConnections: number
  bio: string
  requestedAt?: string
  connectedAt?: string
  lastActive?: string
  company?: string
  experience?: string
}

export default function ConnectionsPage() {
  // Mock data for pending requests
  const [pendingRequests, setPendingRequests] = useState<Connection[]>([
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Frontend Developer',
      avatar: '/avatar1.jpg',
      location: 'San Francisco, CA',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      hackathonWins: 3,
      mutualConnections: 5,
      bio: 'Passionate frontend developer with expertise in modern web technologies. Love building user-friendly interfaces.',
      requestedAt: '2 hours ago',
      company: 'TechCorp',
      experience: '4 years'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Data Scientist',
      avatar: '/avatar2.jpg',
      location: 'Seattle, WA',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
      hackathonWins: 7,
      mutualConnections: 3,
      bio: 'Data scientist specializing in AI/ML solutions. Experienced in predictive modeling and data visualization.',
      requestedAt: '5 hours ago',
      company: 'DataTech Inc',
      experience: '6 years'
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      role: 'UI/UX Designer',
      avatar: '/avatar3.jpg',
      location: 'Austin, TX',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      hackathonWins: 4,
      mutualConnections: 2,
      bio: 'Creative designer focused on user-centered design. Love turning complex problems into simple solutions.',
      requestedAt: '1 day ago',
      company: 'Design Studio',
      experience: '5 years'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'DevOps Engineer',
      avatar: '/avatar4.jpg',
      location: 'New York, NY',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      hackathonWins: 2,
      mutualConnections: 4,
      bio: 'DevOps engineer passionate about automation and cloud infrastructure. Building scalable systems.',
      requestedAt: '2 days ago',
      company: 'CloudFlow',
      experience: '7 years'
    }
  ])

  // Mock data for accepted connections
  const [acceptedConnections, setAcceptedConnections] = useState<Connection[]>([
    {
      id: 5,
      name: 'David Kim',
      role: 'Full Stack Developer',
      avatar: '/avatar5.jpg',
      location: 'Los Angeles, CA',
      skills: ['Node.js', 'React', 'MongoDB', 'GraphQL'],
      hackathonWins: 6,
      mutualConnections: 8,
      bio: 'Full stack developer with a passion for clean code and scalable architectures.',
      connectedAt: '3 weeks ago',
      lastActive: '2 days ago',
      company: 'StartupXYZ',
      experience: '5 years'
    },
    {
      id: 6,
      name: 'Maria Garcia',
      role: 'Product Manager',
      avatar: '/avatar6.jpg',
      location: 'Chicago, IL',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research'],
      hackathonWins: 2,
      mutualConnections: 6,
      bio: 'Product manager focused on bringing innovative ideas to life. Bridge between tech and business.',
      connectedAt: '1 month ago',
      lastActive: '1 day ago',
      company: 'InnovateTech',
      experience: '8 years'
    },
    {
      id: 7,
      name: 'James Park',
      role: 'Backend Developer',
      avatar: '/avatar7.jpg',
      location: 'Boston, MA',
      skills: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      hackathonWins: 5,
      mutualConnections: 4,
      bio: 'Backend developer specializing in high-performance APIs and database optimization.',
      connectedAt: '2 months ago',
      lastActive: '3 hours ago',
      company: 'DataFlow Inc',
      experience: '6 years'
    },
    {
      id: 8,
      name: 'Lisa Zhang',
      role: 'Mobile Developer',
      avatar: '/avatar8.jpg',
      location: 'Portland, OR',
      skills: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
      hackathonWins: 4,
      mutualConnections: 7,
      bio: 'Mobile developer creating beautiful cross-platform applications. iOS and Android specialist.',
      connectedAt: '3 months ago',
      lastActive: '1 week ago',
      company: 'MobileFirst',
      experience: '4 years'
    },
    {
      id: 9,
      name: 'Ryan Johnson',
      role: 'Cybersecurity Specialist',
      avatar: '/avatar9.jpg',
      location: 'Washington, DC',
      skills: ['Penetration Testing', 'Network Security', 'CISSP', 'Forensics'],
      hackathonWins: 3,
      mutualConnections: 2,
      bio: 'Cybersecurity expert protecting digital assets. Specializing in threat detection and prevention.',
      connectedAt: '4 months ago',
      lastActive: '5 days ago',
      company: 'SecureNet',
      experience: '9 years'
    }
  ])

  // Mock data for suggested connections
  const [suggestedConnections, setSuggestedConnections] = useState<Connection[]>([
    {
      id: 10,
      name: 'Priya Patel',
      role: 'AI/ML Engineer',
      avatar: '/avatar10.jpg',
      location: 'Seattle, WA',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
      hackathonWins: 8,
      mutualConnections: 3,
      bio: 'AI engineer specializing in deep learning and computer vision. Building the future of intelligent systems.',
      company: 'AI Innovations',
      experience: '5 years'
    },
    {
      id: 11,
      name: 'Carlos Mendez',
      role: 'Cloud Architect',
      avatar: '/avatar11.jpg',
      location: 'Austin, TX',
      skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Serverless'],
      hackathonWins: 6,
      mutualConnections: 5,
      bio: 'Cloud architect designing scalable and resilient infrastructure solutions. Passionate about automation.',
      company: 'CloudScale',
      experience: '7 years'
    },
    {
      id: 12,
      name: 'Sophie Anderson',
      role: 'Game Developer',
      avatar: '/avatar12.jpg',
      location: 'Los Angeles, CA',
      skills: ['Unity', 'C#', 'Unreal Engine', '3D Modeling', 'Game Design'],
      hackathonWins: 5,
      mutualConnections: 2,
      bio: 'Game developer creating immersive experiences. Specializing in indie games and VR applications.',
      company: 'GameStudio Pro',
      experience: '4 years'
    },
    {
      id: 13,
      name: 'Ahmed Hassan',
      role: 'Blockchain Developer',
      avatar: '/avatar13.jpg',
      location: 'Miami, FL',
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3', 'DeFi'],
      hackathonWins: 4,
      mutualConnections: 4,
      bio: 'Blockchain developer building decentralized applications. Expert in DeFi protocols and smart contracts.',
      company: 'BlockTech Solutions',
      experience: '6 years'
    },
    {
      id: 14,
      name: 'Nina Kowalski',
      role: 'Data Engineer',
      avatar: '/avatar14.jpg',
      location: 'Denver, CO',
      skills: ['Apache Spark', 'Hadoop', 'Kafka', 'Python', 'SQL', 'ETL'],
      hackathonWins: 7,
      mutualConnections: 6,
      bio: 'Data engineer building robust data pipelines and infrastructure. Passionate about big data technologies.',
      company: 'DataWorks Inc',
      experience: '8 years'
    },
    {
      id: 15,
      name: 'Kevin O\'Brien',
      role: 'Frontend Architect',
      avatar: '/avatar15.jpg',
      location: 'Portland, OR',
      skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Performance', 'Accessibility'],
      hackathonWins: 9,
      mutualConnections: 7,
      bio: 'Frontend architect focused on building scalable, performant, and accessible web applications.',
      company: 'WebCraft',
      experience: '10 years'
    }
  ])

  // Handle accepting a connection request
  const handleAccept = (connectionId: number) => {
    const requestToAccept = pendingRequests.find(req => req.id === connectionId)
    if (requestToAccept) {
      // Remove from pending requests
      setPendingRequests(prev => prev.filter(req => req.id !== connectionId))
      
      // Add to accepted connections
      const newConnection = {
        ...requestToAccept,
        connectedAt: 'Just now',
        lastActive: 'Online',
        requestedAt: undefined
      }
      setAcceptedConnections(prev => [newConnection, ...prev])
      
      console.log('Accepted connection:', newConnection)
      alert(`You are now connected with ${requestToAccept.name}!`)
    }
  }

  // Handle rejecting a connection request
  const handleReject = (connectionId: number) => {
    const requestToReject = pendingRequests.find(req => req.id === connectionId)
    if (requestToReject) {
      setPendingRequests(prev => prev.filter(req => req.id !== connectionId))
      console.log('Rejected connection:', requestToReject)
      alert(`Connection request from ${requestToReject.name} has been rejected.`)
    }
  }

  // Handle sending a message (mock)
  const handleSendMessage = (connection: Connection) => {
    console.log('Opening message to:', connection)
    alert(`Opening message conversation with ${connection.name}`)
  }

  // Handle connecting with suggested user (mock)
  const handleConnect = (suggestedUser: Connection) => {
    console.log('Sending connection request to:', suggestedUser)
    alert(`Connection request sent to ${suggestedUser.name}! They will be notified.`)
    
    // In a real app, this would send the request to the backend
    // For now, we'll just show the alert
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Connections</h1>
        <p className="text-gray-600 text-lg">
          Manage your professional network and connect with fellow developers.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search connections..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Find People
          </Button>
        </div>
      </div>

      {/* Tabs for different connection types */}
      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Pending ({pendingRequests.length})</span>
          </TabsTrigger>
          <TabsTrigger value="accepted" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Connected ({acceptedConnections.length})</span>
          </TabsTrigger>
          <TabsTrigger value="suggested" className="flex items-center space-x-2">
            <UserPlus className="h-4 w-4" />
            <span>Suggested ({suggestedConnections.length})</span>
          </TabsTrigger>
        </TabsList>

        {/* Pending Requests Tab */}
        <TabsContent value="pending">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Pending Requests</h2>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {pendingRequests.length} pending
              </Badge>
            </div>

            {pendingRequests.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Pending Requests</h3>
                  <p className="text-gray-600">You&apos;re all caught up! No new connection requests at the moment.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pendingRequests.map((request) => (
                  <Card key={request.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={request.avatar} alt={request.name} />
                          <AvatarFallback>
                            {request.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{request.name}</CardTitle>
                          <p className="text-sm text-gray-600 mb-1">{request.role}</p>
                          <p className="text-sm text-gray-500">{request.company} • {request.experience}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-700 line-clamp-2">{request.bio}</p>
                      
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{request.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          <span>{request.hackathonWins} wins</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{request.mutualConnections} mutual connections</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Requested {request.requestedAt}</span>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1">
                        {request.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {request.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{request.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2 pt-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleAccept(request.id)}
                        >
                          <Check className="h-4 w-4 mr-2" />
                          Accept
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleReject(request.id)}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        {/* Accepted Connections Tab */}
        <TabsContent value="accepted">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Your Connections</h2>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {acceptedConnections.length} connected
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acceptedConnections.map((connection) => (
                <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={connection.avatar} alt={connection.name} />
                        <AvatarFallback>
                          {connection.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{connection.name}</CardTitle>
                        <p className="text-sm text-gray-600 mb-1">{connection.role}</p>
                        <p className="text-sm text-gray-500">{connection.company} • {connection.experience}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700 line-clamp-2">{connection.bio}</p>
                    
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{connection.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{connection.hackathonWins} wins</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{connection.mutualConnections} mutual</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Active {connection.lastActive}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      Connected {connection.connectedAt}
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {connection.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {connection.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{connection.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleSendMessage(connection)}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Suggested Connections Tab */}
        <TabsContent value="suggested">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Suggested Connections</h2>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {suggestedConnections.length} suggestions
              </Badge>
            </div>
            <p className="text-gray-600 text-sm">
              Based on your skills, interests, and mutual connections. These developers could be great collaborators!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedConnections.map((suggestedUser) => (
                <Card key={suggestedUser.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={suggestedUser.avatar} alt={suggestedUser.name} />
                        <AvatarFallback>
                          {suggestedUser.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{suggestedUser.name}</CardTitle>
                        <p className="text-sm text-gray-600 mb-1">{suggestedUser.role}</p>
                        <p className="text-sm text-gray-500">{suggestedUser.company} • {suggestedUser.experience}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700 line-clamp-2">{suggestedUser.bio}</p>
                    
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{suggestedUser.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{suggestedUser.hackathonWins} wins</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{suggestedUser.mutualConnections} mutual</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Recently active</span>
                      </div>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {suggestedUser.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {suggestedUser.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{suggestedUser.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleConnect(suggestedUser)}
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
