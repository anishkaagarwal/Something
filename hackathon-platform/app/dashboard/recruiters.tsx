'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function RecruitersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')
  const [filterExperience, setFilterExperience] = useState('all')

  const candidates = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Full-stack Developer',
      experience: '3 years',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      hackathonWins: 2,
      projects: 8,
      connections: 45,
      avatar: '/avatar1.jpg',
      availability: 'open',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Frontend Developer',
      experience: '2 years',
      skills: ['React', 'Vue.js', 'TypeScript', 'CSS'],
      hackathonWins: 1,
      projects: 6,
      connections: 32,
      avatar: '/avatar2.jpg',
      availability: 'open',
      location: 'New York, NY'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'AI/ML Engineer',
      experience: '4 years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL'],
      hackathonWins: 3,
      projects: 12,
      connections: 67,
      avatar: '/avatar3.jpg',
      availability: 'open',
      location: 'Seattle, WA'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      role: 'Backend Developer',
      experience: '5 years',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      hackathonWins: 4,
      projects: 15,
      connections: 89,
      avatar: '/avatar4.jpg',
      availability: 'open',
      location: 'Austin, TX'
    }
  ]

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesRole = filterRole === 'all' || candidate.role.toLowerCase().includes(filterRole.toLowerCase())
    const matchesExperience = filterExperience === 'all' || candidate.experience === filterExperience
    return matchesSearch && matchesRole && matchesExperience
  })

  const handleContact = (id: number) => {
    // TODO: Implement contact logic
    console.log('Contacting candidate:', id)
  }

  const handleViewProfile = (id: number) => {
    // TODO: Implement view profile logic
    console.log('Viewing profile:', id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Recruitment Hub</h1>
        <p className="text-gray-600">Discover talented developers and connect with potential candidates</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search candidates by name, role, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="frontend">Frontend Developer</SelectItem>
              <SelectItem value="backend">Backend Developer</SelectItem>
              <SelectItem value="full-stack">Full-stack Developer</SelectItem>
              <SelectItem value="ai/ml">AI/ML Engineer</SelectItem>
              <SelectItem value="devops">DevOps Engineer</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterExperience} onValueChange={setFilterExperience}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Experience Levels</SelectItem>
              <SelectItem value="1 year">1 year</SelectItem>
              <SelectItem value="2 years">2 years</SelectItem>
              <SelectItem value="3 years">3 years</SelectItem>
              <SelectItem value="4 years">4 years</SelectItem>
              <SelectItem value="5 years">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src={candidate.avatar} />
                <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{candidate.name}</CardTitle>
              <CardDescription>{candidate.role}</CardDescription>
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant="outline">{candidate.experience}</Badge>
                <Badge variant="secondary">{candidate.location}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="font-medium text-gray-900">{candidate.hackathonWins}</p>
                  <p className="text-gray-600">Wins</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{candidate.projects}</p>
                  <p className="text-gray-600">Projects</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{candidate.connections}</p>
                  <p className="text-gray-600">Connections</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleContact(candidate.id)}
                >
                  Contact
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleViewProfile(candidate.id)}
                >
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No candidates found matching your criteria.</p>
        </div>
      )}

      {/* Recruitment Stats */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Recruitment Analytics</CardTitle>
            <CardDescription>Overview of your recruitment activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <p className="text-sm text-gray-600">Candidates Contacted</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <p className="text-sm text-gray-600">Interviews Scheduled</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <p className="text-sm text-gray-600">Offers Sent</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2</div>
                <p className="text-sm text-gray-600">Hires Made</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
