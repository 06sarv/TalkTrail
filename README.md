# TalkTrail

TalkTrail is an innovative journaling platform that helps users gain deeper insights into their emotions through voice journaling and AI-powered analysis. The platform provides alternative perspectives and emotional tracking to support mental well-being.

## Features

- 🎤 Voice-to-text journaling
- 🧠 AI-powered emotion analysis
- 💭 Alternative perspective generation
- 📊 Emotional timeline tracking
- 🔒 Secure and private storage
- 📱 Responsive web design

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Voice Processing**: Web Speech API
- **AI/ML**: Hugging Face (emotion analysis), Gemini API (insights)
- **Backend**: Vercel Serverless Functions
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage (optional)
- **Charts**: Recharts

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── auth/           # Authentication components
│   ├── journal/        # Journaling components
│   ├── insights/       # Insights and analysis components
│   └── ui/             # Reusable UI components
├── lib/                # Utility functions and configurations
│   ├── firebase/       # Firebase configuration
│   ├── ai/            # AI/ML related functions
│   └── utils/         # Helper functions
├── types/              # TypeScript type definitions
└── styles/            # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
