import { Great_Vibes, Cormorant_Garamond, Montserrat } from "next/font/google";
import { weddingConfig } from "@/config/wedding";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const { couple, date } = weddingConfig;

export const metadata = {
  title: `${couple.first} & ${couple.second}`,
  description: `Свадебное приглашение: ${couple.first} & ${couple.second} · ${date.displayShort}`,
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      data-lang="ru"
      className={`${greatVibes.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
