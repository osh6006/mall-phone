import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import SessionProviders from "@/providers/session-provider";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mall Phone",
  description: "OHS의 Portfolio 사이트 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SessionProviders>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </SessionProviders>
      </body>
    </html>
  );
}
