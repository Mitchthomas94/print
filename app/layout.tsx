export const metadata = {
  title: "Printii — Instantly Create. Instantly Print.",
  description: "24/7 phone-case printing machines for malls, attractions and events.",
};

import "./../styles/globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
