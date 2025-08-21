# Hackathon Platform

A comprehensive SaaS web application that combines networking for participants, hackathon/event management for organizers, recruitment for recruiters, and analytics + funding for sponsors.

## 🚀 Features

### For Participants (Students/Developers)
- **Profile Management**: Create and maintain profiles with skills, tech stack, and GitHub integration
- **Networking**: Mutual-only connections with smart suggestions based on complementary skills
- **Event Discovery**: Join public events directly or private events via codes
- **Team Formation**: Propose teams with role requirements and project ideas
- **Smart Matching**: Algorithm-based team formation from connections

### For Organizers
- **Event Management**: Create and manage hackathons with comprehensive dashboards
- **Team Formation**: Automated team allocation with newbie protection
- **Communication**: Real-time announcements and participant management
- **Analytics**: Track engagement and participant performance

### For Recruiters
- **Candidate Search**: Advanced filtering by skills, experience, and hackathon performance
- **Direct Outreach**: Send offers and connect with potential hires
- **Performance Tracking**: Scout best-performing participants based on event data

### For Sponsors
- **Organizer Discovery**: Browse and analyze event organizers
- **Engagement Metrics**: View participant analytics and event insights
- **Funding Facilitation**: Connect with organizers for sponsorship opportunities

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn UI
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React

## 📁 Project Structure

```
hackathon-platform/
├── app/                    # Next.js app router
│   ├── (root)/            # Landing page
│   ├── auth/              # Authentication pages
│   │   ├── login.tsx      # Login form
│   │   └── register.tsx   # Registration form
│   ├── dashboard/         # Main dashboard
│   │   ├── page.tsx       # Dashboard overview
│   │   ├── profile.tsx    # User profile management
│   │   ├── events.tsx     # Events listing
│   │   ├── teams.tsx      # Team management
│   │   ├── connections.tsx # Networking
│   │   ├── recruiters.tsx # Recruitment hub
│   │   ├── sponsors.tsx   # Sponsor dashboard
│   │   └── settings.tsx   # User settings
│   └── events/            # Event-specific pages
│       └── [id]/          # Dynamic event routes
│           ├── page.tsx   # Event details
│           └── announcements.tsx # Event announcements
├── components/             # Shared UI components
│   ├── ui/                # Shadcn UI components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Navbar.tsx         # Navigation bar
│   └── Sidebar.tsx        # Sidebar navigation
├── lib/                   # Utilities and configurations
│   ├── supabaseClient.ts  # Supabase client and helpers
│   └── utils.ts           # Utility functions
└── styles/                # Global styles
    └── globals.css        # TailwindCSS and custom styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database and auth)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hackathon-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with Next.js defaults
- **Prettier**: Automatic code formatting
- **Components**: Functional components with hooks

### Adding New Components

1. **UI Components**: Use Shadcn UI CLI
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Custom Components**: Place in `components/` directory
3. **Page Components**: Place in appropriate `app/` subdirectory

## 🗄️ Database Schema

### Core Tables

- **users**: User profiles and authentication
- **events**: Hackathon events and details
- **teams**: Team information and membership
- **connections**: User networking relationships
- **announcements**: Event communications

### Key Relationships

- Users can participate in multiple events
- Teams are formed within events
- Connections are mutual between users
- Announcements are tied to specific events

## 🔐 Authentication

- **Email/Password**: Traditional authentication
- **GitHub OAuth**: Social login integration
- **Role-based Access**: Different dashboards per user type
- **Session Management**: Secure token handling

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Responsive Layout**: Adapts to all screen sizes
- **Touch-friendly**: Optimized for touch interactions
- **Progressive Web App**: Installable on mobile devices

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Static site hosting
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Use GitHub Discussions for questions

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Basic authentication and user management
- ✅ Event creation and management
- ✅ Team formation system
- ✅ Basic networking features

### Phase 2 (Next)
- 🔄 Real-time notifications
- 🔄 Advanced team matching algorithms
- 🔄 GitHub integration for project fetching
- 🔄 Mobile app development

### Phase 3 (Future)
- 📋 AI-powered team suggestions
- 📋 Advanced analytics and insights
- 📋 Integration with external platforms
- 📋 Multi-language support

---

Built with ❤️ for the hackathon community
