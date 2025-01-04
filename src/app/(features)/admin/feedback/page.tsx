"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Button, Modal } from "antd";
import { feedbackImage, Polygon, totalEarningDashboard,totalUsersDashboard, userImage } from "../../../../assets/images";
import { useForm, Controller } from 'react-hook-form';
import Colors from "../../../../config/colors";
import {yupResolver} from '@hookform/resolvers/yup';
import Link from "next/link";
import DashboardLayout from '../../../../components/Layout/dashboardLayout';
import BasicModal from "./BasicModal";
import { useRouter, usePathname, redirect } from 'next/navigation';
import { FaAngleDown, FaAngleUp, FaLock, FaUser } from "react-icons/fa";
// import SideBar from '../../../../components/Layout/SideBar'
const { Title, Paragraph } = Typography;
export default function Dashboard() {
  const router = useRouter();
  const [logoutModal, setLogoutModal] = useState(false);
  const logoutModalViewer = () => {
    setLogoutModal(true);
};

const logOut = () => {
    // localStorage.removeItem('authToken');
    // router.push('/auth/login');
};
const [showHide, setShowHide] = useState('none');
const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);
const [messageInput, setMessageInput] = useState('');
// eslint-disable-next-line
const handleMessageInput = (e:any) => {
  setMessageInput(e.target.value);
}

// const replyModalData = () => {
  
