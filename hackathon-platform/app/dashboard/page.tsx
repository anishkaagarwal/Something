'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, Trophy, Plus, ExternalLink, MapPin, Users as UsersIcon, Award } from 'lucide-react'

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<'participant' | 'organizer' | 'recruiter' | 'sponsor'>('participant')
  const [userName] = useState('John Doe')

  // Mock user data - in real app this would come from auth context
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as typeof userRole
    if (storedRole) {
      setUserRole(storedRole)
    }

    // Listen for localStorage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'userRole' && e.newValue) {
        setUserRole(e.newValue as typeof userRole)
      }
    }

    // Listen for custom events from Navbar
    const handleRoleChange = (e: CustomEvent) => {
      setUserRole(e.detail.role as typeof userRole)
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('roleChanged', handleRoleChange as EventListener)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('roleChanged', handleRoleChange as EventListener)
    }
  }, [])

  // Mock data for participant dashboard
  const joinedEvents = [
    {
      id: 1,
      title: 'AI Hackathon 2024',
      date: 'Dec 15-17, 2024',
      location: 'San Francisco, CA',
      participants: 150,
      status: 'active',
      prize: '$10,000',
      team: 'CodeCrafters',
      progress: 75
    },
    {
      id: 2,
      title: 'Web3 Innovation Challenge',
      date: 'Jan 20-22, 2025',
      location: 'Virtual',
      participants: 200,
      status: 'upcoming',
      prize: '$5,000',
      team: 'Blockchain Builders',
      progress: 0
    },
    {
      id: 3,
      title: 'Sustainability Tech Hack',
      date: 'Nov 10-12, 2024',
      location: 'Boston, MA',
      participants: 80,
      status: 'completed',
      prize: '$3,000',
      team: 'EcoTech',
      progress: 100
    }
  ]

  // Mock data for organizer dashboard
  const organizedEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit',
      date: 'Jan 15-17, 2025',
      location: 'San Francisco, CA',
      participants: 250,
      registrations: 320,
      status: 'planning',
      prize: '$25,000',
      sponsors: ['TechCorp', 'AI Labs'],
      applications: 45
    },
    {
      id: 2,
      title: 'Blockchain Developers Meetup',
      date: 'Dec 10-12, 2024',
      location: 'Virtual',
      participants: 180,
      registrations: 200,
      status: 'live',
      prize: '$15,000',
      sponsors: ['CryptoInc', 'Web3 Foundation'],
      applications: 28
    },
    {
      id: 3,
      title: 'Green Tech Challenge 2024',
      date: 'Nov 20-22, 2024',
      location: 'Austin, TX',
      participants: 120,
      registrations: 150,
      status: 'completed',
      prize: '$8,000',
      sponsors: ['EcoTech', 'Sustainability Fund'],
      applications: 67
    },
    {
      id: 4,
      title: 'Mobile App Development Boot Camp',
      date: 'Feb 5-7, 2025',
      location: 'New York, NY',
      participants: 0,
      registrations: 85,
      status: 'draft',
      prize: '$12,000',
      sponsors: ['MobileTech'],
      applications: 0
    }
  ]

  // Mock data for recruiter dashboard
  const topParticipants = [
    {
      id: 1,
      name: 'Alexandra Kim',
      role: 'Senior Full Stack Developer',
      avatar: '/avatar6.jpg',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      hackathonWins: 5,
      totalEvents: 12,
      location: 'Seattle, WA',
      experience: '5 years',
      github: 'alexkim-dev',
      linkedin: 'alexandra-kim',
      availability: 'Open to opportunities',
      salary: '$120k - $150k'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Machine Learning Engineer',
      avatar: '/avatar7.jpg',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL'],
      hackathonWins: 3,
      totalEvents: 8,
      location: 'San Francisco, CA',
      experience: '3 years',
      github: 'davidml',
      linkedin: 'david-chen-ml',
      availability: 'Actively looking',
      salary: '$130k - $160k'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'UI/UX Designer & Frontend Developer',
      avatar: '/avatar8.jpg',
      skills: ['Figma', 'React', 'TypeScript', 'CSS'],
      hackathonWins: 4,
      totalEvents: 10,
      location: 'Austin, TX',
      experience: '4 years',
      github: 'mariarodriguez',
      linkedin: 'maria-rodriguez-design',
      availability: 'Open to opportunities',
      salary: '$100k - $130k'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      avatar: '/avatar9.jpg',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      hackathonWins: 2,
      totalEvents: 6,
      location: 'New York, NY',
      experience: '6 years',
      github: 'jamesdevops',
      linkedin: 'james-wilson-devops',
      availability: 'Not actively looking',
      salary: '$140k - $170k'
    }
  ]

  // Mock data for sponsor dashboard
  const organizerEngagements = [
    {
      id: 1,
      name: 'Tech Innovation Hub',
      type: 'University',
      avatar: '/org1.jpg',
      events: 8,
      totalParticipants: 1200,
      avgEngagement: 92,
      categories: ['AI/ML', 'Web3', 'Mobile'],
      location: 'Boston, MA',
      partnership: 'Gold Sponsor',
      investment: '$50,000',
      roi: 'High',
      nextEvent: 'AI Hackathon 2025'
    },
    {
      id: 2,
      name: 'Startup Accelerator Inc',
      type: 'Corporate',
      avatar: '/org2.jpg',
      events: 12,
      totalParticipants: 2100,
      avgEngagement: 88,
      categories: ['FinTech', 'HealthTech', 'EdTech'],
      location: 'San Francisco, CA',
      partnership: 'Platinum Sponsor',
      investment: '$75,000',
      roi: 'Very High',
      nextEvent: 'Innovation Summit 2025'
    },
    {
      id: 3,
      name: 'Community Tech Collective',
      type: 'Non-Profit',
      avatar: '/org3.jpg',
      events: 15,
      totalParticipants: 1800,
      avgEngagement: 95,
      categories: ['Sustainability', 'Social Impact', 'Open Source'],
      location: 'Portland, OR',
      partnership: 'Silver Sponsor',
      investment: '$25,000',
      roi: 'Medium',
      nextEvent: 'Green Tech Challenge 2025'
    },
    {
      id: 4,
      name: 'Global Innovation Network',
      type: 'International',
      avatar: '/org4.jpg',
      events: 20,
      totalParticipants: 3500,
      avgEngagement: 90,
      categories: ['Cross-Platform', 'Emerging Tech', 'Research'],
      location: 'Multiple Cities',
      partnership: 'Diamond Sponsor',
      investment: '$100,000',
      roi: 'Very High',
      nextEvent: 'Global Tech Summit 2025'
    }
  ]

  const suggestedConnections = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Full Stack Developer',
      avatar: '/avatar2.jpg',
      skills: ['React', 'Node.js', 'Python'],
      mutualConnections: 3,
      hackathonWins: 2,
      location: 'Seattle, WA'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'UI/UX Designer',
      avatar: '/avatar3.jpg',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      mutualConnections: 5,
      hackathonWins: 1,
      location: 'Austin, TX'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Data Scientist',
      avatar: '/avatar4.jpg',
      skills: ['Python', 'TensorFlow', 'SQL'],
      mutualConnections: 2,
      hackathonWins: 3,
      location: 'New York, NY'
    },
    {
      id: 4,
      name: 'Alex Thompson',
      role: 'DevOps Engineer',
      avatar: '/avatar5.jpg',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      mutualConnections: 4,
      hackathonWins: 1,
      location: 'Denver, CO'
    }
  ]

  const getEventStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>
      case 'live':
        return <Badge className="bg-green-100 text-green-800">Live</Badge>
      case 'planning':
        return <Badge className="bg-yellow-100 text-yellow-800">Planning</Badge>
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-600">Draft</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-blue-500'
    if (progress >= 40) return 'bg-yellow-500'
    return 'bg-gray-300'
  }



  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back, {userName}! 👋
                </h1>
                <p className="text-gray-600 text-lg">
                  {userRole === 'participant' 
                    ? "Ready to build something amazing? Here's what's happening with your hackathon journey."
                    : userRole === 'organizer'
                    ? "Ready to create amazing events? Here's an overview of your organized hackathons."
                    : userRole === 'recruiter'
                    ? "Ready to find top talent? Here are the best participants from recent hackathons."
                    : "Ready to maximize your impact? Here's an overview of your organizer partnerships."
                  }
                </p>
              </div>
              <div className="hidden md:block">
                <Trophy className="h-16 w-16 text-blue-600 opacity-20" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conditional Content Based on Role */}
      {(() => {
        switch (userRole as 'participant' | 'organizer' | 'recruiter' | 'sponsor') {
          case 'participant':
            return (
              <>
                {/* My Events Section - Participant */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">My Events</h2>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Join New Event
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {joinedEvents.map((event) => (
                      <Card key={event.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{event.title}</CardTitle>
                              <div className="flex items-center space-x-2 mt-2">
                                {getEventStatusBadge(event.status)}
                                <Badge variant="outline" className="text-xs">
                                  {event.team}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <UsersIcon className="h-4 w-4 mr-2" />
                            {event.participants} participants
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {event.prize} prize pool
                          </div>
                          
                          {/* Progress Bar */}
                          {event.status === 'active' && (
                            <div className="pt-2">
                              <div className="flex justify-between text-xs text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{event.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${getProgressColor(event.progress)}`}
                                  style={{ width: `${event.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          <div className="pt-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full"
                              asChild
                            >
                              <a href={`/events/${event.id}`}>
                                View Details
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Suggested Connections Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Suggested Connections</h2>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {suggestedConnections.map((user) => (
                      <Card key={user.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                          <Avatar className="h-16 w-16 mx-auto mb-4">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <h3 className="font-semibold text-gray-900 mb-1">{user.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{user.role}</p>
                          
                          <div className="flex flex-wrap gap-1 justify-center mb-3">
                            {user.skills.slice(0, 2).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {user.skills.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{user.skills.length - 2}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="text-xs text-gray-500 space-y-1 mb-4">
                            <div className="flex justify-between">
                              <span>Mutual:</span>
                              <span className="font-medium">{user.mutualConnections}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Wins:</span>
                              <span className="font-medium">{user.hackathonWins}</span>
                            </div>
                            <div className="text-center">
                              <span>{user.location}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Button size="sm" className="w-full">
                              Connect
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              View Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            );

          case 'organizer':
            return (
              <>
                {/* My Organized Events Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">My Organized Events</h2>
                    <Button variant="default" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Event
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {organizedEvents.map((event) => (
                      <Card key={event.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{event.title}</CardTitle>
                              <div className="flex items-center space-x-2 mt-2">
                                {getEventStatusBadge(event.status)}
                                <Badge variant="outline" className="text-xs">
                                  {event.sponsors.length} sponsors
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <UsersIcon className="h-4 w-4 mr-2" />
                            {event.participants} participants / {event.registrations} registered
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {event.prize} prize pool
                          </div>
                          
                          {/* Event Management Info */}
                          <div className="pt-2 border-t border-gray-100">
                            <div className="flex justify-between text-xs text-gray-500 mb-2">
                              <span>Applications: {event.applications}</span>
                              <span>Sponsors: {event.sponsors.join(', ')}</span>
                            </div>
                          </div>
                          
                          <div className="pt-2 space-y-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full"
                              asChild
                            >
                              <a href={`/events/${event.id}`}>
                                Manage Event
                              </a>
                            </Button>
                            {event.status === 'draft' && (
                              <Button 
                                variant="default" 
                                size="sm" 
                                className="w-full"
                              >
                                Publish Event
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            );

          case 'recruiter':
            return (
              <>
                {/* Top Participants Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Top Participants</h2>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View All Candidates
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topParticipants.map((participant) => (
                      <Card key={participant.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{participant.name}</CardTitle>
                              <div className="flex items-center space-x-2 mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {participant.experience}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {participant.availability}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <UsersIcon className="h-4 w-4 mr-2" />
                            {participant.role}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {participant.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {participant.hackathonWins} wins / {participant.totalEvents} events
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Trophy className="h-4 w-4 mr-2" />
                            {participant.salary}
                          </div>
                          
                          {/* Skills */}
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
                          
                          {/* Social Links */}
                          <div className="flex space-x-2 text-xs text-gray-500">
                            <span>GitHub: {participant.github}</span>
                            <span>LinkedIn: {participant.linkedin}</span>
                          </div>
                          
                          <div className="pt-2 space-y-2">
                            <Button size="sm" className="w-full">
                              Contact Candidate
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              View Full Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            );

          case 'sponsor':
            return (
              <>
                {/* Organizer Engagements Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Organizer Engagements</h2>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View All Partnerships
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {organizerEngagements.map((org) => (
                      <Card key={org.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{org.name}</CardTitle>
                              <div className="flex items-center space-x-2 mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {org.type}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {org.partnership}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {org.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <UsersIcon className="h-4 w-4 mr-2" />
                            {org.events} events / {org.totalParticipants} participants
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {org.investment} invested
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Trophy className="h-4 w-4 mr-2" />
                            {org.avgEngagement}% avg engagement
                          </div>
                          
                          {/* Categories */}
                          <div className="flex flex-wrap gap-1">
                            {org.categories.slice(0, 3).map((category) => (
                              <Badge key={category} variant="outline" className="text-xs">
                                {category}
                              </Badge>
                            ))}
                            {org.categories.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{org.categories.length - 3}
                              </Badge>
                            )}
                          </div>
                          
                          {/* ROI and Next Event */}
                          <div className="pt-2 border-t border-gray-100">
                            <div className="flex justify-between text-xs text-gray-500 mb-2">
                              <span>ROI: {org.roi}</span>
                              <span>Next: {org.nextEvent}</span>
                            </div>
                          </div>
                          
                          <div className="pt-2 space-y-2">
                            <Button size="sm" className="w-full">
                              Manage Partnership
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              View Analytics
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            );

          default:
            return null;
        }
      })()}
    </div>
  )
}
