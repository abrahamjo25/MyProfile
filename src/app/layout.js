import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abraham Yohannes | Software Developer",
  description:
    "A skilled software developer with expertise in React, NextJS, Node.js, and Tailwind CSS. I have a proven track record of building visually appealing and user-friendly websites, optimizing performance, and troubleshooting technical issues. My strong problem-solving skills and attention to detail make me an asset to any development team. I am passionate about web development and always strive to stay informed about the latest technologies and best practices in the field. I am excited about the opportunity to work on innovative projects and contribute to creating exceptional online experiences for users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://www.atlaschania.gr/" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
