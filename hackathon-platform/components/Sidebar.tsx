'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { 
  Home, 
  User, 
  Calendar, 
  Users, 
  Network, 
  Briefcase, 
  DollarSign, 
  Settings,
  X
} from 'lucide-react'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Events', href: '/dashboard/events', icon: Calendar },
  { name: 'Teams', href: '/dashboard/teams', icon: Users },
  { name: 'Connections', href: '/dashboard/connections', icon: Network },
  { name: 'Recruiters', href: '/dashboard/recruiters', icon: Briefcase },
  { name: 'Sponsors', href: '/dashboard/sponsors', icon: DollarSign },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard'
    }
    return pathname.startsWith(href)
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="lg:hidden"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={active ? 'default' : 'ghost'}
                className={`w-full justify-start ${
                  active 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => {
                  // Close sidebar on mobile after navigation
                  if (window.innerWidth < 1024) {
                    onClose()
                  }
                }}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          <p>Hackathon Platform</p>
          <p>v1.0.0</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:z-50 lg:bg-white lg:border-r lg:border-gray-200">
        <div className="flex-1 flex flex-col min-h-0 pt-16">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Spacer */}
      <div className="hidden lg:block lg:w-64" />
    </>
  )
}
