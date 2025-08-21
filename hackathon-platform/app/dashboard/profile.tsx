'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bio: 'Full-stack developer passionate about building innovative solutions. Love participating in hackathons and collaborating with other developers.',
    location: 'San Francisco, CA',
    githubUsername: 'johndoe',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    techStack: ['Frontend', 'Backend', 'DevOps']
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
    // TODO: Implement save logic
    console.log('Saving profile:', profile)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // TODO: Reset to original values
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600">Manage your profile and preferences</p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave}>Save Changes</Button>
              <Button variant="outline" onClick={handleCancel}>Cancel</Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>{profile.firstName[0]}{profile.lastName[0]}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{profile.firstName} {profile.lastName}</CardTitle>
              <CardDescription>Full-stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">Location</Label>
                <p className="text-gray-600">{profile.location}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">GitHub</Label>
                <p className="text-blue-600">@{profile.githubUsername}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Skills</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Tech Stack</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.techStack.map((stack) => (
                    <Badge key={stack} variant="outline">{stack}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and bio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="githubUsername">GitHub Username</Label>
                <Input
                  id="githubUsername"
                  value={profile.githubUsername}
                  onChange={(e) => setProfile(prev => ({ ...prev, githubUsername: e.target.value }))}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  disabled={!isEditing}
                  className="mt-1"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
