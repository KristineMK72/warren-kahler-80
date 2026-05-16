export const metadata = {
  title: "Warren Kahler Turns 80",
  description: "The GOAT turns 80",
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
