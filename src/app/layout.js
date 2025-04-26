"use client";
import "./globals.css";
import { Mondas } from "./utils/font";
import Nav from "@/Component/Navigation/Nav";
import Aside from "@/Component/Aside/Aside";
import { usePathname } from "next/navigation";
import AddContextProvider, { AddContext } from "@/context/AddContextProvider";
import { useContext } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";
  return (
    <html lang="en">
      <body className={`${Mondas.variable}`}>
        <AddContextProvider>
          <InnerLayout isLoginPage={isLoginPage}>
            {children}
          </InnerLayout>
        </AddContextProvider>
      </body>
    </html>
  );
}
function InnerLayout({ isLoginPage, children }) {
  const { isMobile, asideRef } = useContext(AddContext); 
  if (isLoginPage) {
    return <div className="body_img">{children}</div>;
  }
  return (
    <div className="screen">
      <div className="flex-1">
        <Nav />
      </div>
      <div className="aside">
        <div className={`${isMobile ? "asides-mobile" : "asides"}`} ref={asideRef}>
          <Aside />
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
