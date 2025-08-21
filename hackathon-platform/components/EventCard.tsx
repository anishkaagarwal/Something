import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, Award, User } from 'lucide-react'
import Link from 'next/link'

interface EventCardProps {
  id: number
  title: string
  description: string
  organizer: string
  type: 'public' | 'private'
  date: string
  location: string
  participants: number
  maxParticipants?: number
  prize: string
  categories: string[]
  status: 'upcoming' | 'active' | 'completed' | 'draft'
}

export default function EventCard({
  id,
  title,
  description,
  organizer,
  type,
  date,
  location,
  participants,
  maxParticipants,
  prize,
  categories,
  status
}: EventCardProps) {
  const getStatusBadge = (status: string) => {
    const variants = {
      upcoming: 'bg-blue-100 text-blue-800',
      active: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      draft: 'bg-yellow-100 text-yellow-800'
    }
    return variants[status as keyof typeof variants] || variants.upcoming
  }

  const getTypeBadge = (type: string) => {
    return type === 'public' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-purple-100 text-purple-800'
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg leading-tight">{title}</CardTitle>
          <div className="flex space-x-2">
            <Badge className={getStatusBadge(status)}>
              {status}
            </Badge>
            <Badge className={getTypeBadge(type)}>
              {type}
            </Badge>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <User className="h-4 w-4 mr-2" />
          <span>{organizer}</span>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span>
            {participants}
            {maxParticipants && ` / ${maxParticipants}`} participants
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Award className="h-4 w-4 mr-2" />
          <span>{prize} prize pool</span>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-1">
          {categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
          {categories.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{categories.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            asChild
          >
            <Link href={`/events/${id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
