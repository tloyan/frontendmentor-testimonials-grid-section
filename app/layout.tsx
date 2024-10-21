import "./globals.css";
import { jsonLd } from "./jsonLd";
export { metadata } from './metadata'
import { Barlow_Semi_Condensed } from "next/font/google"

const barlow_semi_condesed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: "--font-barlow"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${barlow_semi_condesed.variable} antialiased h-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
