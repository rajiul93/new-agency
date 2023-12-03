import { Poppins } from "next/font/google";
import "./globals.css";
const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--poppins",
});


export async function generateMetadata() {
  const res = await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
  const data = await res.json();
  return {
    title: data[0]["title"],
    description: data[0]["description"],
    keywords: data[0]["keywords"],
    openGraph: {
      images: data[0]["image"],
    },
  };
}
export default async function RootLayout({ children }) {
  return (
    <html className={fontPoppins.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
