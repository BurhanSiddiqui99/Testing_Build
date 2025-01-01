"use client";
import { Layout } from "antd";
// import { useLocation } from "react-router-dom";
import React from "react";
import "./dashboardLayout.css";
import SideBar from "./SideBar";
import NavHeader from "./Header";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {

  const { Content } = Layout;
  const location = usePathname();

  return (
    <div className="App">
      {/* if user is not login it will not render the layout . */}
      {
        location.pathname !== '/auth/login' ?

          <Layout>

            <SideBar />

            <Layout
              className="site-layout"
              style={{
                marginLeft: '260px',
                // padding:'1.25rem'
              }}
            >
                {children}

            </Layout>
          </Layout>

          :

          ""
      }

    </div >
  );

};
export default DashboardLayout;


// 
















