import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import NavBar from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-firstRow-A1 max-w-[85rem] mx-auto`}>
      <PrelineScript />
      <NavBar/>
      
        {children}
      </body>
    </html>
  );
}
