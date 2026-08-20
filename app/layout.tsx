import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { getSiteUrl } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Fallback metadata for any route that doesn't define its own (error pages,
// etc.) — every real page sets its own title/description/OG/Twitter tags
// via buildMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "NextGen Tools — Free AI & Digital Tool Guides for Independent Businesses",
  description:
    "A free public guide library that teaches independent business owners across restaurants, personal care services, and sports and fitness how to use AI and free digital tools for marketing, customer relationships, operations, and business tracking.",
  verification: {
    // Drop additional verification codes (Bing, etc.) in here as needed.
    google: "6DAlik8EFRm2aUBhHb0oJukcGUeSS-Y4Vr7Ej9BAvW8",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-body">
        {children}
      </body>
    </html>
  );
}
