import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/montserrat/wght.css";
import "@fontsource/island-moments/latin-400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "TravelWorld", template: "%s | TravelWorld" },
  description: "A frontend implementation of the TravelWorld Figma design.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-heading antialiased">
        {children}
      </body>
    </html>
  );
}
