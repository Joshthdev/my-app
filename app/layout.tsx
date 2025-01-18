import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Datafyy",
	description: "Datafyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" data-theme="dark" className="scroll-smooth">
			<body className={inter.className}>
				<div>
					<Toaster />
				</div>
				{children}
			</body>
		</html>
	);
}
