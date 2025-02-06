import React from "react";
import { Col, Row, Image,Spin, Avatar } from "antd";
import { activeUser, backButton, disableUser} from "../../../../../assets/images";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import DashboardLayout from '../../../../../components/Layout/dashboardLayout';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../../store/index";
import UserProfile from "./userProfile";
import axios from "axios";
import { ApiCaller } from "../../../../../config";
type User = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone?: string | null; // Optional and nullable
  dob?: string | null; // Optional and nullable
  profilePic?: string | null; // Optional and nullable
  quizzesCompleted: number;
  createdAt: string; // Date string
  updatedAt: string; // Date string
  roleId: number;
  media?: { url: string }[]; // Optional array of media objects
};

async function getUsers() {
  const res: any = await fetch("https://dailytable-api.5stardesigners.net:5011/qa/api/v1/admin/users", 
    {
      // set x auth token
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiU3VwZXIiLCJsYXN0TmFtZSI6IkFkbWluIiwiZW1haWwiOiJkYWlseV90YWJsZXNfYWRtaW5AeW9wbWFpbC5jb20iLCJyb2xlSWQiOjEsImNyZWF0ZWRBdCI6IjIwMjUtMDEtMzFUMTI6NDI6MjMuMDAwWiIsIm1lZGlhIjpbXSwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiY3JlYXRlZEF0IjoiMjAyNS0wMS0zMVQxMjo0MjoyMy4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMS0zMVQxMjo0MjoyMy4wMDBaIn0sImlhdCI6MTczODU5Njk4N30.n7YVg9aML-TkWlLN-OUyKaPquaiMwH-8wtZecNU86eU"
      }
    }
  )
  const data = await res?.json()
  return data?.data?.users
}
async function getUserDetail(id: number) {
  const res: any = await fetch(`https://dailytable-api.5stardesigners.net:5011/qa/api/v1/admin/user/${id}`, 
    {
      // set x auth token
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiU3VwZXIiLCJsYXN0TmFtZSI6IkFkbWluIiwiZW1haWwiOiJkYWlseV90YWJsZXNfYWRtaW5AeW9wbWFpbC5jb20iLCJyb2xlSWQiOjEsImNyZWF0ZWRBdCI6IjIwMjUtMDEtMzFUMTI6NDI6MjMuMDAwWiIsIm1lZGlhIjpbXSwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiY3JlYXRlZEF0IjoiMjAyNS0wMS0zMVQxMjo0MjoyMy4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMS0zMVQxMjo0MjoyMy4wMDBaIn0sImlhdCI6MTczODU5Njk4N30.n7YVg9aML-TkWlLN-OUyKaPquaiMwH-8wtZecNU86eU"
      }
    }
  )
  const data = await res?.json()
  return data?.data
}
export default async function userDetails({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  const userDetails = await getUserDetail(id)
  console.log({userDetails})

  // const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  // const { userDetails, loader } = useAppSelector((state) => state.login);
  

  // if (loader) {
  //   return (
  //     <div className="fixed inset-0 flex items-center justify-center bg-white">
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  return (
    <>
    <DashboardLayout>
        <div className="bg-[#f5f5f5] h-full p-8">
            
        
        <div className=" z-50 mb-6">
            <div>
                <p className="mb-2 text-[#afb2bd]">Pages / User Management / {userDetails?.baseUser?.firstName?.replace(/\b\w/g, (char : string) => char.toUpperCase())} {userDetails?.baseUser?.lastName?.replace(/\b\w/g, (char : string) => char.toUpperCase())}</p>
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
          {
        userDetails?.baseUser?.media?.length ? <Image preview={false} src={userDetails?.baseUser?.media[0]?.url} className="rounded-full" alt="Children" width={90} height={90} /> : 
        <Avatar size={90} icon={<UserOutlined />} /> }
          <div className="sm:ml-6">
          <p className="font-extrabold text-3xl">{userDetails?.baseUser?.firstName?.replace(/\b\w/g, (char : string) => char.toUpperCase())} {userDetails?.data?.baseUser?.lastName?.replace(/\b\w/g, (char : string) => char.toUpperCase())}</p>
          <p className="mb-2 text-[#afb2bd]">{userDetails?.baseUser?.email}</p>
          </div>
        </div>
        <div>
        <p className="font-semibold text-base">Personal Details</p>
        </div>
       <Row className="mt-5">
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">S.No</p>
          <p className="font-medium text-lg">{userDetails?.baseUser?.id}</p>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">First Name</p>
          <p className="font-medium text-lg">{userDetails?.baseUser?.firstName?.replace(/\b\w/g, (char : string) => char.toUpperCase())}</p>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">Last Name</p>
          <p className="font-medium text-lg">{userDetails?.baseUser?.lastName?.replace(/\b\w/g, (char : string) => char.toUpperCase())}</p>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">Status</p>
          <div className="flex items-center">
            <Image src={userDetails?.baseUser?.family?.isActive ? activeUser.src : disableUser.src} alt="status" width={30} height={30} preview={false} />
            <p className={`"font-medium text-lg ml-2 " ${userDetails?.baseUser?.family?.isActive ? 'text-[#b8d63e]' : 'text-[#FF3B30]'}`}>{userDetails?.baseUser?.family?.isActive ? 'Active' : 'Disable'}</p>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
          <p className="text-[#afb2bd] font-medium text-sm mb-2">Total Profile Created</p>
          <p className="font-medium text-lg">{userDetails?.baseUser?.profilesCreated}</p>
        </Col>
       </Row>

       {userDetails?.rootUser && (<>
        <div>
        <p className="font-semibold text-base mt-5 mb-4">Root User Details</p>
        </div>
        <Row className="flex items-center ">
        <div className="mr-4">
        {
        userDetails?.rootUser?.media?.length ? <Image preview={false} src={userDetails?.rootUser?.media[0]?.url} className="rounded-full" alt="Children" width={90} height={90} /> : 
        <Avatar size={90} icon={<UserOutlined />} /> } </div>
            <div >
              <p className="font-extrabold text-xl text-[#0C1927]">{userDetails?.rootUser?.firstName?.replace(/\b\w/g, (char : string) => char.toUpperCase())} {userDetails?.rootUser?.lastName?.replace(/\b\w/g, (char : string) => char.toUpperCase())}</p>
              <p className="font-medium text-sm text-[#c4c4c4]">{userDetails?.rootUser?.email} </p>
            </div>
        </Row>
        </>)}
       {userDetails?.children?.length > 0 && (<div>
        <p className="font-semibold text-base mt-5 mb-4">Childrens Profiles</p>
        </div>)}



        <Row gutter={16}>
        {userDetails?.children && userDetails?.children?.map((data:User) => 
        <UserProfile data={data} key={data.id} />
        )}
        </Row>
        </div>
        </div>

    </DashboardLayout>
    </>
  );
}



export async function generateStaticParams() {
  const users = await getUsers()
  return users?.map((user: any) => ({
    id: user?.id?.toString(),
  }))
}
