# BitLinks

BitLinks is a simple, fast, and free URL shortener built with Next.js and MongoDB. No authentication is required—just shorten your URLs instantly and enjoy a clean, privacy-friendly experience.

## Project video
https://github.com/user-attachments/assets/25d23102-6066-43bb-8412-4d842a3233a4

## Features
- Shorten any URL in seconds
- No sign-up or login required
- Built with the latest Next.js and React
- Clean responsive interface
- Animations powered by Typed.js
- Uses MongoDB for robust backend storage
- Powered by Tailwind CSS

## Tech Stack
- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- A running MongoDB database (local or hosted)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd bitlinks
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.local.example` to `.env.local` and update with your MongoDB URI if provided.

4. Run the development server:
   ```bash
   npm run dev
   ```
   The app runs at http://localhost:3000

## Usage
- Visit the homepage.
- Enter a long URL to generate a short link instantly.
- No need to create an account or log in.

## Scripts
- `npm run dev` — Run the development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Lint codebase

## Folder Structure
- `/app` — Main application pages and logic
- `/components` — Reusable React components
- `/lib` — Server-side and database utilities
- `/public` — Static assets

---
