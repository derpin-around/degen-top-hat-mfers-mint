import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Toaster } from "sonner";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "degen top hat mfers",
	description: "cc0 mfers by sartoshi on degen chain",
	openGraph: {
		title: 'mint degen top hat mfers',
		description: "cc0 mfers by sartoshi on degen chain",
		url: "https://degen-top-hat-mfers-mint.vercel.app/",
		siteName: "degen top hat mfers",
		images: [
		  {
			url: "/opengraph-image.png",
			width: 1200,
			height: 630,
			alt: "degen top hat mfers",
		  },
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastProvider>
					<Toaster position="bottom-center" />
					<ThirdwebProvider>{children}</ThirdwebProvider>
				</ToastProvider>
			</body>
		</html>
	);
}
