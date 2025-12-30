import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. 引入谷歌字体
import "./globals.css";

// 2. 配置字体 (这就是报错缺少的那个 inter 变量)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的接单主页",
  description: "基于 Next.js 的练习项目",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      {/* 3. 在这里使用 inter 变量，并加上 suppressHydrationWarning */}
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}