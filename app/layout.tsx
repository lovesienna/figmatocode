import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealers Dashboard",
  description: "Dealer dashboard mock"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
