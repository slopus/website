# Rafty - Claude Code in Your Pocket

A modern landing page for Rafty, built with Next.js 14 and deployed on Vercel.

## Features

- **Video Background**: Dynamic background with riding-bg.mp4 video loop
- **SVG Logo**: Professional Rafty logo integration
- **IBM Plex Mono Typography**: Professional monospace font throughout
- **App Store Badges**: Download buttons for Google Play and App Store
- **App Screenshot**: Mobile app preview with responsive sizing
- **Feature List**: Highlighted app capabilities with bullet points
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Vercel Ready**: Optimized for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
```

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with IBM Plex Mono font
│   ├── page.tsx            # Main landing page with video background
│   └── globals.css         # Global styles
├── components/
│   ├── AppStoreButton.tsx  # Apple App Store download button
│   └── GooglePlayButton.tsx # Google Play Store download button
├── public/                 # Static assets
│   ├── rafty-logo.svg      # Rafty logo
│   ├── app-1.png           # App screenshot
│   └── riding-bg.mp4       # Background video
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **IBM Plex Mono**: Google Fonts integration
- **Vercel**: Deployment platform

## Customization

### Updating App Store Links

Currently, both app store buttons link to google.com. To update them:

1. Open `app/page.tsx`
2. Find the `href="https://google.com"` attributes
3. Replace with your actual app store URLs

### Styling

The design uses Tailwind CSS for styling. The main colors and theme can be customized in:
- `tailwind.config.js` for theme extensions
- `app/globals.css` for global styles
- `app/page.tsx` for component-specific styles

## License

This project is open source and available under the [MIT License](LICENSE).