import type { Metadata } from "next";
import { Catamaran, Lora } from "next/font/google";
import MainLayout from "@/shared/layouts/Main.layout";
import AppTheme from "@themes/default.theme";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import { META_DATA } from "@/shared/constants/storeInformation";

import "reset-css";
import "react-toastify/dist/ReactToastify.css";
import "@styles/globals.scss";

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

export const metadata: Metadata = META_DATA;

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
        <AppTheme>
          <ToastContainer position="top-right" autoClose={3000} />
          <MainLayout>
            <main>{children}</main>
          </MainLayout>
        </AppTheme>
      </body>
    </html>
  );
}
