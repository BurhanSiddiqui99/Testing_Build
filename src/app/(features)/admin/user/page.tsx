"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Image, Tooltip, TableProps, Input, } from "antd";
import { deleteTableItem, SearchIcon, userImage, viewUserProfile } from "../../../../assets/images";
import { useForm, Controller } from "react-hook-form";
import Colors from "../../../../config/colors";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { userLogin } from "../../../../config/Schema/Schema";
import DashboardLayout from "../../../../components/Layout/dashboardLayout";
import TableWrapper from "../../../../components/Grid";
import '../../../globals.css';
import Toggle from '../../../../components/Toggle/Toggle'
import { FaAngleDown, FaAngleUp, FaGreaterThan, FaLessThan, FaLock, FaUser  } from "react-icons/fa";
import BasicModal from "./BasicModal";
import { redirect } from 'next/navigation'
import { data } from "./data";
interface TableColumnsPropType {
  key: string;
  id: number;
  fullName: string;
  email: string;
  profilesCreated: number;
  image: string;
  status: string;
}

export default function UserManagement() {
  
  const validationSchema = userLogin;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const [showHide, setShowHide] = useState('none');
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [userValue, setUserValue] = useState(false);
  const [deactivateUserModal, setDeactivateUserModal] = useState(false);
  const deleteUserModalViewer = () => {
    setDeleteUserModal(true);
};

const logOut = () => {
    // localStorage.removeItem('authToken');
    // router.push('/auth/login');
};


// eslint-disable-next-line
  const SwitchChanger = (id: any, value: any) => {
    setUserValue(value);
    setDeactivateUserModal(true);
    }
  

  const columnsUsers: TableProps<TableColumnsPropType>['columns'] = [
    {
      title: 'S.no',
      dataIndex: 'id',
      align: 'left',
      render: (text, record) => {
        return (
          <span className='cursor-pointer'>{record?.id}</span>
        )
      }
    },
    {
      title: 'Name',
      dataIndex: 'fullName',
      align: 'left',


      render: (text, record) => {
        return (

          record?.fullName?.length > 12 ?
            <Col lg={24} className='flex  items-center  sm:justify-start cursor-pointer' >
              {record?.image ? <Image alt="UserImage" src={record?.image} preview={false} /> : <Image alt="UserImage" src={userImage.src} preview={false}/>}
              <Tooltip placement="bottom" title={record?.fullName}>
                <span className='pl-3' >{record?.fullName?.slice(0, 13) + '...'}</span>
              </Tooltip>
            </Col> :
            <Col lg={24} className='flex items-center  sm:justify-start cursor-pointer'>
              {record?.image ? <Image alt="UserImage" src={record?.image}  preview={false}/> : <Image alt="UserImage" src={userImage.src} preview={false}/>}
              <span className='pl-3' >{record?.fullName}</span>
            </Col>


        );
      },
    },

    {
      title: 'Email',
      dataIndex: 'email',
      align: 'left',
      render: (text, record) => {
        return (
          <Col>
            <span>{record?.email}</span>
          </Col>
          // console.log("This is the record of report",record)
        )
      }
    },
    {
      title: 'Profiles Created',
      dataIndex: 'profilesCreated',
      align: 'left',
      render: (text, record) => {
        return (
          <Col>
            <span>{record?.profilesCreated ? record.profilesCreated : '0'}</span>
          </Col>
        )
      }

    },
    
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'left',

      render: (text, record) => {
        return (
          <Row
            justify={'start'}
            align='bottom'
            className='gap-2 flex items-center justify-between'  >
            {/* <p 
              className='px-5 text-center py-2 rounded-md inline whitespace-nowrap'>
              {record?.status === 'Active' ? 'Active' : 'In-Active'}
            </p> */}
            {/* <Switch onChange={(value) => SwitchChanger(record?.id, value)} className="mt-2" /> */}
            {/* <Switch.Basic
              onChange={(value) => SwitchChanger(record?.id, value)}
              className="mt-2"
              checked={record?.status === 1 ? true : false}
              style={{ background: record?.status === 1 ? Colors.Green : Colors.Error }} /> */}
            <Toggle
              checked={record?.status === 'Active' ? true : false}
              onChange={(value) => SwitchChanger(record?.id, value)}
              className={`${record?.status == 'Active' ? "border-switch" : "border-unswitch"}`}
            />
          </Row>
        )
      }
    },
    {
      title: 'Action',
      dataIndex: '',
      align: 'left',

      render: (text, record) => {
        return (
          <Row className="flex">
            <div className="mr-3 cursor-pointer"><Image alt="UserDelete" src={deleteTableItem.src} preview={false} width={36} height={36} onClick={deleteUserModalViewer}/></div>
            <Link href={`/admin/user/${record?.id}`} className="mr-3">
            <Image alt="UserDetails" src={viewUserProfile.src} preview={false} width={36} height={36} /></Link>
          </Row>
        )
      }

    }

  ];

 
  return (
    <>
      <DashboardLayout>
        <div className="p-8 ">
        <div className="bg-[#f5f5f5] z-50 mb-6 w-full flex justify-between items-center">
            <div>
                <p className="mb-2 text-[#afb2bd]">Pages / User Management</p>
                <p className="font-extrabold text-3xl">User Management</p>
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
          <div className="bg-white p-6 rounded-2xl">
            <div className="sm:flex block justify-between">
            <p className="font-semibold text-2xl mb-8">All Users ({data?.length})</p>
                 <Input placeholder="Search by name" prefix={<Image preview={false} src={SearchIcon.src} />} className="h-8 w-60 bg-[#f5f8ff] border border-white"/>
            </div>
            <Row className="w-full">
              <Col span={24}>
              <TableWrapper
                tableColumns={columnsUsers}
                tableData={data}
                // loading={usersDataLoader && <Loader.Circular size={60} color={Colors.WhiteOpacity(0.7)} />}
                // bordered={true}
                // currentPage={1}
                // total={12}
                // pageSize={10}
                
                rowClassName={'row-antd'}
                // handlePaginationChange={paginationHandler}

              /></Col>
              
            </Row>
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <p className="font-semibold text-base text-[#4e4d6e]">Showing 01 of 02</p>
            </div>
            <div className="flex border border-[#4e4d6e] bg-white w-14 px-1 items-center justify-between rounded-lg">
                <div className="cursor-pointer"><FaLessThan size={16} className="text-[#4e4d6e] mt-1 pb-1"/></div>
                <div>
                  <p className="font-semibold text-base text-[#4e4d6e] pb-1">|</p>
                </div>
                <div className="cursor-pointer"><FaGreaterThan size={16} className="text-[#4e4d6e] mt-1 pb-1"/></div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <BasicModal
            className='p-12 text-[#9c9c9c]'
                centered={true}
                width='600px'
                modalType='basicModal'
                title={'Delete User'}
                text='Are you sure you want to delete this User?'
                descriptionStyle={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: '400', marginTop: '10px', marginBottom: '20px' }}
                isModalOpen={deleteUserModal}
                isFooter={true}
                rightButtonText='Yes'
                leftButtonText="Cancel"
                rightButtonStyle={{ backgroundColor: '#ff3b30', color: 'white', fontWeight: '500', paddingTop: '1rem', paddingBottom: '1rem' }}
                leftButtonStyle={{ backgroundColor: '#e0e0e0', color: '#9c9c9c', fontWeight: '500' }}
                onClickLeft={() => setDeleteUserModal(false)}
                onClickRight={() => setDeleteUserModal(false)}
                onCancel={() => setDeleteUserModal(false)}
            />
      <BasicModal
            className='p-12 text-[#9c9c9c]'
                centered={true}
                width='600px'
                modalType='basicModal'
                title={`${userValue  ? 'Activate' : 'Deactivate'} User` }
                text={`Are you sure you want to ${userValue  ? 'activate' : 'deactivate'} this User?`}
                descriptionStyle={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: '400', marginTop: '10px', marginBottom: '20px' }}
                isModalOpen={deactivateUserModal}
                isFooter={true}
                rightButtonText='Yes'
                leftButtonText="Cancel"
                rightButtonStyle={{ backgroundColor: '#ff3b30', color: 'white', fontWeight: '500', paddingTop: '1rem', paddingBottom: '1rem' }}
                leftButtonStyle={{ backgroundColor: '#e0e0e0', color: '#9c9c9c', fontWeight: '500' }}
                onClickLeft={() => setDeactivateUserModal(false)}
                onClickRight={() => setDeactivateUserModal(false)}
                onCancel={() => setDeactivateUserModal(false)}
            />
    </>
  );
}
