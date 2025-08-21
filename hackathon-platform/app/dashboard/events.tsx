'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const events = [
    {
      id: 1,
      title: 'AI Hackathon 2024',
      description: 'Build the next generation of AI-powered applications',
      type: 'public',
      status: 'upcoming',
      startDate: '2024-02-15',
      endDate: '2024-02-17',
      participants: 150,
      maxParticipants: 200,
      location: 'San Francisco, CA',
      prize: '$10,000'
    },
    {
      id: 2,
      title: 'Web3 Buildathon',
      description: 'Create decentralized applications and smart contracts',
      type: 'private',
      status: 'completed',
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      participants: 80,
      maxParticipants: 100,
      location: 'Virtual',
      prize: '$5,000'
    },
    {
      id: 3,
      title: 'Mobile App Challenge',
      description: 'Design and develop innovative mobile applications',
      type: 'public',
      status: 'active',
      startDate: '2024-02-01',
      endDate: '2024-02-03',
      participants: 120,
      maxParticipants: 150,
      location: 'New York, NY',
      prize: '$7,500'
    }
  ]

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || event.status === filterType
    return matchesSearch && matchesFilter
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="secondary">Upcoming</Badge>
      case 'active':
        return <Badge variant="default">Active</Badge>
      case 'completed':
        return <Badge variant="outline">Completed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    return type === 'public' ? 
      <Badge variant="secondary">Public</Badge> : 
      <Badge variant="outline">Private</Badge>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Events</h1>
        <p className="text-gray-600">Discover and join hackathons, or manage your own events</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Button>Create Event</Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                {getStatusBadge(event.status)}
                {getTypeBadge(event.type)}
              </div>
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {event.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span>{event.startDate} - {event.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span>{event.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Participants:</span>
                  <span>{event.participants}/{event.maxParticipants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prize Pool:</span>
                  <span className="font-medium text-green-600">{event.prize}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                {event.status === 'upcoming' && (
                  <Button className="flex-1" size="sm">
                    Join Event
                  </Button>
                )}
                {event.status === 'active' && (
                  <Button className="flex-1" size="sm" variant="outline">
                    View Details
                  </Button>
                )}
                {event.status === 'completed' && (
                  <Button className="flex-1" size="sm" variant="outline">
                    View Results
                  </Button>
                )}
                <Button size="sm" variant="ghost">
                  ⋯
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
