"use client";
import "./globals.css";
import { Mondas } from "./utils/font";
import Nav from "@/Component/Navigation/Nav";
import { usePathname } from "next/navigation";
import AddContextProvider from "@/context/AddContextProvider";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${Mondas.variable}`}>
        <AddContextProvider>
        {pathname !== "/" && <Nav />}
        <div className="body_img">{children}</div>
        {/* <Toaster/> */}
        </AddContextProvider>
      </body>
    </html>
  );
}
