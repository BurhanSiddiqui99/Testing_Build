"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Button } from "antd";
import { background, lock, Logo, main, passwordseen, passwordViewer } from "../../../../assets/images";
import { useForm, Controller } from 'react-hook-form';
import Colors from "../../../../config/colors";
import {yupResolver} from '@hookform/resolvers/yup';
import Link from "next/link";
import {userLogin} from '../../../../config/Schema/Schema';
import { MdEmail } from "react-icons/md";
import { redirect } from 'next/navigation'
import { FaLock } from "react-icons/fa";
export default function Login() {
    const { Title, Paragraph } = Typography;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const validationSchema = userLogin;
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema)
    });
    const LoginForm = async (data : any) => {
        if(data?.email && data?.password){
            redirect('/admin/dashboard')
        }
    }
  return (
    <Row className="h-screen">
      <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
       
        <div className="min-h-screen w-full flex items-center justify-center bg-dot-pattern relative px-4">
          <div
            className="absolute inset-0 -z-10 bg-no-repeat"
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundSize: "100% 100vh",
            }}
          />

          <Card className="w-full max-w-[500px] shadow-lg rounded-3xl px-8">
            <div className="text-center mb-6">
              <Image
              preview={false} alt="Logo"
                src={Logo.src}
                width={70}
                height={70}
                className="mx-auto mb-4"
              />
              <Title level={2} className="mb-1 mt-2 color-class">
                Welcome To Admin
              </Title>
              <Paragraph type="secondary">Login to your account</Paragraph>
              <form className="mt-3 w-full" onSubmit={handleSubmit(LoginForm)}>

                        <label className="font-semibold flex mb-2">Email</label>
                        <Row className="w-full pb-4">
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'This field is required',
                                    validate: value => value.toString().length !== 0 || 'This field is required'
                                }}
                                render={({ field, fieldState }) => (
                                    <Col span={24} className="relative">
                                        <Input
                                            required
                                            type="email"
                                            placeholder="Enter Email Address"
                                            prefix={<MdEmail style={{ color: '#c9c9c9', fontSize: '20px' }} className="mr-3" />}
                                            style={{border: fieldState.error?.message ? `1px solid ${Colors.MainColor}` : "1px solid #D7DBE8"}}
                                            className="px-2 py-3 rounded-lg w-full outline-0"
                                            onKeyDown={(e) => {
                                              if (['e', 'E', '-', '+'].includes(e.key)) e.preventDefault();
                                            }}
                                            {...field}
                                        />
                                        {fieldState.error && (
                                            <span className="text-[#ed1a72] flex">{fieldState.error.message}</span>
                                        )}
                                    </Col>
                                )}
                            />
                        </Row>

                        <label className="font-semibold flex mb-2">Password</label>
                        <Row className="w-full">
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: 'This field is required',
                                    validate: value => value.toString().length !== 0 || 'This field is required'
                                }}
                                render={({ field, fieldState }) => (
                                    <Col span={24} className="relative">
                                        <Input required type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter Your Password"
                                            prefix={<FaLock style={{ color: '#c9c9c9', fontSize: '20px' }} className="mr-3" />}
                                            suffix={
                                            <Image preview={false} alt="Password" src={showPassword ? passwordViewer.src : passwordseen.src} className="h-3 w-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                                            style={{border: fieldState.error?.message ? `1px solid ${Colors.MainColor}` : "1px solid #D7DBE8"}} className="px-2 py-3 rounded-lg w-full outline-0"  {...field} />
                                        {fieldState.error && (
                                            <span className="text-[#ed1a72] flex">{fieldState.error.message}</span>
                                        )}
                                    </Col>
                                )}
                            />
                        </Row>

                        <Row className="flex justify-end items-end">
                            <Link href="/auth/email-enter" className={`cursor-pointer mt-2 text-[#ed1a72] hover:text-[#ed1a72]`}>Forgot Password?</Link>
                        </Row>
                        <button className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold" type="submit"> Login </button>
                        
                    </form>
            </div>
          </Card>
        </div>
      </Col>

      <Col xxl={12} xl={12} lg={12} md={0} sm={0} xs={0}>
        <Image alt="sideImage" preview={false} height={"100vh"} width={"100%"} src={main.src} />
      </Col>
    </Row>
  );
}
