# DermaIQ Waitlist

A modern, responsive waitlist landing page for DermaIQ - an AI-powered dermatology assistant. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 Waitlist form with email collection
- 💬 Testimonials section
- 🔄 Client-side hydration fixes
- 🎭 Beautiful UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

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

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
DermaIQ_Waitlist/
├── app/
│   ├── api/
│   │   └── join-waitlist/
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
├── public/
└── ...config files
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

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