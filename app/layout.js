import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "JustClarify",
  description: "JustClarify – clear, structured answers.",
  icons: {
    icon: [{ url: "/Images/logoimg.png", type: "image/png", sizes: "132x132" }],
    shortcut: "/Images/logoimg.png",
    apple: "/Images/logoimg.png",
  },
  openGraph: {
    title: "JustClarify",
    description: "JustClarify – clear, structured answers.",
    type: "website",
    images: [
      {
        url: "/Images/OgImage.webp",
        width: 1200,
        height: 630,
        alt: "JustClarify preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JustClarify",
    description: "JustClarify – clear, structured answers.",
    images: ["/Images/OgImage.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>{children}</body>
    </html>
  );
}
