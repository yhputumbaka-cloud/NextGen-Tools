import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen Tools — Free AI & Digital Tool Guides for Independent Businesses",
  description:
    "A free public guide library that teaches independent business owners across restaurants, personal care services, and sports and fitness how to use AI and free digital tools for marketing, customer relationships, operations, and business tracking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
