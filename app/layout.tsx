import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oreoluwadev.netlify.app"),
  title: {
    default: "Oreoluwa Adewale — Full-Stack Engineer",
    template: "%s · Oreoluwa Adewale",
  },
  description:
    "Full-stack engineer building reliable web products with TypeScript, React, Next.js, and Node. Based in Ibadan, Nigeria — open to remote roles.",
  openGraph: {
    title: "Oreoluwa Adewale — Full-Stack Engineer",
    description:
      "Full-stack engineer building reliable web products with TypeScript, React, Next.js, and Node.",
    url: "https://oreoluwadev.netlify.app",
    siteName: "Oreoluwa Adewale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oreoluwa Adewale — Full-Stack Engineer",
    description:
      "Full-stack engineer building reliable web products with TypeScript, React, Next.js, and Node.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
