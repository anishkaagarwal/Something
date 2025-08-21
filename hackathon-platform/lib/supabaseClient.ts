import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (to be generated from Supabase)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          user_type: 'participant' | 'organizer' | 'recruiter' | 'sponsor'
          github_username?: string
          bio?: string
          location?: string
          skills?: string[]
          tech_stack?: string[]
          avatar_url?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          user_type: 'participant' | 'organizer' | 'recruiter' | 'sponsor'
          github_username?: string
          bio?: string
          location?: string
          skills?: string[]
          tech_stack?: string[]
          avatar_url?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          user_type?: 'participant' | 'organizer' | 'recruiter' | 'sponsor'
          github_username?: string
          bio?: string
          location?: string
          skills?: string[]
          tech_stack?: string[]
          avatar_url?: string
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          type: 'public' | 'private'
          status: 'upcoming' | 'active' | 'completed'
          start_date: string
          end_date: string
          location: string
          venue?: string
          prize_pool: string
          max_participants: number
          current_participants: number
          organizer_id: string
          categories: string[]
          requirements: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          type: 'public' | 'private'
          status: 'upcoming' | 'active' | 'completed'
          start_date: string
          end_date: string
          location: string
          venue?: string
          prize_pool: string
          max_participants: number
          current_participants?: number
          organizer_id: string
          categories: string[]
          requirements: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          type?: 'public' | 'private'
          status?: 'upcoming' | 'active' | 'completed'
          start_date?: string
          end_date?: string
          location?: string
          venue?: string
          prize_pool?: string
          max_participants?: number
          current_participants?: number
          organizer_id?: string
          categories?: string[]
          requirements?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      teams: {
        Row: {
          id: string
          name: string
          event_id: string
          max_size: number
          current_size: number
          project_idea?: string
          status: 'forming' | 'active' | 'completed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          event_id: string
          max_size: number
          current_size?: number
          project_idea?: string
          status?: 'forming' | 'active' | 'completed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          event_id?: string
          max_size?: number
          current_size?: number
          project_idea?: string
          status?: 'forming' | 'active' | 'completed'
          created_at?: string
          updated_at?: string
        }
      }
      team_members: {
        Row: {
          id: string
          team_id: string
          user_id: string
          role: string
          joined_at: string
        }
        Insert: {
          id?: string
          team_id: string
          user_id: string
          role: string
          joined_at?: string
        }
        Update: {
          id?: string
          team_id?: string
          user_id?: string
          role?: string
          joined_at?: string
        }
      }
      connections: {
        Row: {
          id: string
          user_id: string
          connected_user_id: string
          status: 'pending' | 'accepted' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          connected_user_id: string
          status?: 'pending' | 'accepted' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          connected_user_id?: string
          status?: 'pending' | 'accepted' | 'rejected'
          created_at?: string
          updated_at?: string
        }
      }
      announcements: {
        Row: {
          id: string
          event_id: string
          title: string
          content: string
          author_id: string
          priority: 'low' | 'medium' | 'high'
          category: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          event_id: string
          title: string
          content: string
          author_id: string
          priority?: 'low' | 'medium' | 'high'
          category: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          title?: string
          content?: string
          author_id?: string
          priority?: 'low' | 'medium' | 'high'
          category?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper functions
export const auth = {
  signUp: async (email: string, password: string, userData: Record<string, unknown>) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  }
}

export const users = {
  getProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    return { data, error }
  },

  updateProfile: async (userId: string, updates: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
    return { data, error }
  },

  searchUsers: async (query: string, filters?: Record<string, unknown>) => {
    let queryBuilder = supabase
      .from('users')
      .select('*')
      .or(`first_name.ilike.%${query}%,last_name.ilike.%${query}%,skills.cs.{${query}}`)

    if (filters?.userType) {
      queryBuilder = queryBuilder.eq('user_type', filters.userType)
    }

    const { data, error } = await queryBuilder
    return { data, error }
  }
}

export const events = {
  getEvents: async (filters?: Record<string, unknown>) => {
    let queryBuilder = supabase
      .from('events')
      .select('*, organizer:users!events_organizer_id_fkey(*)')

    if (filters?.status) {
      queryBuilder = queryBuilder.eq('status', filters.status)
    }

    if (filters?.type) {
      queryBuilder = queryBuilder.eq('type', filters.type)
    }

    const { data, error } = await queryBuilder
    return { data, error }
  },

  getEvent: async (eventId: string) => {
    const { data, error } = await supabase
      .from('events')
      .select('*, organizer:users!events_organizer_id_fkey(*)')
      .eq('id', eventId)
      .single()
    return { data, error }
  },

  createEvent: async (eventData: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from('events')
      .insert(eventData)
      .select()
    return { data, error }
  }
}

export const teams = {
  getTeams: async (eventId?: string) => {
    let queryBuilder = supabase
      .from('teams')
      .select('*, team_members(*, users(*))')

    if (eventId) {
      queryBuilder = queryBuilder.eq('event_id', eventId)
    }

    const { data, error } = await queryBuilder
    return { data, error }
  },

  createTeam: async (teamData: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from('teams')
      .insert(teamData)
      .select()
    return { data, error }
  }
}

export const connections = {
  getConnections: async (userId: string) => {
    const { data, error } = await supabase
      .from('connections')
      .select('*, connected_user:users!connections_connected_user_id_fkey(*)')
      .eq('user_id', userId)
      .eq('status', 'accepted')
    return { data, error }
  },

  getPendingRequests: async (userId: string) => {
    const { data, error } = await supabase
      .from('connections')
      .select('*, user:users!connections_user_id_fkey(*)')
      .eq('connected_user_id', userId)
      .eq('status', 'pending')
    return { data, error }
  },

  sendRequest: async (fromUserId: string, toUserId: string) => {
    const { data, error } = await supabase
      .from('connections')
      .insert({
        user_id: fromUserId,
        connected_user_id: toUserId,
        status: 'pending'
      })
      .select()
    return { data, error }
  },

  acceptRequest: async (connectionId: string) => {
    const { data, error } = await supabase
      .from('connections')
      .update({ status: 'accepted' })
      .eq('id', connectionId)
      .select()
    return { data, error }
  }
}
