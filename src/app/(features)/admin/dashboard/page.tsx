"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Button, Spin, Avatar } from "antd";
import { UserOutlined, DollarOutlined, CrownOutlined } from '@ant-design/icons';
import { cancelsubscription, monthlysubscription, totalEarningDashboard,totalUsersDashboard, userImage, yearlysubscription } from "../../../../assets/images";
import { useForm, Controller } from 'react-hook-form';
import Colors from "../../../../config/colors";
import {yupResolver} from '@hookform/resolvers/yup';
import Link from "next/link";
import DashboardLayout from '../../../../components/Layout/dashboardLayout';
import UserAnalytics from "./userAnalytics";
import EarningsChart from "./earningGraph";
import UserStats from "./userStatsGraph";
import UserAgeChart from "./userAgeChart";
import { redirect } from 'next/navigation'
import { FaAngleDown, FaAngleUp, FaLock, FaUser } from "react-icons/fa";
import StatsCard from "./StatCard";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/index";
import { getDashboard } from "../../../store/authSlice";
// import SideBar from '../../../../components/Layout/SideBar'
const { Title, Paragraph } = Typography;
export default function Dashboard() {
    const dispatch: AppDispatch = useDispatch();
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { dashboardData, loader, user } = useAppSelector((state) => state.login);
    // console.log(dashboardData?.data?.usersDeviceType,"hhhhhhhhhhhhhhh");
    const [showHide, setShowHide] = useState('none');

  useEffect(() => {
    dispatch(getDashboard())
  },[])


  if (loader) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Spin size="large" />
      </div>
    );
  }

    const stats = [
        {
          text: 'Total \nUsers',
          value: dashboardData?.data?.totalUsers,
          icon: <Image preview={false} style={{ fontSize: '1.5rem', color: '#4096ff' }} alt="total users" src={totalUsersDashboard.src} />,
          iconBgColor: '#e6f4ff'
        },
        {
          text: 'Total \nEarnings',
          value: '$600.00',
          icon: <Image preview={false} style={{ fontSize: '1.5rem', color: '#4096ff' }} alt="total users" src={totalEarningDashboard.src} />,
          iconBgColor: '#f6ffed'
        },
        {
          text: 'Monthly \nSubscriptions',
          value: '24',
          icon: <Image preview={false} style={{ fontSize: '1.5rem', color: '#4096ff' }} alt="total users" src={monthlysubscription.src} />,
          iconBgColor: '#fffbe6'
        },
        {
          text: 'Yearly \nSubscriptions',
          value: '20',
          icon: <Image preview={false} style={{ fontSize: '1.5rem', color: '#4096ff' }} alt="total users" src={yearlysubscription.src} />,
          iconBgColor: '#fff2e8'
        },
        {
          text: 'Cancelled \nSubscriptions',
          value: '10',
          icon: <Image preview={false} style={{ fontSize: '1.5rem', color: '#4096ff' }} alt="total users" src={cancelsubscription.src} />,
          iconBgColor: '#fff1f0'
        }
      ];
  return (
    <DashboardLayout>
        <div className=" p-8">
            
        
        <div className="bg-[#f5f5f5] z-50 mb-6 w-full flex justify-between items-center">
            <div>
                <p className="mb-2 text-[#afb2bd]">Pages / Dashboard</p>
                <p className="font-extrabold text-3xl">Main Dashboard</p>
            </div>
            <div className="bg-white flex items-center p-3 rounded-3xl cursor-pointer" onClick={() => {setShowHide(`${showHide === 'none' ? 'flex' : 'none'}`)}}>
            {user?.media?.length ? <Image preview={false} alt="admin" src={user?.media[0]?.url} width={40} height={40} className="rounded-full" /> : <Avatar size={40} icon={<UserOutlined />} />}
              
              <p className="text-black flex justify-end items-center font-semibold text-sm mr-2 ml-2">
                {user?.firstName} {user?.lastName}
              </p>{showHide === 'none' ?
                <FaAngleDown />
                 :
                <FaAngleUp />
                 }
            </div>
        </div>

        <div style={{ display: `${showHide}` }} className="justify-end ">
            <div className="bg-white p-4 rounded-2xl absolute z-10 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
                <div className="flex items-center cursor-pointer" onClick={() => redirect('/admin/change-password')}>
                    <FaLock color="#f25e7c"/>
                    <p className="font-medium text-sm ml-2 text-[#f25e7c]">Change Password</p>
                </div>
                <div className="flex items-center mt-4 cursor-pointer" onClick={() => redirect('/admin/editprofile')}>
                    <FaUser color="#f25e7c"/>
                    <p className="font-medium text-sm ml-2 text-[#f25e7c]">Edit Profile</p>
                </div>
            </div>
        </div>
        {/* <Row className="w-full flex mb-4 sm:mb-0">
            <Col xxl={6} xl={6} lg={8} md={8} sm={12} xs={24} className="bg-white px-6 py-4 rounded-2xl flex justify-start items-center sm:mr-4 mb-0 sm:mb-4">
                <div className=" ">
                <Image preview={false} alt="total users" src={totalUsersDashboard.src} />
                </div>
                <div className="ml-4">
                    <p className="text-[#afb2bd]">Total Users</p>
                    <p className="font-bold text-2xl">300</p>
                </div>
            </Col>
            <Col xxl={6} xl={6} lg={8} md={8} sm={12} xs={24} className="bg-white px-6 py-4 rounded-2xl flex justify-start items-center sm:mr-4 mb-0 sm:mb-4">
                <div className=" ">
                <Image preview={false} alt="total earnings" src={totalEarningDashboard.src} />
                </div>
                <div className="ml-4">
                    <p className="text-[#afb2bd]">Total Earnings</p>
                    <p className="font-bold text-2xl">$300.00</p>
                </div>
            </Col>
            
        </Row> */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gridGap: '0.5rem'}} className="mb-4">
        {stats.map((stat, index) => (
            <div key={index}>
            <StatsCard
            className="w-full flex items-center"
              text={stat.text}
              value={stat.value}
              icon={stat.icon}
              iconBgColor={stat.iconBgColor}
            /></div>

        ))}
      </div>
        <Row gutter={16}>
            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24} className="mb-4"><UserAnalytics /></Col>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="mb-4"><UserAgeChart data={dashboardData?.data?.usersByAge} /></Col>
        </Row>
        <Row gutter={16}>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="mb-4"><UserStats data={dashboardData?.data?.usersDeviceType} /></Col>
            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24} className="mb-4"><EarningsChart /></Col>
        </Row>
        </div>

    </DashboardLayout>
  );
}
