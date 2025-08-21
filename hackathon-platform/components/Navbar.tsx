'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Bell, Search, Menu, User, Settings, LogOut, MessageSquare } from 'lucide-react'

// Mock user data - in real app this would come from auth context
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'participant' as 'participant' | 'organizer' | 'recruiter' | 'sponsor',
  avatar: '/avatar1.jpg'
}

interface NavbarProps {
  onMenuClick?: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [userRole, setUserRole] = useState<'participant' | 'organizer' | 'recruiter' | 'sponsor'>('participant')
  const pathname = usePathname()

  // Mock role switching - in real app this would come from authentication
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as typeof userRole
    if (storedRole) {
      setUserRole(storedRole)
    } else {
      setUserRole(mockUser.role)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  const handleRoleSwitch = (newRole: typeof userRole) => {
    setUserRole(newRole)
    localStorage.setItem('userRole', newRole)
    
    // Dispatch custom event for dashboard to listen to
    window.dispatchEvent(new CustomEvent('roleChanged', { 
      detail: { role: newRole } 
    }))
    
    console.log('Switched to role:', newRole)
  }

  // Define navigation links based on role
  const getNavigationLinks = () => {
    const baseLinks = [
      { name: 'Dashboard', href: '/dashboard', roles: ['participant', 'organizer', 'recruiter', 'sponsor'] },
      { name: 'Events', href: '/events', roles: ['participant', 'organizer', 'recruiter', 'sponsor'] },
    ]

    const roleSpecificLinks = {
      participant: [
        { name: 'Teamify', href: '/teamify', roles: ['participant'] },
        { name: 'Connections', href: '/connections', roles: ['participant'] },
      ],
      organizer: [
        { name: 'Manage Events', href: '/events', roles: ['organizer'] },
        { name: 'Teams', href: '/dashboard/teams', roles: ['organizer'] },
        { name: 'Analytics', href: '/dashboard/analytics', roles: ['organizer'] },
      ],
      recruiter: [
        { name: 'Candidates', href: '/dashboard/recruiters', roles: ['recruiter'] },
        { name: 'Connections', href: '/connections', roles: ['recruiter'] },
      ],
      sponsor: [
        { name: 'Organizers', href: '/dashboard/sponsors', roles: ['sponsor'] },
        { name: 'Analytics', href: '/dashboard/analytics', roles: ['sponsor'] },
      ]
    }

    const commonLinks = [
      { name: 'Settings', href: '/dashboard/settings', roles: ['participant', 'organizer', 'recruiter', 'sponsor'] }
    ]

    return [
      ...baseLinks,
      ...roleSpecificLinks[userRole],
      ...commonLinks
    ].filter(link => link.roles.includes(userRole))
  }

  const navigationLinks = getNavigationLinks()

  const isActiveLink = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Mobile menu button */}
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="text-xl font-bold text-blue-600">Hackathon Platform</h1>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex space-x-1">
              {navigationLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Button
                    variant={isActiveLink(link.href) ? 'default' : 'ghost'}
                    size="sm"
                    className={`font-medium ${
                      isActiveLink(link.href)
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events, people, or projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </form>
          </div>

          {/* Right side - Actions and User */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs"
              >
                3
              </Badge>
            </Button>

            {/* Messages */}
            <Button variant="ghost" size="sm" className="relative">
              <MessageSquare className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs"
              >
                2
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={mockUser.avatar} alt="User" />
                    <AvatarFallback>
                      {mockUser.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{mockUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {mockUser.email}
                    </p>
                    <Badge variant="outline" className="w-fit text-xs capitalize">
                      {userRole}
                    </Badge>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                
                {/* Role Switcher - For Demo Purposes */}
                <DropdownMenuLabel className="text-xs text-gray-500">
                  Switch Role (Demo)
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleRoleSwitch('participant')}>
                  <span className={userRole === 'participant' ? 'font-bold' : ''}>
                    Participant
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleSwitch('organizer')}>
                  <span className={userRole === 'organizer' ? 'font-bold' : ''}>
                    Organizer
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleSwitch('recruiter')}>
                  <span className={userRole === 'recruiter' ? 'font-bold' : ''}>
                    Recruiter
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleSwitch('sponsor')}>
                  <span className={userRole === 'sponsor' ? 'font-bold' : ''}>
                    Sponsor
                  </span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden border-t border-gray-200 bg-gray-50">
        <div className="px-4 py-3 space-y-1">
          {navigationLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <Button
                variant={isActiveLink(link.href) ? 'default' : 'ghost'}
                size="sm"
                className={`w-full justify-start font-medium ${
                  isActiveLink(link.href)
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden border-t border-gray-200 p-4">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search events, people, or projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </form>
      </div>
    </nav>
  )
}
