import Footer from "./components/common/Footer";
import "./globals.css";

export const metadata = {
  title: "AllSome",
  description: "SELL & SHIP EVERYWHERE",
  metadataBase: new URL('https://allsome-next.vercel.app'),
  openGraph: {
    title: "Hyperleen",
    description: "Transform Your Data into AI Insights",
    images: '/meta-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  );
}
