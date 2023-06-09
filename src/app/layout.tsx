import "./globals.css";
import { Inter } from "next/font/google";

import Navigation from "@/components/navigation/navigation";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}