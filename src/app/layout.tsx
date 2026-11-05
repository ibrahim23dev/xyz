import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

const title = "Mehejabin Jui | LL.M. Student | Al-Fiqh & Law";
const description =
  "Explore the academic portfolio of Mehejabin Jui, LL.M. student at Islamic University, Bangladesh, featuring her legal education, Islamic jurisprudence interests, academic activities, research, and professional development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: set your real domain
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    type: "profile",
    siteName: profile.name,
  },
  twitter: { card: "summary", title, description },
  icons: {
    icon: "/my.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
