import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Pearce",
  description:
    "One page listing the site, the other work, and the languages those use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
