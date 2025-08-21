'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function SponsorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const organizers = [
    {
      id: 1,
      name: 'Tech University',
      type: 'University',
      location: 'San Francisco, CA',
      events: 12,
      totalParticipants: 2500,
      avgEngagement: 85,
      bestProjects: 8,
      avatar: '/org1.jpg',
      description: 'Leading university organizing innovative hackathons for students',
      categories: ['AI/ML', 'Web3', 'Mobile', 'Sustainability']
    },
    {
      id: 2,
      name: 'Innovation Hub',
      type: 'Company',
      location: 'New York, NY',
      events: 8,
      totalParticipants: 1800,
      avgEngagement: 92,
      bestProjects: 12,
      avatar: '/org2.jpg',
      description: 'Corporate innovation center hosting cutting-edge hackathons',
      categories: ['FinTech', 'Healthcare', 'E-commerce', 'IoT']
    },
    {
      id: 3,
      name: 'Startup Accelerator',
      type: 'Accelerator',
      location: 'Austin, TX',
      events: 15,
      totalParticipants: 3200,
      avgEngagement: 78,
      bestProjects: 15,
      avatar: '/org3.jpg',
      description: 'Startup accelerator fostering entrepreneurial spirit through hackathons',
      categories: ['Startups', 'Social Impact', 'Green Tech', 'EdTech']
    },
    {
      id: 4,
      name: 'Developer Community',
      type: 'Community',
      location: 'Seattle, WA',
      events: 20,
      totalParticipants: 4100,
      avgEngagement: 88,
      bestProjects: 22,
      avatar: '/org4.jpg',
      description: 'Vibrant developer community organizing regular hackathons',
      categories: ['Open Source', 'Cloud', 'DevOps', 'Security']
    }
  ]

  const filteredOrganizers = organizers.filter(organizer => {
    const matchesSearch = organizer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         organizer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         organizer.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = filterType === 'all' || organizer.type.toLowerCase() === filterType.toLowerCase()
    return matchesSearch && matchesType
  })

  const handleContact = (id: number) => {
    // TODO: Implement contact logic
    console.log('Contacting organizer:', id)
  }

  const handleViewAnalytics = (id: number) => {
    // TODO: Implement analytics view logic
    console.log('Viewing analytics for:', id)
  }

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return 'text-green-600'
    if (engagement >= 80) return 'text-blue-600'
    if (engagement >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sponsor Dashboard</h1>
        <p className="text-gray-600">Discover organizers and analyze event performance for sponsorship opportunities</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search organizers by name, description, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="university">University</SelectItem>
              <SelectItem value="company">Company</SelectItem>
              <SelectItem value="accelerator">Accelerator</SelectItem>
              <SelectItem value="community">Community</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Organizers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOrganizers.map((organizer) => (
          <Card key={organizer.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={organizer.avatar} />
                  <AvatarFallback>{organizer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{organizer.name}</CardTitle>
                    <Badge variant="outline">{organizer.type}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {organizer.description}
                  </CardDescription>
                  <p className="text-sm text-gray-600 mt-1">{organizer.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">Categories</h4>
                <div className="flex flex-wrap gap-1">
                  {organizer.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{organizer.events}</p>
                  <p className="text-gray-600">Events</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{organizer.totalParticipants.toLocaleString()}</p>
                  <p className="text-gray-600">Participants</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className={`font-medium ${getEngagementColor(organizer.avgEngagement)}`}>
                    {organizer.avgEngagement}%
                  </p>
                  <p className="text-gray-600">Engagement</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{organizer.bestProjects}</p>
                  <p className="text-gray-600">Best Projects</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleContact(organizer.id)}
                >
                  Contact Organizer
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleViewAnalytics(organizer.id)}
                >
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrganizers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No organizers found matching your criteria.</p>
        </div>
      )}

      {/* Sponsorship Analytics */}
      <div className="mt-12 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Sponsorship Performance</CardTitle>
            <CardDescription>Overview of your current sponsorship activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5</div>
                <p className="text-sm text-gray-600">Active Sponsorships</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$45,000</div>
                <p className="text-sm text-gray-600">Total Investment</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2,400</div>
                <p className="text-sm text-gray-600">Reach</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">85%</div>
                <p className="text-sm text-gray-600">ROI</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Events</CardTitle>
            <CardDescription>Events with the highest engagement and impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">AI Hackathon 2024</h4>
                  <p className="text-sm text-gray-600">Tech University • 450 participants</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">92% engagement</p>
                  <p className="text-sm text-gray-600">$15,000 sponsorship</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Web3 Buildathon</h4>
                  <p className="text-sm text-gray-600">Innovation Hub • 320 participants</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">88% engagement</p>
                  <p className="text-sm text-gray-600">$12,000 sponsorship</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Mobile App Challenge</h4>
                  <p className="text-sm text-gray-600">Developer Community • 280 participants</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">85% engagement</p>
                  <p className="text-sm text-gray-600">$8,000 sponsorship</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
