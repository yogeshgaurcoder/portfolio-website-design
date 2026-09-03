import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yogesh Gaur — Senior Data Analyst",
  description: "Portfolio of Yogesh Gaur, Senior Data Analyst specializing in SQL, Python, Power BI, Tableau, Excel and AWS.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
