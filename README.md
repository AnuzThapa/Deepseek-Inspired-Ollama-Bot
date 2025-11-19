# DeepSeek Clone

DeepSeek Clone is a web application designed to provide an interactive chat interface powered by **AI**. It allows users to engage in conversations, manage chats, and perform actions like renaming or deleting chats. The application is built using modern web technologies such as React, Next.js, and Node.js.

## LIVE - DEMO 🌐
Visit the 👉 [LINK 🔗](https://deepseek-clone-gold.vercel.app)

## Features

- **AI-Powered Chat**: Users can send prompts and receive responses from an AI model.
- **Chat Management**: Users can rename or delete chats.
- **Real-Time Updates**: Chat messages are updated dynamically in the UI.
- **User Authentication**: Secure user authentication and session management.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Next.js
- **Backend**: Node.js, Clerk
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **State Management**: Context API
- **Notifications**: React Hot Toast
- **API Integration**: Axios

## Folder Structure

```groovy
deepseek-clone/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   ├── ai/         # AI chat endpoint
│   │   │   ├── rename/     # Rename chat endpoint
│   │   │   └── delete/     # Delete chat endpoint
│   └── clerk/              # Clerk webhook integration
├── components/
│   ├── ChatLabel.jsx       # Chat label component
│   ├── PromptBox.jsx       # Chat input box component
│   └── Sidebar.jsx         # Sidebar for chat navigation
├── context/
│   └── AppContext.jsx      # Global state management
├── config/
│   └── db.js               # MongoDB connection configuration
├── models/
│   └── User.js             # User model schema
├── public/
│   └── assets/             # Static assets (icons, images)
├── styles/
│   └── globals.css         # Global styles
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/elyse502/deepseek-clone.git
   cd deepseek-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your-mongodb-connection-string
   SIGNING_SECRET=your-svix-signing-secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

