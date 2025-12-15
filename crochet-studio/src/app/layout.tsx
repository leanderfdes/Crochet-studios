import "./globals.css";

export const metadata = {
  title: "Threaded Grace",
  description: "Handcrafted crochet studio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
