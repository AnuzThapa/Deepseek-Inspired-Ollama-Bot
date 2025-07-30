import { Inter } from "next/font/google";
import "./globals.css";
import "./prism.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
// server component
// the main server side rendering happens here.layout.js is the parent of all the pages in app folder.it is the special file in next.js
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek - ElyséeDev",
  description: "Full Stack Project",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en">
          <body className={`${inter.className} antialiased`}>
            <Toaster
              toastOptions={{
                success: { style: { background: "black", color: "white" } },
                error: { style: { background: "black", color: "white" } },
              }}
            />
            {children}
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}


// Server (First Render)
// ├── layout.js (Server Component)
// │   └── Basic HTML structure
// │       └── Placeholder for page.jsx
// │
// Client (After Hydration)
// ├── layout.js (Server Component)
// │   └── Basic HTML structure
// │       └── page.jsx (Client Component)
// │           └── Interactive components


// Here's how the rendering process works:
// First Render (Server-Side):
// layout.js is rendered on the server
// It creates the basic HTML structure
// The children prop is prepared for page.jsx
// The server sends the initial HTML to the browser
// Hydration (Client-Side):
// After the initial HTML is loaded
// React "hydrates" the page
// Client components (marked with "use client") become interactive
// Event handlers and state management start working


// So, while layout.js is server-rendered, it can contain client components (like your page.jsx). 
// The server renders the initial structure, and then the client-side JavaScript takes over to make the components interactive. 
// This is called "hydration" - where the static HTML becomes interactive React components.

// layout.js and page.jsx are special file names in Next.js App Router that cannot be changed

// app/
// ├── layout.js           # Root layout (must be named layout.js)
// ├── dashboard/
// │   └── layout.js      # Dashboard layout (must be named layout.js)
// └── blog/
//     └── layout.js      # Blog layout (must be named layout.js)

// app/
// ├── page.jsx           # Home page (must be named page.jsx)
// ├── about/
// │   └── page.jsx      # About page (must be named page.jsx)
// └── blog/
//     └── page.jsx      # Blog page (must be named page.jsx)