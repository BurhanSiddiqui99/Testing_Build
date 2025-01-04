"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Avatar } from "antd";
import {
  deleteImage,
  editProfile,
  feedbackImage,
  totalEarningDashboard,
  totalUsersDashboard,
} from "../../../../assets/images";
import "../../../globals.css";
import { useForm, Controller } from "react-hook-form";
// import Colors from "../../../../config/colors";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Link from "next/link";
import DashboardLayout from "../../../../components/Layout/dashboardLayout";
// import BasicModal from "../../../../components/Modal/BasicModal.jsx";
import { useRouter, usePathname } from "next/navigation";
// import SideBar from '../../../../components/Layout/SideBar'
export default function EditProfile() {
  const { Title, Paragraph } = Typography;
  const { handleSubmit, control, reset } = useForm({
    mode: "onChange",
  });
  const router = useRouter();

  const [imageURL, setImageURL] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImageURL(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };
  const deleteImgae = () => {
    setImageURL(null);
    setFile(null);
  };
  return (
    <>
      <DashboardLayout>
        <div className="h-screen p-8">
          <div className="bg-[#f5f5f5] z-50 mb-6">
            <div>
              <p className="mb-2 text-[#afb2bd]">Pages / Profile Settings</p>
              <p className="font-extrabold text-3xl text-[#141340]">Profile Settings</p>
            </div>
            <div></div>
          </div>
          <div className="w-full bg-white p-6 rounded-2xl">
            <p className="font-semibold text-2xl mb-8 text-[#4a4a4a]">Edit Profile</p>
            <form className="">
              <div className="upload-photo-container flex justify-center">
                <label htmlFor="file">
                  <input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    required={false}
                  />
                  {imageURL ? (
                    <div className="relative">
                      <Image preview={false}
                        src={imageURL}
                        alt="Uploaded"
                        className="circle-image relative"
                        width={110}
                        height={110}
                      />
                      <Avatar
                        src={deleteImage.src}
                        className="left-24 bottom-2 z-10 cursor-pointer absolute"
                        onClick={deleteImgae}
                      />
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <Image preview={false} alt="Profile" src={editProfile.src} width={110} height={110} />
                    </div>
                  )}
                </label>
              </div>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">First Name</label>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field, fieldState }) => (
                        <input
                          required
                          type={"text"}
                          defaultValue={""}
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9]"
                          {...field}
                        />
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">Last Name</label>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field, fieldState }) => (
                      <input
                          required
                          type={"text"}
                          defaultValue={""}
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9]"
                          {...field}
                        />
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">Email</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                        <input
                          required
                          type={"email"}
                          value={"johndoe@gmail.com"}
                          disabled
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9] text-[#c9c9c9]"
                          // {...field}
                        />
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                <button className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold"> Confirm </button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
