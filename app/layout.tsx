import { Outfit } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/context/Appcontext";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "inlineCart - Campanella",
  description: "E-Commerce with Next.js",
};
interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Toaster />
          <AppContextProvider>{children}</AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
