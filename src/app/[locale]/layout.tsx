import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Gate Africa Group",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        {" "}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
