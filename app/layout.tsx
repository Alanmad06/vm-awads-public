import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/app/__styles/page.css';
import { CandidatesProvider } from "@/context/candidatesContext";
import SubmitButton from "@/components/submitButton";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        
          {children}
         
       
        <ToastContainer/>

      </body>
    </html>
  );
}
