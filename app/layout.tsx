import type { Metadata } from "next";
import { Catamaran, Lora } from "next/font/google";
import MainLayout from "@/shared/layouts/Main.layout";

const catamaran = Catamaran({
  weight: ["400", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-catamaran",
});

const lora = Lora({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Nail store.",
  description: "Nail app store.",
};

import "reset-css";
import "@styles/globals.scss";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          catamaran.className,
          catamaran.variable,
          lora.className,
          lora.variable
        )}
      >
        <MainLayout>
          <main>{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
