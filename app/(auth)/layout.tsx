// Basic Imports
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

// Style
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    "Secure Account Access and Registration | Join Us Today | Jurabek's Blog",
  description:
    "Elevate your experience with secure account access. Whether you're signing up for the first time or returning to your account, our platform offers a seamless and personalized journey. Join our community to access exclusive content and connect with like-minded individuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
