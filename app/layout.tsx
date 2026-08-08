import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HostPilot AI",
  description: "AI operations and guest intelligence platform for hotels and hostels.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
