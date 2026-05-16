import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://warren-kahler-80.vercel.app"),

  title: "Warren Kahler Turns 80 🐐",

  description:
    "Celebrate Warren Kahler — ag teacher, legend, and certified GOAT.",

  openGraph: {
    title: "Warren Kahler Turns 80 🐐",

    description:
      "The original ag teacher. The family GOAT. Join us to celebrate Warren!",

    url: "https://warren-kahler-80.vercel.app",

    siteName: "Warren Kahler Turns 80",

    images: [
      {
        url: "/og-warren.jpg",
        width: 1200,
        height: 630,
        alt: "Mr. Tony Kahler Ag Teacher graphic",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Warren Kahler Turns 80 🐐",

    description:
      "The original ag teacher. The family GOAT.",

    images: ["/og-warren.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#120d08",
        }}
      >
        {children}
      </body>
    </html>
  );
}
