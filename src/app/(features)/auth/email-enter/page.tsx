"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Button } from "antd";
import {
  background,
  Logo,
  main,
  passwordseen,
  passwordViewer,
} from "../../../../assets/images";
import { useForm, Controller } from "react-hook-form";
import Colors from "../../../../config/colors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendOtp } from "../../../store/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/index";
import { toast } from "react-toastify";
export default function EmailEnter() {
  const dispatch: AppDispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { user, loader, error, otpcode, email } = useAppSelector(
    (state) => state.login
  );
  const { Title, Paragraph } = Typography;
  // const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        router.push("/admin/dashboard");
      }
    }
  }, []);
  const router = useRouter();

  const EmailForm = async (data: any) => {
    // if(data?.email){
    //   redirect('/auth/otp')
    // }
    const payload = { email: data?.email, isRegistration: false };
    dispatch(
      sendOtp({
        payload,
        cb: (data) => {
          if (data?.success) {
            router.push("/auth/otp");
            console.log("OTP Send successful:", data);
            setTimeout(() => {
              toast.success("OTP Send successful", {
                position: "top-center",
              });
            }, 1000);
          }
          // redirect('/admin/dashboard')
        },
      })
    );
  };

  if (!user) {
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
                  preview={false}
                  alt="Logo"
                  src={Logo.src}
                  width={70}
                  height={70}
                  className="mx-auto mb-4"
                />
                <Title level={2} className="mb-1 mt-2 color-class">
                  Welcome To Admin
                </Title>
                <Paragraph type="secondary">Enter Your Email</Paragraph>
                <form
                  className="mt-3 w-full"
                  onSubmit={handleSubmit(EmailForm)}
                >
                  <label className="font-semibold flex mb-2">Email</label>
                  <Row className="w-full pb-4">
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "This field is required",
                        validate: (value) =>
                          value.toString().length !== 0 ||
                          "This field is required",
                      }}
                      render={({ field, fieldState }) => (
                        <Col span={24} className="relative">
                          <Input
                            required
                            type="email"
                            placeholder="Enter Email Address"
                            style={{ border: `1px solid #D7DBE8` }}
                            className="px-2 py-3 rounded-lg w-full outline-0"
                            onKeyDown={(e) => {
                              if (
                                e.key === "e" ||
                                e.key === "E" ||
                                e.key === "-" ||
                                e.key === "+"
                              ) {
                                e.preventDefault();
                              }
                            }}
                            {...field}
                          />
                          {fieldState.error && (
                            <span className="text-red-500 flex">
                              {fieldState.error.message}
                            </span>
                          )}
                        </Col>
                      )}
                    />
                  </Row>

                  <button
                    className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold"
                    type="submit"
                  >
                    {" "}
                    Send OTP{" "}
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </Col>

        <Col xxl={12} xl={12} lg={12} md={0} sm={0} xs={0}>
          <Image
            alt="sideImage"
            preview={false}
            height={"100vh"}
            width={"100%"}
            src={main.src}
          />
        </Col>
      </Row>
    );
  }
}
