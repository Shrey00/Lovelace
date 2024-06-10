import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";;
import '@/app/globals.css';

const ibm_plex_sans = IBM_Plex_Sans({ subsets: ["latin"], weight: '500' });

export const metadata: Metadata = {
  title: "Landing Page Builder",
  description: "Create your own landing page super easy and fast, and manage all your sales, downloads etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let classes : string = ibm_plex_sans.className + " " + "dark";
  return (
    <html lang="en">
      <body className={classes} >
          {children}
      </body>
    </html>
  );
}
