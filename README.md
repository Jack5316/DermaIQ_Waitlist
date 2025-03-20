# DermaIQ Waitlist

A modern, responsive waitlist landing page for DermaIQ - an AI-powered dermatology assistant. Built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL with Prisma.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 Waitlist form with email and age group collection
- 💬 Testimonials section
- 🔄 Client-side hydration fixes
- 🎭 Beautiful UI with Tailwind CSS
- 🗄️ PostgreSQL database with Prisma ORM

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jack5316/DermaIQ_Waitlist.git
cd DermaIQ_Waitlist
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Database Setup:

   a. Create a PostgreSQL database
   
   b. Configure the database connection in `.env`:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/dermaiq_waitlist"
   ```
   Or use Prisma Accelerate:
   ```
   DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=your_api_key"
   ```
   
   c. Run the Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
DermaIQ_Waitlist/
├── app/
│   ├── api/
│   │   ├── test-db/
│   │   │   └── route.ts
│   │   └── waitlist/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ClientHydrationFixWrapper.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Testimonials.tsx
│   └── WaitlistForm.tsx
├── lib/
│   └── prisma.ts
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── public/
└── ...config files
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel:
   - Set `DATABASE_URL` to your PostgreSQL connection string
4. Deploy the project

### Troubleshooting Deployment Issues

If you experience issues with the deployed application:

1. Check Vercel logs for any error messages
2. Verify environment variables are correctly set in Vercel
3. Visit `/api/test-db` endpoint to diagnose database connection issues
4. Ensure your database allows connections from Vercel's IP addresses
5. Check browser console for client-side error details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: info@dermaiq.ai
- Website: [dermaiq.ai](https://dermaiq.ai) 