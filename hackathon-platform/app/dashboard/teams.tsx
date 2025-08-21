'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const teams = [
    {
      id: 1,
      name: 'Team Alpha',
      event: 'AI Hackathon 2024',
      members: [
        { id: 1, name: 'John Doe', role: 'Frontend', avatar: '/avatar1.jpg' },
        { id: 2, name: 'Jane Smith', role: 'Backend', avatar: '/avatar2.jpg' },
        { id: 3, name: 'Mike Johnson', role: 'AI/ML', avatar: '/avatar3.jpg' }
      ],
      maxSize: 4,
      project: 'AI-powered Task Manager',
      status: 'active',
      skills: ['React', 'Node.js', 'Python', 'TensorFlow']
    },
    {
      id: 2,
      name: 'Web3 Warriors',
      event: 'Web3 Buildathon',
      members: [
        { id: 4, name: 'Sarah Wilson', role: 'Smart Contracts', avatar: '/avatar4.jpg' },
        { id: 5, name: 'Tom Brown', role: 'Frontend', avatar: '/avatar5.jpg' }
      ],
      maxSize: 3,
      project: 'DeFi Dashboard',
      status: 'completed',
      skills: ['Solidity', 'React', 'Web3.js']
    },
    {
      id: 3,
      name: 'Mobile Masters',
      event: 'Mobile App Challenge',
      members: [
        { id: 6, name: 'Alex Chen', role: 'iOS', avatar: '/avatar6.jpg' },
        { id: 7, name: 'Lisa Park', role: 'Android', avatar: '/avatar7.jpg' },
        { id: 8, name: 'David Kim', role: 'Backend', avatar: '/avatar8.jpg' }
      ],
      maxSize: 4,
      project: 'Fitness Tracker App',
      status: 'active',
      skills: ['Swift', 'Kotlin', 'Node.js', 'MongoDB']
    }
  ]

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.project.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default">Active</Badge>
      case 'completed':
        return <Badge variant="outline">Completed</Badge>
      case 'forming':
        return <Badge variant="secondary">Forming</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teams</h1>
          <p className="text-gray-600">Manage your teams and collaborate on projects</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Team</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Team</DialogTitle>
              <DialogDescription>
                Form a new team for an upcoming hackathon event.
              </DialogDescription>
            </DialogHeader>
            {/* TODO: Add team creation form */}
            <div className="space-y-4">
              <p className="text-gray-500">Team creation form will be implemented here.</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="Search teams, events, or projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTeams.map((team) => (
          <Card key={team.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{team.name}</h3>
                  {getStatusBadge(team.status)}
                </div>
                <Badge variant="outline">{team.members.length}/{team.maxSize}</Badge>
              </div>
              <CardDescription>
                <span className="font-medium">{team.event}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">Project</h4>
                <p className="text-sm text-gray-600">{team.project}</p>
              </div>

              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">Team Members</h4>
                <div className="space-y-2">
                  {team.members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {team.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1">
                  View Details
                </Button>
                {team.status === 'active' && (
                  <Button size="sm" variant="outline">
                    Manage
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTeams.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No teams found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
