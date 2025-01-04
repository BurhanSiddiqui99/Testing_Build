import React from "react";
import { Col, Row, Card, Typography, Image, Input, Button, Modal } from "antd";
import { activeUser, ageImage, backButton, child1, completeQuiz, feedbackImage, totalEarningDashboard,totalUsersDashboard, userDetail, userImage } from "../../../../../assets/images";
import { useForm, Controller } from 'react-hook-form';
import Colors from "../../../../../config/colors";
import {yupResolver} from '@hookform/resolvers/yup';
import Link from "next/link";
import DashboardLayout from '../../../../../components/Layout/dashboardLayout';
import {data} from "../data"; 
// import SideBar from '../../../../components/Layout/SideBar'
const { Title, Paragraph } = Typography;
export default function userDetails({params}: any) {
  console.log({params})
  console.log(data,"DAtttttttttttt")
  // const router = useRouter();
  // const [logoutModal, setLogoutModal] = useState(false);
//   const logoutModalViewer = () => {
//     setLogoutModal(true);
// };

const logOut = () => {
    // localStorage.removeItem('authToken');
    // router.push('/auth/login');
};
// const [loading, setLoading] = useState(false);
// const [open, setOpen] = useState(false);
// const [messageInput, setMessageInput] = useState('');
// eslint-disable-next-line
// const handleMessageInput = (e:any) => {
//   setMessageInput(e.target.value);
// }

// const replyModalData = () => {
  
// }
  // const showModal = () => {
  //   setOpen(true);
  // };

  // const handleOk = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     alert(messageInput);
  //     setLoading(false);
  //     setOpen(false);
  //   }, 3000);
  // };

  // const handleCancel = () => {
  //   setOpen(false);
  // };

  return (
    <>
    <DashboardLayout>
        <div className="bg-[#f5f5f5] h-full p-8">
            
        
        <div className=" z-50 mb-6">
            <div>
                <p className="mb-2 text-[#afb2bd]">Pages / User Management / Octavia John</p>
                <p className="font-extrabold text-3xl">User Management</p>
            </div>
            <div></div>
        </div>
        <div className="w-full bg-white p-6 rounded-2xl">
          <div className="flex items-center mb-8">
            <Link href="/admin/user">
          <Image preview={false} src={backButton.src} alt="backButton" className="cursor-pointer"/>
            </Link>
          <p className="font-normal text-2xl ml-3">User Details</p>
          </div>
        <div className="block sm:flex items-center mb-5">
          <Image preview={false} src={userDetail.src} alt="userDetail" width={100} height={100} />
          <div className="sm:ml-6">
          <p className="font-extrabold text-3xl">Octavia John</p>
          <p className="mb-2 text-[#afb2bd]">octaviajohn@gmail.com</p>
          </div>
        </div>
        <div>
        <p className="font-semibold text-base">Personal Details</p>
        </div>
       <Row className="mt-5">
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">S.No</p>
          <p className="font-medium text-lg">1011</p>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">First Name</p>
          <p className="font-medium text-lg">Octavia</p>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">Last Name</p>
          <p className="font-medium text-lg">John</p>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">Status</p>
          <div className="flex items-center">
            <Image src={activeUser.src} alt="status" width={30} height={30} preview={false} />
            <p className="font-medium text-lg ml-2 text-[#b8d63e]">Active</p>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">Total Profile Created</p>
          <p className="font-medium text-lg">02</p>
        </Col>
       </Row>
       <div>
        <p className="font-semibold text-base mt-5">Childrens Profiles</p>
        </div>
        <Row gutter={16}>
          <Col xxl={7} xl={7} lg={8} md={8} sm={11} xs={24} className="bg-[#f2f2f2] p-2 rounded-lg flex items-center justify-center mr-4 xs:mr-0 mb-4 xs:mb-0">
          <div className="mr-4">
            <Image preview={false} src={child1.src} alt="Children" width={90} height={90} />
          </div>
          <div>
            <p className="font-normal text-xs text-[#B53689]">Eth_Johnson12</p>
            <p className="font-extrabold text-lg text-[#0C1927]">Ethan Johnson</p>
            <div className="flex items-center">
              <Image preview={false} src={ageImage.src} alt="age" width={10} height={10} />
            <p className="font-normal text-xs">Age: 10</p>
            </div>
            <div className="flex items-center">
              <Image preview={false} src={completeQuiz.src} alt="age" width={10} height={10} />
            <p className="font-normal text-xs">Quiz Completed: 05</p>
            </div>
          </div>
          </Col>
          <Col xxl={7} xl={7} lg={8} md={8} sm={11} xs={24} className="bg-[#f2f2f2] p-2 rounded-lg flex items-center justify-center mr-4 xs:mr-0 mb-4 xs:mb-0">
          <div className="mr-4">
            <Image preview={false} src={child1.src} alt="Children" width={90} height={90} />
          </div>
          <div>
            <p className="font-normal text-xs text-[#B53689]">Eth_Johnson12</p>
            <p className="font-extrabold text-lg text-[#0C1927]">Ethan Johnson</p>
            <div className="flex items-center">
              <Image preview={false} src={ageImage.src} alt="age" width={10} height={10} />
            <p className="font-normal text-xs">Age: 10</p>
            </div>
            <div className="flex items-center">
              <Image preview={false} src={completeQuiz.src} alt="age" width={10} height={10} />
            <p className="font-normal text-xs">Quiz Completed: 05</p>
            </div>
          </div>
          </Col>
        </Row>
        </div>
        </div>

    </DashboardLayout>
    </>
  );
}



export async function generateStaticParams() {
  // const users = [{id: "1011"}]
  
  return data?.map((post) => ({
    id: post.id.toString(),
  }))
}
