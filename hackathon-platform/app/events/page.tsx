'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import EventCard from '@/components/EventCard'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, Plus } from 'lucide-react'
import { useState } from 'react'

export default function EventsPage() {
  // State for create event modal
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [createEventForm, setCreateEventForm] = useState({
    title: '',
    description: '',
    type: 'public' as 'public' | 'private',
    joinCode: '',
    date: '',
    location: '',
    maxParticipants: '',
    prize: '',
    categories: [] as string[]
  })
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Mock events data
  const events = [
    {
      id: 1,
      title: 'AI Innovation Summit 2025',
      description: 'Join us for the biggest AI hackathon of the year! Build cutting-edge AI solutions, network with industry experts, and compete for amazing prizes.',
      organizer: 'Tech Innovation Hub',
      type: 'public' as const,
      date: 'Jan 15-17, 2025',
      location: 'San Francisco, CA',
      participants: 250,
      maxParticipants: 300,
      prize: '$25,000',
      categories: ['AI/ML', 'Machine Learning', 'Data Science', 'Innovation'],
      status: 'upcoming' as const
    },
    {
      id: 2,
      title: 'Web3 Development Challenge',
      description: 'Build the future of decentralized applications. Create innovative blockchain solutions and compete with developers worldwide.',
      organizer: 'Blockchain Foundation',
      type: 'public' as const,
      date: 'Feb 10-12, 2025',
      location: 'Virtual',
      participants: 180,
      maxParticipants: 200,
      prize: '$15,000',
      categories: ['Blockchain', 'Web3', 'DeFi', 'Smart Contracts'],
      status: 'upcoming' as const
    },
    {
      id: 3,
      title: 'Sustainability Tech Hack',
      description: 'Develop solutions for a greener future. Focus on renewable energy, waste reduction, and environmental conservation.',
      organizer: 'GreenTech Collective',
      type: 'public' as const,
      date: 'Mar 5-7, 2025',
      location: 'Boston, MA',
      participants: 120,
      maxParticipants: 150,
      prize: '$10,000',
      categories: ['Sustainability', 'Clean Energy', 'Environmental Tech'],
      status: 'upcoming' as const
    },
    {
      id: 4,
      title: 'FinTech Innovation Lab',
      description: 'Revolutionize financial technology. Build apps for payments, banking, insurance, and investment management.',
      organizer: 'Finance Innovation Institute',
      type: 'private' as const,
      date: 'Apr 20-22, 2025',
      location: 'New York, NY',
      participants: 80,
      maxParticipants: 100,
      prize: '$20,000',
      categories: ['FinTech', 'Payments', 'Banking', 'Investment'],
      status: 'upcoming' as const
    },
    {
      id: 5,
      title: 'Mobile App Development Boot Camp',
      description: 'Create innovative mobile applications for iOS and Android. Learn from experts and build something amazing.',
      organizer: 'MobileTech Academy',
      type: 'public' as const,
      date: 'May 15-17, 2025',
      location: 'Austin, TX',
      participants: 95,
      maxParticipants: 120,
      prize: '$8,000',
      categories: ['Mobile Development', 'iOS', 'Android', 'App Design'],
      status: 'upcoming' as const
    },
    {
      id: 6,
      title: 'Cybersecurity Defense Challenge',
      description: 'Test your security skills in this intense cybersecurity competition. Protect systems, find vulnerabilities, and secure networks.',
      organizer: 'CyberSec Institute',
      type: 'private' as const,
      date: 'Jun 10-12, 2025',
      location: 'Washington, DC',
      participants: 60,
      maxParticipants: 80,
      prize: '$18,000',
      categories: ['Cybersecurity', 'Network Security', 'Penetration Testing'],
      status: 'upcoming' as const
    },
    {
      id: 7,
      title: 'Game Development Jam',
      description: 'Create amazing games in just 48 hours! Use any technology and platform to build the most engaging gaming experience.',
      organizer: 'GameDev Community',
      type: 'public' as const,
      date: 'Jul 25-27, 2025',
      location: 'Los Angeles, CA',
      participants: 150,
      maxParticipants: 200,
      prize: '$12,000',
      categories: ['Game Development', 'Unity', 'Unreal Engine', 'Game Design'],
      status: 'upcoming' as const
    },
    {
      id: 8,
      title: 'HealthTech Innovation Challenge',
      description: 'Develop solutions to improve healthcare delivery, patient outcomes, and medical technology.',
      organizer: 'Health Innovation Lab',
      type: 'public' as const,
      date: 'Aug 15-17, 2025',
      location: 'Seattle, WA',
      participants: 110,
      maxParticipants: 140,
      prize: '$22,000',
      categories: ['HealthTech', 'Medical Devices', 'Digital Health', 'Biotech'],
      status: 'upcoming' as const
    }
  ]

  const categories = [
    'All', 'AI/ML', 'Blockchain', 'FinTech', 'Mobile', 'Web3', 
    'Sustainability', 'Cybersecurity', 'Game Dev', 'HealthTech'
  ]

  // Form handling functions
  const handleInputChange = (field: string, value: string) => {
    setCreateEventForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCategoryToggle = (category: string) => {
    if (category === 'All') return
    
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mock submission - in real app this would send to API
    const newEvent = {
      ...createEventForm,
      categories: selectedCategories,
      id: events.length + 1,
      participants: 0,
      status: 'draft' as const,
      organizer: 'Current User',
      organizerAvatar: '/avatar1.jpg'
    }
    
    console.log('Creating new event:', newEvent)
    
    // Reset form
    setCreateEventForm({
      title: '',
      description: '',
      type: 'public',
      joinCode: '',
      date: '',
      location: '',
      maxParticipants: '',
      prize: '',
      categories: []
    })
    setSelectedCategories([])
    setIsCreateModalOpen(false)
    
    // Show success message (in real app this would be a toast notification)
    alert('Event created successfully!')
  }

  const resetForm = () => {
    setCreateEventForm({
      title: '',
      description: '',
      type: 'public',
      joinCode: '',
      date: '',
      location: '',
      maxParticipants: '',
      prize: '',
      categories: []
    })
    setSelectedCategories([])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Hackathons</h1>
        <p className="text-gray-600 text-lg">
          Find amazing hackathons to participate in, learn new skills, and build something incredible.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search hackathons..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
                <DialogDescription>
                  Fill out the form below to create a new hackathon event.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Event Title *</Label>
                      <Input
                        id="title"
                        value={createEventForm.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="Enter event title"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="type">Event Type *</Label>
                      <Select
                        value={createEventForm.type}
                        onValueChange={(value) => handleInputChange('type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {createEventForm.type === 'private' && (
                    <div className="space-y-2">
                      <Label htmlFor="joinCode">Join Code *</Label>
                      <Input
                        id="joinCode"
                        value={createEventForm.joinCode}
                        onChange={(e) => handleInputChange('joinCode', e.target.value)}
                        placeholder="Enter join code for private event"
                        required
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={createEventForm.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your event..."
                      rows={4}
                      required
                    />
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Event Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Event Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={createEventForm.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={createEventForm.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, State or Virtual"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxParticipants">Max Participants</Label>
                      <Input
                        id="maxParticipants"
                        type="number"
                        value={createEventForm.maxParticipants}
                        onChange={(e) => handleInputChange('maxParticipants', e.target.value)}
                        placeholder="100"
                        min="1"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="prize">Prize Pool</Label>
                      <Input
                        id="prize"
                        value={createEventForm.prize}
                        onChange={(e) => handleInputChange('prize', e.target.value)}
                        placeholder="$10,000"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Categories</h3>
                  <p className="text-sm text-gray-600">Select relevant categories for your event</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {categories.filter(cat => cat !== 'All').map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategories.includes(category) ? 'default' : 'outline'}
                        className={`cursor-pointer hover:bg-gray-100 ${
                          selectedCategories.includes(category) ? 'bg-blue-600 text-white' : ''
                        }`}
                        onClick={() => handleCategoryToggle(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <DialogFooter className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                  >
                    Reset
                  </Button>
                  <Button type="submit">
                    Create Event
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-gray-100"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Events
        </Button>
      </div>
    </div>
  )
}