// }
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setOpen(false);
    // setTimeout(() => {
    //   alert(messageInput);
    //   setLoading(false);
    //   setOpen(false);
    // }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
    <DashboardLayout>
        <div className="h-screen p-8">
            
        
        <div className="bg-[#f5f5f5] z-50 mb-6 w-full flex justify-between items-center">
            <div>
                <p className="mb-2 text-[#afb2bd]">Pages / Feedback Management</p>
                <p className="font-extrabold text-3xl">Feedback Management</p>
            </div>
            <div className="bg-white flex items-center p-3 rounded-3xl cursor-pointer" onClick={() => {setShowHide(`${showHide === 'none' ? 'flex' : 'none'}`)}}>
            <Image preview={false} alt="admin" src={userImage.src} />
                <p className="text-black flex justify-end items-center font-semibold text-sm mr-2 ml-2">Admin</p>
                {showHide === 'none' ?
                <FaAngleDown />
                 :
                <FaAngleUp />
                 }
            </div>
        </div>
        <div style={{ display: `${showHide}` }} className="justify-end ">
            <div className="bg-white p-4 rounded-2xl absolute z-10 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
              {/* <Image src={Polygon.src} alt="logo"/> */}
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
        <div className="w-full bg-white p-6 rounded-2xl">
        <p className="font-semibold text-2xl mb-8">Feedbacks (4)</p>
        <Row className="w-full flex mb-4 sm:mb-0 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-md justify-around" >
            <Col className="bg-white p-4 rounded-xl mb-4" xxl={7} xl={7} lg={7} md={11} sm={11} xs={24}>
                <div>
                  <div className="flex justify-end font-medium text-sm text-[#9e9e9e]">
                  October 5, 2024
                  </div>
                  <div className=" flex justify-start items-center">
                  <div className="flex">
                <Image preview={false} alt="feedback" src={feedbackImage.src} width={50} height={50}/>
                </div>
                <div className="ml-2">
                    <p className="font-bold text-sm text-[#2a3573]">Octavia John</p>
                    <p className="text-[#9e9e9e] text-xs">octaviajohn@gmail.com</p>
                </div>
                  </div>
                  <div className="text-[#9e9e9e] mt-6 font-light text-sm">
                    <p>It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.</p>
                  </div>
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <button className="bg-[#ff3b30] text-white w-full mt-4 h-10 rounded-lg" onClick={logoutModalViewer}>Delete</button>
                  </Col>
                  <Col span={12}>
                    <button className="bg-[#c9c9c9]  text-white w-full mt-4 h-10 rounded-lg" >Replied</button>
                  </Col>
                </Row>
            </Col>
            <Col className="bg-white p-4 rounded-xl mb-4" xxl={7} xl={7} lg={7} md={11} sm={11} xs={24}>
                <div>
                  <div className="flex justify-end font-medium text-sm text-[#9e9e9e]">
                  October 5, 2024
                  </div>
                  <div className=" flex justify-start items-center">
                  <div className="flex">
                <Image preview={false} alt="feedback" src={feedbackImage.src} width={50} height={50}/>
                </div>
                <div className="ml-2">
                    <p className="font-bold text-sm text-[#2a3573]">Octavia John</p>
                    <p className="text-[#9e9e9e] text-xs">octaviajohn@gmail.com</p>
                </div>
                  </div>
                  <div className="text-[#9e9e9e] mt-6 font-light text-sm">
                    <p>It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.</p>
                  </div>
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <button className="bg-[#ff3b30] text-white w-full mt-4 h-10 rounded-lg" >Delete</button>
                  </Col>
                  <Col span={12}>
                    <button className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7]  text-white w-full mt-4 h-10 rounded-lg" onClick={showModal}>Reply</button>
                  </Col>
                </Row>
            </Col>
            <Col className="bg-white p-4 rounded-xl mb-4" xxl={7} xl={7} lg={7} md={11} sm={11} xs={24}>
                <div>
                  <div className="flex justify-end font-medium text-sm text-[#9e9e9e]">
                  October 5, 2024
                  </div>
                  <div className=" flex justify-start items-center">
                  <div className="flex">
                <Image preview={false} alt="feedback" src={feedbackImage.src} width={50} height={50}/>
                </div>
                <div className="ml-2">
                    <p className="font-bold text-sm text-[#2a3573]">Octavia John</p>
                    <p className="text-[#9e9e9e] text-xs">octaviajohn@gmail.com</p>
                </div>
                  </div>
                  <div className="text-[#9e9e9e] mt-6 font-light text-sm">
                    <p>It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.</p>
                  </div>
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <button className="bg-[#ff3b30] text-white w-full mt-4 h-10 rounded-lg" >Delete</button>
                  </Col>
                  <Col span={12}>
                    <button className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7]  text-white w-full mt-4 h-10 rounded-lg" >Reply</button>
                  </Col>
                </Row>
            </Col>
        </Row>
        </div>
        <div>
          <p className="font-semibold text-base mt-3">Showing 01 of 01</p>
        </div>
        </div>

    </DashboardLayout>
    <BasicModal
            className='p-12 text-[#9c9c9c]'
                centered={true}
                width='600px'
                modalType='basicModal'
                title={'Delete Feedback'}
                text='Are you sure you want to delete this User Feedback?'
                descriptionStyle={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: '400', marginTop: '10px', marginBottom: '20px' }}
                isModalOpen={logoutModal}
                isFooter={true}
                rightButtonText='Yes'
                leftButtonText="Cancel"
                rightButtonStyle={{ backgroundColor: '#ff3b30', color: 'white', fontWeight: '500', paddingTop: '1rem', paddingBottom: '1rem' }}
                leftButtonStyle={{ backgroundColor: '#e0e0e0', color: '#9c9c9c', fontWeight: '500' }}
                onClickLeft={() => setLogoutModal(false)}
                onClickRight={() => setLogoutModal(false)}
                onCancel={() => setLogoutModal(false)}
            />

<Modal className="my-own-moodal"
        open={open}
        title="Feedback Reply"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key={"button"}
          className="w-4/5 h-12 mt-4 text-base font-semibold rounded-lg bg-black text-white mb-4"
            onClick={handleOk}
          >
            Send Reply
          </button>
        ]}
      >
        <div className="w-full">
          <div className="w-full flex ml-12 my-6">
           <div> 
           <p className="font-semibold text-lg text-[#2a3573]">To: </p>
           </div>
           <div className="ml-4">
           <p className="font-bold text-xl text-[#2a3573]">Octavia John</p>
           <p className="text-[#9e9e9e] text-xs">octaviajohn@gmail.com</p>
           </div>
          </div>
          <div className="w-full flex justify-center">
          <textarea value={messageInput} onChange={handleMessageInput} placeholder={"Type a Message Here"} minLength={5} maxLength={300} required className="w-4/5 px-2 py-3 rounded outline-0 h-48 bg-[#f7f9fa] my-textarea"  />

          </div>
        </div>

      </Modal>
    </>
  );
}
