import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yatin Parmar | Entrepreneur & Business Leader",
  description:
    "Yatin Parmar is an entrepreneur focused on building organizations, developing ideas and creating meaningful business opportunities across industries. Explore TeamYP and Yatin Parmar Technologies.",
  keywords: [
    "Yatin Parmar",
    "TeamYP",
    "Yatin Parmar Technologies",
    "political consulting",
    "election management",
    "technology consulting",
  ],
  openGraph: {
    title: "Yatin Parmar | Entrepreneur & Business Leader",
    description:
      "Building businesses. Creating impact. An entrepreneur focused on building organizations and creating meaningful business opportunities across industries.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        {children}
      </body>
    </html>
  );
}
