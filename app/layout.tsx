import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://warren-kahler-80.vercel.app"),

  title: "Tony Kahler Birthday Party 🎉",

  description:
    "Join us to celebrate Tony Kahler — ag teacher, legend, and certified GOAT.",

  openGraph: {
    title: "It's a Party! 🎉",

    description:
      "Celebrating Tony Kahler — ag teacher, family legend, and FFA icon.",

    url: "https://warren-kahler-80.vercel.app",

    siteName: "Tony Kahler Birthday Party",

    images: [
      {
        url: "/warren/IMG_0144.jpeg",
        width: 1200,
        height: 630,
        alt: "Tony Kahler birthday party graphic",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "It's a Party! 🎉",

    description:
      "Celebrating Tony Kahler — ag teacher, family legend, and FFA icon.",

    images: ["/warren/IMG_0144.jpeg"],
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
