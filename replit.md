# replit.md

## Overview

This is a full-stack web application built as a personal portfolio website for "Alex Johnson", a Computer Science student. The application features a modern, responsive design with a React frontend and Express.js backend, using PostgreSQL for data storage and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### January 10, 2025 - Website Revision
- Removed social media links from hero section and contact section
- Removed downloadable resume PDF functionality
- Removed personal background content from about section
- Renamed "About" navigation to "Education" to better reflect content focus
- Simplified about section to focus on education, experience, and achievements only
- Updated section titles to be more specific and professional

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in memory storage with plans for PostgreSQL sessions

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Located in `shared/schema.ts` with tables for users and contacts
- **Migrations**: Stored in `./migrations` directory
- **Connection**: Uses `@neondatabase/serverless` for database connectivity

### API Layer
- **Contact Form**: POST `/api/contact` - Handles contact form submissions
- **Contact Management**: GET `/api/contacts` - Retrieves all contacts (admin endpoint)
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Landing section with profile information
- **About Section**: Education and experience details
- **Skills Section**: Technical skills with animated progress bars
- **Projects Section**: Portfolio projects showcase
- **Contact Section**: Contact form with validation and submission handling
- **UI Components**: Comprehensive set of shadcn/ui components for consistent design

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Form data is validated using Zod schema
   - Data is sent to `/api/contact` endpoint
   - Backend validates and stores data in PostgreSQL
   - Success/error feedback is shown to user

2. **Page Navigation**:
   - Single-page application with smooth scrolling navigation
   - Wouter handles routing for different pages
   - React Query manages server state and caching

3. **Data Storage**:
   - In-memory storage for development (MemStorage class)
   - PostgreSQL database for production via Drizzle ORM
   - Contact form submissions are persisted with timestamps

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI components
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date formatting
- **Form Management**: React Hook Form with Zod resolvers

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Build Tools**: ESBuild for server-side bundling

### Development Dependencies
- **Vite**: Development server and build tool
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with Tailwind CSS

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations are applied via `db:push` command

### Environment Configuration
- **Development**: Uses `NODE_ENV=development` with tsx for TypeScript execution
- **Production**: Uses `NODE_ENV=production` with compiled JavaScript
- **Database**: Requires `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Static file serving capability for frontend assets
- Environment variable support for database connection

### Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run db:push`: Apply database migrations

The application follows a modern full-stack architecture with clear separation of concerns, type safety throughout, and a focus on developer experience with hot reloading and comprehensive tooling.