import type { Metadata } from "next";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: {
      default: "Simon Santos — Instructional Designer",
      template: "%s — Simon Santos",
    },
    description:
      "Learner-centered digital learning experiences shaped by psychology, instructional design, and creative technology.",
    openGraph: {
      title: "Simon Santos — Making learning human.",
      description:
        "Instructional design, learning experience design, and practical digital learning.",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Simon Santos — Making learning human." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Simon Santos — Making learning human.",
      description:
        "Instructional design, learning experience design, and practical digital learning.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
