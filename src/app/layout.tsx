"use client";
import { useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import store, { RootState } from "../app/store/index";
import { Provider, TypedUseSelectorHook, useSelector } from "react-redux";
import { message } from "antd";
import { redirect } from "next/navigation";
import { Spin } from "antd";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


function LoaderWrapper({ children }: { children: React.ReactNode }) {
  // Access Redux state
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector ;
  
  const { user, loader, error } = useAppSelector((state) => state.login);

  return loader ? (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <Spin size="large" />
    </div>
  ) : (
    <>{children}</>
  );
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    document.title = "Daily Tables"; // Dynamically set the page title
    // messageApi.success("Welcome to Daily Tables!");
  }, [messageApi]);
  // const [messageApi, contextHolder] = message.useMessage();
  // useEffect(() => {
    
  // }, [messageApi]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-scroll`}
      >
        <main>
          <Provider store={store}>
            {/* {contextHolder} */}
            <ToastContainer />
            {children}
            {/* <LoaderWrapper>{children}</LoaderWrapper> */}
            </Provider>
        </main>
      </body>
    </html>
  );
}
