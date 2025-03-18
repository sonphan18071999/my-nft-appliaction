import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Footer from "@/components/commons/footer/footer";
import Header from "@/components/commons/header/header";

export const metadata: Metadata = {
  title: "NFT Web application",
  description: "Author: Son Phan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <div className={"mt-4"}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
