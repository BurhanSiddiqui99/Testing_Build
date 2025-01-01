"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Button } from "antd";
import { background, Logo, main, passwordseen, passwordViewer } from "../../../../assets/images";
import { useForm, Controller } from 'react-hook-form';
import Colors from "../../../../config/colors";
import InputOtp from "../../../../components/Otp";
import Link from "next/link";
import { redirect } from 'next/navigation'
export default function OTPAuth() {
    const { Title, Paragraph } = Typography;
    const [otp, setOtp] = useState("");
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange'
    });
    const OtpForm = () => {
      if(otp?.length === 6){
        redirect('/auth/change-password')
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
                Enter OTP
              </Title>
              <Paragraph type="secondary">Enter 6 Digit code to reset your password</Paragraph>
              <Row className="gap-2 w-full my-4" >
                        <Col span={24} className="py-2" style={{}}>
                        <InputOtp
                                value={otp}
                                onChange={setOtp}
                                inputStyle={{ margin: '0 12px', padding: '0.5rem 0.8rem', color: Colors.MainColor, width: '40px', fontSize: '2rem', borderBottom: '1px solid #ed1a72' }}
                                containerStyle={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                numInputs={'6'}
                                inputType={'number'}
                                skipDefaultStyles={true}
                            />

                        </Col>

                        
                        <button disabled={otp?.length !== 6} className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold" type="submit" onClick={OtpForm}> Next </button>

                    </Row>


                    <Row className="flex justify-center w-full">
                    <p>Didn't receive the code? <span className="cursor-pointer text-[#ed1a72]" > Resend</span></p>
                    </Row>
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
