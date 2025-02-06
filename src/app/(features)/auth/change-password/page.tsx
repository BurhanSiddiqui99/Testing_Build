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
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordVerification } from "../../../../config/Schema/Schema";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../../store/authSlice";
import type { AppDispatch, RootState } from "../../../store/index";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
interface PasswordFieldState {
  passwordField1: boolean;
  passwordField2: boolean;
}
export default function passwordChange() {
  const dispatch: AppDispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { user, loader, error, otpcode, email } = useAppSelector(
    (state) => state.login
  );
  const { Title, Paragraph } = Typography;
  const [showPassword, setShowPassword] = useState<PasswordFieldState>({
    passwordField1: false,
    passwordField2: false,
  });
  const validationSchema = passwordVerification;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        router.push("/admin/dashboard");
      }
    }
  }, []);
  const changePasswordForm = async (data: any) => {
    if (
      data?.password &&
      data?.confirm_password &&
      data?.password === data?.confirm_password
    ) {
      const payload = { password: data?.password };
      dispatch(
        updatePassword({
          payload,
          cb: (data) => {
            if (data?.success) {
              router.push("/auth/login");
              console.log("Login successful:", data?.success);
              setTimeout(() => {
                toast.success("Password Update Successfully", {
                  position: "top-center",
                });
              }, 1000);
            }
          },
        })
      );
    }
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
                  Reset Password
                </Title>
                <Paragraph type="secondary">
                  Enter your new password and confirm password
                </Paragraph>
                <form
                  className="mt-4 w-full"
                  onSubmit={handleSubmit(changePasswordForm)}
                >
                  <label className="font-semibold flex mb-2">
                    New Password
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "This field is required",
                      validate: (value) =>
                        value.toString().length !== 0 ||
                        "This field is required",
                    }}
                    render={({ field, fieldState }) => (
                      <Col span={24} className="relative mb-2">
                        <Input
                          required
                          type={
                            showPassword?.passwordField1 ? "text" : "password"
                          }
                          prefix={
                            <FaLock
                              style={{ color: "#c9c9c9", fontSize: "20px" }}
                              className="mr-3"
                            />
                          }
                          suffix={
                            <Image
                              alt="Password"
                              preview={false}
                              className=" h-4 w-4 cursor-pointer"
                              src={
                                showPassword?.passwordField1
                                  ? passwordViewer.src
                                  : passwordseen.src
                              }
                              onClick={() =>
                                setShowPassword({
                                  ...showPassword,
                                  passwordField1: !showPassword.passwordField1,
                                })
                              }
                            />
                          }
                          placeholder="Enter New Password"
                          style={{
                            border: fieldState.error?.message
                              ? `1px solid ${Colors.MainColor}`
                              : "1px solid #D7DBE8",
                          }}
                          className="w-full px-2 py-3 rounded outline-0"
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

                  <label className="font-semibold flex mb-2">
                    Confirm Password
                  </label>
                  <Controller
                    name="confirm_password"
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
                          type={
                            showPassword?.passwordField2 ? "text" : "password"
                          }
                          prefix={
                            <FaLock
                              style={{ color: "#c9c9c9", fontSize: "20px" }}
                              className="mr-3"
                            />
                          }
                          suffix={
                            <Image
                              alt="Password"
                              preview={false}
                              className="h-4 w-4 cursor-pointer"
                              src={
                                showPassword?.passwordField2
                                  ? passwordViewer.src
                                  : passwordseen.src
                              }
                              onClick={() =>
                                setShowPassword({
                                  ...showPassword,
                                  passwordField2: !showPassword.passwordField2,
                                })
                              }
                            />
                          }
                          placeholder="Enter Confirm Password"
                          style={{
                            border: fieldState.error?.message
                              ? `1px solid ${Colors.MainColor}`
                              : "1px solid #D7DBE8",
                          }}
                          className="w-full px-2 py-3 rounded outline-0"
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
                  <button
                    className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold"
                    type="submit"
                  >
                    {" "}
                    Update{" "}
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
