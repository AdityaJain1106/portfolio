import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aditya Jain | Full Stack Developer Portfolio",
  description: "Showcase of projects and skills by Aditya Jain - Full Stack Developer specializing in MERN stack, React, Node.js, and modern web development",
  openGraph: {
    title: "Aditya Jain | Full Stack Developer Portfolio",
    description: "Showcase of projects and skills by Aditya Jain - Full Stack Developer specializing in MERN stack, React, Node.js, and modern web development",
    url: "https://adityajain-eportfolio.netlify.app/",
    siteName: "AdityaJain-Portfolio",
    images: [
      {
        url: "https://i.ibb.co/271Ctzs5/dp2.jpg",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: '#0A0A0A', overflowX: 'hidden', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
