import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import MainLayout from "@/shared/layouts/Main.layout";
import AppTheme from "@themes/default.theme";

const catamaran = Catamaran({
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nail store.",
  description: "Nail app store.",
};

import "reset-css";
import "@styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={catamaran.className}>
        <AppTheme>
          <MainLayout>
            <main>{children}</main>
          </MainLayout>
        </AppTheme>
      </body>
    </html>
  );
}
