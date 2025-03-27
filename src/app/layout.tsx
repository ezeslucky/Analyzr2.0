import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";
import { TailwindIndicator } from "@/components/globals/tailwind-indicator";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "./(landing)/navbar";
import Footer from "./(landing)/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analyzr",
  description:
    "Comprehensive analytics dashboard providing real-time business insights, data visualization, performance metrics, and customizable reporting tools.",
  keywords:
    "analytics dashboard, business intelligence, data visualization, performance metrics, KPI tracking, real-time analytics, business insights, reporting tools, data analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} a antialiased`}
      >
        
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        
          <Navbar />
          <Provider>
          
            {children}
         
          </Provider>
          <TailwindIndicator />
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
