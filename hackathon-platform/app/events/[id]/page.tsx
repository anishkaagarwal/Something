'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  Clock, 
  User, 
  MessageSquare, 
  Bell,
  Plus,
  Star
} from 'lucide-react'
import Link from 'next/link'

interface Participant {
  id: number
  name: string
  role: string
  avatar: string
  skills: string[]
  hackathonWins: number
  location: string
  team?: string
  joinedAt: string
}

interface Announcement {
  id: number
  title: string
  content: string
  author: string
  timestamp: string
  priority: 'low' | 'medium' | 'high'
  category: string
}

interface Event {
  id: number
  title: string
  description: string
  organizer: string
  organizerAvatar: string
  type: 'public' | 'private'
  date: string
  startTime: string
  endTime: string
  location: string
  participants: number
  maxParticipants: number
  prize: string
  categories: string[]
  status: 'upcoming' | 'active' | 'completed' | 'draft'
  requirements: string[]
  schedule: Array<{
    day: string
    events: Array<{
      time: string
      activity: string
      description: string
    }>
  }>
  prizes: Array<{
    place: string
    amount: string
    description: string
  }>
}

export default function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const [eventId, setEventId] = useState<string>('')
  const [event, setEvent] = useState<Event | null>(null)
  const [participants, setParticipants] = useState<Participant[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  useEffect(() => {
    const extractId = async () => {
      const resolvedParams = await params
      setEventId(resolvedParams.id)
    }
    extractId()
  }, [params])

  useEffect(() => {
    if (eventId) {
      // Mock event data - in real app this would come from API
      const mockEvent: Event = {
        id: parseInt(eventId),
        title: 'AI Innovation Summit 2025',
        description: 'Join us for the biggest AI hackathon of the year! Build cutting-edge AI solutions, network with industry experts, and compete for amazing prizes. This three-day event brings together developers, designers, and innovators from around the world to create the next generation of AI applications.',
        organizer: 'Tech Innovation Hub',
        organizerAvatar: '/org1.jpg',
        type: 'public',
        date: 'Jan 15-17, 2025',
        startTime: '9:00 AM',
        endTime: '6:00 PM',
        location: 'San Francisco Convention Center, San Francisco, CA',
        participants: 250,
        maxParticipants: 300,
        prize: '$25,000',
        categories: ['AI/ML', 'Machine Learning', 'Data Science', 'Innovation', 'Startup'],
        status: 'upcoming',
        requirements: [
          'Basic programming knowledge in Python, JavaScript, or similar',
          'Laptop with development environment',
          'Team of 2-4 people (can be formed on-site)',
          'Valid government ID for registration'
        ],
        schedule: [
          {
            day: 'Day 1 - Jan 15',
            events: [
              { time: '9:00 AM', activity: 'Registration & Check-in', description: 'Get your badge and event materials' },
              { time: '10:00 AM', activity: 'Opening Ceremony', description: 'Welcome speech and event overview' },
              { time: '11:00 AM', activity: 'Team Formation', description: 'Find your teammates or join existing teams' },
              { time: '12:00 PM', activity: 'Lunch & Networking', description: 'Meet other participants and mentors' },
              { time: '1:00 PM', activity: 'Hacking Begins', description: 'Start building your AI solution' },
              { time: '6:00 PM', activity: 'Dinner & Check-in', description: 'Progress updates and team meetings' }
            ]
          },
          {
            day: 'Day 2 - Jan 16',
            events: [
              { time: '9:00 AM', activity: 'Breakfast & Mentorship', description: 'Get guidance from industry experts' },
              { time: '10:00 AM', activity: 'Continued Development', description: 'Work on your project with mentor support' },
              { time: '2:00 PM', activity: 'Workshop Sessions', description: 'Learn new AI techniques and tools' },
              { time: '6:00 PM', activity: 'Dinner & Progress Review', description: 'Present your progress to mentors' }
            ]
          },
          {
            day: 'Day 3 - Jan 17',
            events: [
              { time: '9:00 AM', activity: 'Final Development', description: 'Complete your project and prepare demo' },
              { time: '2:00 PM', activity: 'Project Submission', description: 'Submit your final project' },
              { time: '3:00 PM', activity: 'Project Presentations', description: 'Present your solution to judges' },
              { time: '5:00 PM', activity: 'Awards Ceremony', description: 'Announce winners and distribute prizes' }
            ]
          }
        ],
        prizes: [
          { place: '1st Place', amount: '$10,000', description: 'Grand prize for the most innovative AI solution' },
          { place: '2nd Place', amount: '$7,500', description: 'Runner-up prize for excellent technical execution' },
          { place: '3rd Place', amount: '$5,000', description: 'Third place for creative problem-solving approach' },
          { place: 'Best Innovation', amount: '$2,500', description: 'Special award for most creative solution' }
        ]
      }

      const mockParticipants: Participant[] = [
        {
          id: 1,
          name: 'Alexandra Kim',
          role: 'Senior Full Stack Developer',
          avatar: '/avatar1.jpg',
          skills: ['React', 'Node.js', 'Python', 'TensorFlow'],
          hackathonWins: 5,
          location: 'San Francisco, CA',
          team: 'AI Pioneers',
          joinedAt: 'Dec 1, 2024'
        },
        {
          id: 2,
          name: 'David Chen',
          role: 'ML Engineer',
          avatar: '/avatar2.jpg',
          skills: ['Python', 'PyTorch', 'AWS', 'Docker'],
          hackathonWins: 3,
          location: 'Seattle, WA',
          team: 'Data Wizards',
          joinedAt: 'Dec 5, 2024'
        },
        {
          id: 3,
          name: 'Maria Rodriguez',
          role: 'UI/UX Designer',
          avatar: '/avatar3.jpg',
          skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
          hackathonWins: 4,
          location: 'Austin, TX',
          team: 'Design Innovators',
          joinedAt: 'Dec 10, 2024'
        },
        {
          id: 4,
          name: 'James Wilson',
          role: 'DevOps Engineer',
          avatar: '/avatar4.jpg',
          skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
          hackathonWins: 2,
          location: 'New York, NY',
          team: 'Cloud Masters',
          joinedAt: 'Dec 15, 2024'
        },
        {
          id: 5,
          name: 'Sarah Johnson',
          role: 'Data Scientist',
          avatar: '/avatar5.jpg',
          skills: ['Python', 'R', 'SQL', 'Tableau'],
          hackathonWins: 6,
          location: 'Boston, MA',
          team: 'Data Wizards',
          joinedAt: 'Dec 20, 2024'
        },
        {
          id: 6,
          name: 'Michael Brown',
          role: 'Frontend Developer',
          avatar: '/avatar6.jpg',
          skills: ['React', 'Vue.js', 'TypeScript', 'CSS'],
          hackathonWins: 3,
          location: 'Denver, CO',
          team: 'AI Pioneers',
          joinedAt: 'Dec 25, 2024'
        }
      ]

      const mockAnnouncements: Announcement[] = [
        {
          id: 1,
          title: 'Event Schedule Updated',
          content: 'We have updated the event schedule to include additional workshop sessions on Day 2. Please check the updated schedule in your event materials.',
          author: 'Event Organizer',
          timestamp: 'Dec 28, 2024 2:30 PM',
          priority: 'medium',
          category: 'Schedule'
        },
        {
          id: 2,
          title: 'Team Formation Workshop',
          content: 'Join us for a special team formation workshop on Day 1 at 11:00 AM. This session will help you find the perfect teammates for your project.',
          author: 'Event Coordinator',
          timestamp: 'Dec 27, 2024 10:15 AM',
          priority: 'high',
          category: 'Workshop'
        },
        {
          id: 3,
          title: 'Mentor Office Hours',
          content: 'Industry mentors will be available for 1-on-1 sessions during lunch breaks. Sign up at the registration desk to reserve your slot.',
          author: 'Mentor Coordinator',
          timestamp: 'Dec 26, 2024 4:45 PM',
          priority: 'low',
          category: 'Mentorship'
        },
        {
          id: 4,
          title: 'WiFi Information',
          content: 'Event WiFi: AIHack2025, Password: Innovation2025! Network will be available throughout the venue.',
          author: 'IT Support',
          timestamp: 'Dec 25, 2024 9:00 AM',
          priority: 'medium',
          category: 'Logistics'
        }
      ]

      setEvent(mockEvent)
      setParticipants(mockParticipants)
      setAnnouncements(mockAnnouncements)
    }
  }, [eventId])

  const getStatusBadge = (status: string) => {
    const variants = {
      upcoming: 'bg-blue-100 text-blue-800',
      active: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      draft: 'bg-yellow-100 text-yellow-800'
    }
    return variants[status as keyof typeof variants] || variants.upcoming
  }

  const getPriorityBadge = (priority: string) => {
    const variants = {
      low: 'bg-gray-100 text-gray-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    }
    return variants[priority as keyof typeof variants] || variants.low
  }

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Event Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <Link href="/events" className="hover:text-blue-600">Events</Link>
          <span>/</span>
          <span>{event.title}</span>
        </div>
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <Badge className={getStatusBadge(event.status)}>
                {event.status}
              </Badge>
              <Badge variant="outline">
                {event.type}
              </Badge>
              <Badge variant="outline">
                {event.categories[0]}
              </Badge>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              {event.description}
            </p>
          </div>
          
          <div className="flex space-x-3">
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Follow Event
            </Button>
            <Button>
              <Users className="h-4 w-4 mr-2" />
              Join Event
            </Button>
          </div>
        </div>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{event.date}</p>
            <p className="text-sm text-gray-600">{event.startTime} - {event.endTime}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-lg font-semibold text-gray-900">{event.location.split(',')[0]}</p>
            <p className="text-sm text-gray-600">{event.location.split(',').slice(1).join(',').trim()}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{event.participants}</p>
            <p className="text-sm text-gray-600">of {event.maxParticipants} participants</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{event.prize}</p>
            <p className="text-sm text-gray-600">prize pool</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="participants">Participants</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Organizer</h4>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={event.organizerAvatar} alt={event.organizer} />
                      <AvatarFallback>{event.organizer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-700">{event.organizer}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.categories.map((category) => (
                      <Badge key={category} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {event.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prizes */}
            <Card>
              <CardHeader>
                <CardTitle>Prizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{prize.place}</p>
                          <p className="text-sm text-gray-600">{prize.description}</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-green-600">{prize.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Participants Tab */}
        <TabsContent value="participants" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Participants ({participants.length})</h2>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Invite Participants
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participants.map((participant) => (
              <Card key={participant.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={participant.avatar} alt={participant.name} />
                      <AvatarFallback>
                        {participant.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{participant.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{participant.role}</p>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">{participant.hackathonWins} wins</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{participant.location}</span>
                    </div>
                    
                    {participant.team && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Team: {participant.team}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Joined: {participant.joinedAt}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {participant.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {participant.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{participant.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h2>
          
          <div className="space-y-6">
            {event.schedule.map((day, dayIndex) => (
              <Card key={dayIndex}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex space-x-4">
                        <div className="w-20 text-sm font-semibold text-gray-600 pt-1">
                          {event.time}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{event.activity}</h4>
                          <p className="text-sm text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Announcements Tab */}
        <TabsContent value="announcements" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Announcements ({announcements.length})</h2>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              New Announcement
            </Button>
          </div>
          
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge className={getPriorityBadge(announcement.priority)}>
                        {announcement.priority}
                      </Badge>
                      <Badge variant="outline">
                        {announcement.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{announcement.timestamp}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{announcement.title}</h3>
                  <p className="text-gray-700 mb-3">{announcement.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{announcement.author}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Comment
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bell className="h-4 w-4 mr-2" />
                        Subscribe
                      </Button>
                    </div>
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
