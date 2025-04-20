"use client";
import "./globals.css";
import { Mondas } from "./utils/font";
import Nav from "@/Component/Navigation/Nav";
import Aside from "@/Component/Aside/Aside";
import { usePathname } from "next/navigation";
import AddContextProvider from "@/context/AddContextProvider";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";
  // const isDashboard = pathname.startsWith("/Dashboard")
  return (
    <html lang="en">
      <body className={`${Mondas.variable}`}>
        <AddContextProvider>
          {isLoginPage ? (
            <div className="body_img">{children}</div>
          ) : (
            <div className="flex h-screen">
              <div className="flex flex-col flex-1">
                <Nav />
                {/* <main className="p-4 body_img">{children}</main> */}
              </div>
              <div className="aside">
                 <Aside />
                <main className="p-4 body_img">{children}</main>
              </div>
               
            </div>
          )}
          
          {/* <div className="body_img">{children}</div> */}
          {/* <Toaster/> */}
        </AddContextProvider>
      </body>
    </html>
  );
}
