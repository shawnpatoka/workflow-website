import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkFlow | Work Order Management",
  description: "Streamline work orders for service teams. Create, assign tasks, and integrate seamlessly with Slack and Google Calendars for efficient scheduling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-fixed bg-cover bg-no-repeat antialiased'} style={{ backgroundImage: 'url(/bg.jpg)' }}>{children}</body>
    </html>
  );
}
