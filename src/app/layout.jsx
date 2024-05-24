import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simply a Diary",
  description: "A simple diary with calendar and server side data fetching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center justify-center w-full h-full min-h-screen px-2 py-8 md:p-10 lg:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
