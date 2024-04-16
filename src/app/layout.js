// ./src/app/layout.js
//
// Root layout for the Event Feed project.

// Import global fonts and styles.
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  charset: 'utf-8',
  title: 'Event Feed',
  visualViewport:
    ('width=device-width, ', 'initial-scale=1, ', 'viewport-fit=cover'),
  description:
    ('The official website for the Event Feed Project',
    ' presented by DEV Club at The Ohio State University.'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 
          Developed By:
            Trevor Gerald,
            William An,
            Yakob Getu,
            Ziqi Ou,
            Ekumjyot Kaur,
            and Keming He
        */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
