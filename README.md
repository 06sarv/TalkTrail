
# TalkTrail

TalkTrail is an innovative journaling platform that transforms your spoken thoughts into actionable insights. By combining voice-to-text journaling with advanced machine learning, the app provides unique, empathetic perspectives to help users reframe their experiences and foster personal growth.

## Key Features

* **Voice-to-Text Journaling**: Easily record your thoughts throughout the day.
* **AI-Powered Insights**: Get unique, creative perspectives on your journal entries, moving beyond simple platitudes.
* **Emotional Analysis**: The app analyzes the sentiment of each entry (Positive, Negative, Neutral) to help you understand your emotional patterns over time.
* **Full-Stack Architecture**: Built with Next.js, the project features a seamless integration of frontend and backend, deployed as a single, scalable application.

## Technologies Used

* **Frontend**: Next.js, React, Tailwind CSS
* **Backend**: Next.js API Routes (Serverless Functions)
* **Database**: MongoDB Atlas
* **AI/ML**: Hugging Face Transformers.js (for sentiment analysis), Google Gemini API (for perspective generation)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/06sarv/TalkTrail.git](https://github.com/06sarv/TalkTrail.git)
cd TalkTrail
````

### 2\. Install Dependencies

```bash
npm install
```

### 3\. Set Up Environment Variables

Create a `.env.local` file in the root of your project and add your API keys and database connection string.

```bash
# .env.local
MONGODB_URI="<your-mongodb-atlas-connection-string>"
GEMINI_API_KEY="<your-gemini-api-key>"
HF_TOKEN="<your-hugging-face-token>"
```

### 4\. Run the Application

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply import the Git repository into your Vercel dashboard and provide the environment variables to deploy a live, scalable version of TalkTrail.

```
```

