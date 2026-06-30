# Idea Vault

Live site (client): https://idea-vault-one-blue.vercel.app/

<img width="1898" height="742" alt="image" src="https://github.com/user-attachments/assets/ce6f6d37-1a2e-4dc4-9572-6864e1508377" />



## Overview
Idea Vault is a modern web platform for publishing, discovering, and organizing ideas. It offers a clear flow for creating new ideas, curated discovery through trending content, and personal spaces for managing your own contributions. The UI is built for fast navigation and consistent interactions across devices, with authentication in place to protect account-specific areas.

## Key Features
- Dedicated feeds for trending ideas and discovery.
- Structured idea submission flow for clear, consistent publishing.
- Detailed idea pages that support engagement and context.
- Personalized areas to manage your ideas and activity.
- Authentication-enabled access for login and registration.
- Responsive UI optimized for desktop and mobile.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- MongoDB with Better Auth
- HeroUI and Next Themes

## Notable npm Packages
- better-auth and @better-auth/mongo-adapter
- mongodb
- @heroui/react and @heroui/styles
- next-themes
- react-hot-toast
- lucide-react and react-icons

## Project Structure (Important Files)
- [src/app/layout.js](src/app/layout.js)
- [src/app/page.js](src/app/page.js)
- [src/app/providers.js](src/app/providers.js)
- [src/app/api/auth/[...all]/route.js](src/app/api/auth/%5B...all%5D/route.js)
- [src/lib/auth.js](src/lib/auth.js)
- [src/lib/auth-client.js](src/lib/auth-client.js)
- [src/proxy.js](src/proxy.js)

## Environment Variables
- `MONGODB_URI` - MongoDB connection string.
- `GOOGLE_CLIENT_ID` - Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret.
- `BETTER_AUTH_URL` - Optional base URL for auth client (defaults to production URL).

