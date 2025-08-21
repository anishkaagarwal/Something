'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function AnnouncementsPage() {
  const [newAnnouncement, setNewAnnouncement] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  // Mock announcements data - in real app, fetch based on params.id
  const announcements = [
    {
      id: 1,
      title: 'Team Formation Session Tomorrow',
      content: 'Join us tomorrow at 2 PM for our team formation session. This is a great opportunity to meet other participants and form your hackathon team. We\'ll have icebreaker activities and team matching based on skills and interests.',
      author: {
        name: 'Event Organizer',
        avatar: '/org1.jpg',
        role: 'Organizer'
      },
      timestamp: '2 hours ago',
      priority: 'high',
      category: 'Team Formation'
    },
    {
      id: 2,
      title: 'Workshop: Introduction to AI/ML Tools',
      content: 'We\'re hosting a workshop on AI/ML tools that will be useful for your projects. Learn about popular frameworks, APIs, and development environments. The workshop will be held in Room A at 10 AM.',
      author: {
        name: 'Dr. Sarah Chen',
        avatar: '/speaker1.jpg',
        role: 'Workshop Leader'
      },
      timestamp: '1 day ago',
      priority: 'medium',
      category: 'Workshop'
    },
    {
      id: 3,
      title: 'Submission Guidelines Updated',
      content: 'We\'ve updated the project submission guidelines. Please review the new requirements for project documentation, demo videos, and presentation slides. All submissions must include a 2-minute demo video.',
      author: {
        name: 'Event Organizer',
        avatar: '/org1.jpg',
        role: 'Organizer'
      },
      timestamp: '2 days ago',
      priority: 'high',
      category: 'Submission'
    },
    {
      id: 4,
      title: 'Networking Mixer Tonight',
      content: 'Join us for an evening networking mixer at 7 PM in the main hall. Connect with other participants, mentors, and industry professionals. Light refreshments will be provided.',
      author: {
        name: 'Event Coordinator',
        avatar: '/coordinator1.jpg',
        role: 'Coordinator'
      },
      timestamp: '3 days ago',
      priority: 'low',
      category: 'Networking'
    }
  ]

  const handleCreateAnnouncement = () => {
    if (newAnnouncement.trim()) {
      // TODO: Implement create announcement logic
      console.log('Creating announcement:', newAnnouncement)
      setNewAnnouncement('')
      setIsCreating(false)
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>
      case 'medium':
        return <Badge variant="default">Medium Priority</Badge>
      case 'low':
        return <Badge variant="secondary">Low Priority</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const getCategoryBadge = (category: string) => {
    return <Badge variant="outline">{category}</Badge>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Event Announcements</h1>
          <p className="text-gray-600">Stay updated with the latest news and updates for this event</p>
        </div>
        
        <Dialog open={isCreating} onOpenChange={setIsCreating}>
          <DialogTrigger asChild>
            <Button>New Announcement</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Announcement</DialogTitle>
              <DialogDescription>
                Share important information with all event participants.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Title</label>
                <Input 
                  placeholder="Announcement title"
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Content</label>
                <Textarea 
                  placeholder="Announcement content..."
                  value={newAnnouncement}
                  onChange={(e) => setNewAnnouncement(e.target.value)}
                  className="mt-1"
                  rows={4}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleCreateAnnouncement} className="flex-1">
                  Post Announcement
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreating(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Announcements List */}
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={announcement.author.avatar} />
                    <AvatarFallback>{announcement.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">{announcement.author.name}</span>
                      <Badge variant="outline" className="text-xs">{announcement.author.role}</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{announcement.timestamp}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                {getPriorityBadge(announcement.priority)}
                {getCategoryBadge(announcement.category)}
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                {announcement.content}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📢 {announcement.author.role}</span>
                  <span>⏰ {announcement.timestamp}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Share
                  </Button>
                  <Button size="sm" variant="ghost">
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {announcements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No announcements yet.</p>
          <p className="text-gray-400 text-sm">Check back later for updates.</p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <span className="text-2xl">📧</span>
                <span>Subscribe to Updates</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <span className="text-2xl">🔔</span>
                <span>Notification Settings</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <span className="text-2xl">📱</span>
                <span>Mobile App</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
