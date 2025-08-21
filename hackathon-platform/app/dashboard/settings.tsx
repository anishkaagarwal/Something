'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      connectionRequests: true,
      eventUpdates: true,
      teamInvites: true,
      hackathonResults: true
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showLocation: true,
      showSkills: true,
      showProjects: true,
      allowRecruiterContact: true
    },
    appearance: {
      theme: 'system',
      language: 'en',
      timezone: 'UTC'
    }
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value
      }
    }))
  }

  const handlePrivacyChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value
      }
    }))
  }

  const handleAppearanceChange = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [key]: value
      }
    }))
  }

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Saving settings:', settings)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and privacy settings</p>
      </div>

      <div className="space-y-8">
        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose how you want to be notified about important updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Notification Channels</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <Switch
                      id="email-notifications"
                      checked={settings.notifications.email}
                      onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <Switch
                      id="push-notifications"
                      checked={settings.notifications.push}
                      onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <Switch
                      id="sms-notifications"
                      checked={settings.notifications.sms}
                      onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Notification Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="connection-requests">Connection Requests</Label>
                    <Switch
                      id="connection-requests"
                      checked={settings.notifications.connectionRequests}
                      onCheckedChange={(checked) => handleNotificationChange('connectionRequests', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="event-updates">Event Updates</Label>
                    <Switch
                      id="event-updates"
                      checked={settings.notifications.eventUpdates}
                      onCheckedChange={(checked) => handleNotificationChange('eventUpdates', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="team-invites">Team Invites</Label>
                    <Switch
                      id="team-invites"
                      checked={settings.notifications.teamInvites}
                      onCheckedChange={(checked) => handleNotificationChange('teamInvites', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="hackathon-results">Hackathon Results</Label>
                    <Switch
                      id="hackathon-results"
                      checked={settings.notifications.hackathonResults}
                      onCheckedChange={(checked) => handleNotificationChange('hackathonResults', checked)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card>
          <CardHeader>
            <CardTitle>Privacy & Visibility</CardTitle>
            <CardDescription>Control who can see your information and how you appear to others</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="profile-visibility">Profile Visibility</Label>
                <Select 
                  value={settings.privacy.profileVisibility} 
                  onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public - Anyone can view</SelectItem>
                    <SelectItem value="connections">Connections only</SelectItem>
                    <SelectItem value="private">Private - Hidden from search</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Profile Information</h4>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-email">Show Email Address</Label>
                  <Switch
                    id="show-email"
                    checked={settings.privacy.showEmail}
                    onCheckedChange={(checked) => handlePrivacyChange('showEmail', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-location">Show Location</Label>
                  <Switch
                    id="show-location"
                    checked={settings.privacy.showLocation}
                    onCheckedChange={(checked) => handlePrivacyChange('showLocation', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-skills">Show Skills & Tech Stack</Label>
                  <Switch
                    id="show-skills"
                    checked={settings.privacy.showSkills}
                    onCheckedChange={(checked) => handlePrivacyChange('showSkills', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-projects">Show Projects</Label>
                  <Switch
                    id="show-projects"
                    checked={settings.privacy.showProjects}
                    onCheckedChange={(checked) => handlePrivacyChange('showProjects', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="allow-recruiter-contact">Allow Recruiter Contact</Label>
                  <Switch
                    id="allow-recruiter-contact"
                    checked={settings.privacy.allowRecruiterContact}
                    onCheckedChange={(checked) => handlePrivacyChange('allowRecruiterContact', checked)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle>Appearance & Preferences</CardTitle>
            <CardDescription>Customize your experience and interface preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="theme">Theme</Label>
                <Select 
                  value={settings.appearance.theme} 
                  onValueChange={(value) => handleAppearanceChange('theme', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="language">Language</Label>
                <Select 
                  value={settings.appearance.language} 
                  onValueChange={(value) => handleAppearanceChange('language', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select 
                  value={settings.appearance.timezone} 
                  onValueChange={(value) => handleAppearanceChange('timezone', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC">UTC</SelectItem>
                    <SelectItem value="EST">Eastern Time</SelectItem>
                    <SelectItem value="PST">Pacific Time</SelectItem>
                    <SelectItem value="GMT">Greenwich Mean Time</SelectItem>
                    <SelectItem value="CET">Central European Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}
