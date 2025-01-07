"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Avatar } from "antd";
import {
  deleteImage,
  editProfile,
  feedbackImage,
  passwordseen,
  passwordViewer,
  totalEarningDashboard,
  totalUsersDashboard,
} from "../../../../assets/images";
import "../../../globals.css";
import { useForm, Controller } from "react-hook-form";
import Colors from "../../../../config/colors";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import DashboardLayout from "../../../../components/Layout/dashboardLayout";
import BasicModal from "../../../../components/Modal/BasicModal.jsx";
import { useRouter, usePathname } from "next/navigation";
import { changePassword } from "../../../../config/Schema/Schema";
import { FaLock } from "react-icons/fa";
// import SideBar from '../../../../components/Layout/SideBar'
// const { Title, Paragraph } = Typography;
interface PasswordFieldState {
    passwordField1: boolean;
    passwordField2: boolean;
    passwordField3: boolean;
  }
export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState<PasswordFieldState>({
        passwordField1: false,
        passwordField2: false,
        passwordField3: false,
      });
      const validationSchema = changePassword;
      const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onChange",
        resolver: yupResolver(validationSchema),
      });
  const router = useRouter();

  const changePasswordForm = async (data : any) => {
    reset();
    // if(data?.password && data?.confirm_password && data?.password === data?.confirm_password){
    //     redirect('/auth/login')
    // }
}
  return (
    <>
      <DashboardLayout>
        <div className="h-screen p-8">
          <div className="bg-[#f5f5f5] z-50 mb-6">
            <div>
              <p className="mb-2 text-[#afb2bd]">Pages / Profile Settings</p>
              <p className="font-extrabold text-3xl text-[#141340]">Profile Settings</p>
            </div>
          </div>
          <div className="w-full bg-white p-6 rounded-2xl">
            <p className="font-semibold text-2xl mb-8 text-[#4a4a4a]">Change Password</p>
            <form className="" onSubmit={handleSubmit(changePasswordForm)}>
              
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">Old Password</label>
                  <Controller
                    name="old_Password"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Col> 
                        <Input
                          required
                          type={showPassword?.passwordField1 ? "text" : "password"}
                          prefix={<FaLock style={{ color: '#c9c9c9', fontSize: '20px' }} className="mr-3" />}
                        suffix={
                            <Image alt="Password" preview={false}
                            className=" h-4 w-4 cursor-pointer"
                            src={showPassword?.passwordField1? passwordViewer.src : passwordseen.src}
                            onClick={() => setShowPassword({...showPassword,passwordField1: !showPassword.passwordField1,})}/>
                        }
                          placeholder="Enter Old Password"
                          style={{border: fieldState.error?.message? `1px solid ${Colors.MainColor}` : "1px solid #D7DBE8",}}
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9]"
                          {...field}
                          
                        />
                        {fieldState.error && (
                        <span className="text-[#ed1a72] flex">
                          {fieldState.error.message}
                        </span>
                      )}
                        </Col>
                        
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">New Password</label>
                  <Controller
                    name="Password"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Col>
                      <Input
                          required
                          type={showPassword?.passwordField2 ? "text" : "password"}
                          prefix={<FaLock style={{ color: '#c9c9c9', fontSize: '20px' }} className="mr-3" />}
                        suffix={
                            <Image alt="Password" preview={false}
                            className=" h-4 w-4 cursor-pointer"
                            src={showPassword?.passwordField2? passwordViewer.src : passwordseen.src}
                            onClick={() => setShowPassword({...showPassword,passwordField2: !showPassword.passwordField2,})}/>
                        }
                          placeholder="Enter New Password"
                          style={{border: fieldState.error?.message? `1px solid ${Colors.MainColor}` : "1px solid #D7DBE8",}}
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9]"
                          {...field}
                        />
                      {fieldState.error && (
                        <span className="text-[#ed1a72] flex">
                          {fieldState.error.message}
                        </span>
                      )}
                        </Col>
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">Confirm Password</label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Col>
                        <Input
                          required
                          type={showPassword?.passwordField3 ? "text" : "password"}
                          prefix={<FaLock style={{ color: '#c9c9c9', fontSize: '20px' }} className="mr-3" />}
                        suffix={
                            <Image alt="Password" preview={false}
                            className=" h-4 w-4 cursor-pointer"
                            src={showPassword?.passwordField3? passwordViewer.src : passwordseen.src}
                            onClick={() => setShowPassword({...showPassword,passwordField3: !showPassword.passwordField3,})}/>
                        }
                        style={{border: fieldState.error?.message? `1px solid ${Colors.MainColor}` : "1px solid #D7DBE8",}}
                          placeholder="Enter Confirm Password"
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9]"
                          {...field}
                        />
                        {fieldState.error && (
                        <span className="text-[#ed1a72] flex">
                          {fieldState.error.message}
                        </span>
                      )}
                        </Col>
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                <button className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold"> Update </button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
