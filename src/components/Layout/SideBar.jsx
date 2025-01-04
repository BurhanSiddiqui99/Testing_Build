'use client';

import React, { useState } from 'react';
import { Layout, Menu, ConfigProvider, Image } from 'antd';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
// import Image from 'next/image';
import BasicModal from '../../components/Modal/BasicModal'; // Update path based on your Next.js structure
import { sidebarLogo, Logo } from '../../assets/images';

// ICONS IMPORT
import { FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import Colors from '../../config/colors'; // Update path based on your Next.js structure
import { LuNotebookPen } from 'react-icons/lu';

const SideBar = () => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const router = useRouter();
    const currentLocation = usePathname();

    const logoutModalViewer = () => {
        setLogoutModal(true);
    };

    const logOut = () => {
        // localStorage.removeItem('authToken');
        router.push('/auth/login');
    };

    const menuItems = [
        {
            key: "1",
            label: <Link href="/admin/dashboard" className='text-base font-normal'>Dashboard</Link>,
            icon: <IoMdHome size={20} color={currentLocation === '/admin/dashboard' ? Colors.sidebarActiveColor : Colors.nonActiveColor} />,
            style: {
                color: currentLocation === '/admin/dashboard' ? Colors.sidebarActiveColor : Colors.nonActiveColor,
                borderRight: currentLocation === '/admin/dashboard' ? `4px solid ${Colors.sidebarActiveColor}` : "",
                borderRadius: '0px',
                width: '100%',
            },
        },
        {
            key: "2",
            label: <Link href="/admin/user">User Management</Link>,
            icon: <FaUser size={20} color={currentLocation === '/admin/user' ? Colors.sidebarActiveColor : Colors.nonActiveColor} />,
            style: {
                color: currentLocation === '/admin/user' ? Colors.sidebarActiveColor : Colors.nonActiveColor,
                borderRight: currentLocation === '/admin/user' ? `4px solid ${Colors.sidebarActiveColor}` : "",
                borderRadius: '0px',
                width: '100%',
            },
        },
        {
            key: "3",
            label: <Link href="/admin/feedback">Feedback Management</Link>,
            icon: <LuNotebookPen size={20} color={currentLocation === '/admin/feedback' ? Colors.sidebarActiveColor : Colors.nonActiveColor} />,
            style: {
                color: currentLocation === '/admin/feedback' ? Colors.sidebarActiveColor : Colors.nonActiveColor,
                borderRight: currentLocation === '/admin/feedback' ? `4px solid ${Colors.sidebarActiveColor}` : "",
                borderRadius: '0px',
                width: '100%',
            },
        },
    ];
    
    return (
        <div>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                theme='light'
                breakpoint='lg'
                onCollapse={() => setCollapsed(!collapsed)}
                width={260}
            >
                <div className="demo-logo-vertical" />
                
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                itemSelectedBg: '',
                                itemSelectedColor: ''
                            },
                        },
                    }}
                >
                    <>
                    {collapsed ? (
                                <Link href="/admin/dashboard">
                                    <Image preview={false} className='mt-12 px-4 mb-8' src={Logo.src} alt="logo" />
                                    {/* <img className='mt-12 w-full h-11 px-4 mb-8' src={Logo.src} alt="icon"/> */}
                                </Link>
                            ) : (
                                <Link href="/admin/dashboard">
                                    <Image preview={false} className='mt-12 px-4 mb-8' src={sidebarLogo.src} alt="logo" />
                                    {/* <img className='mt-12 w-full h-11 px-4 mb-8' src={sidebarLogo.src} alt="logo"/> */}
                                </Link>
                            )}
                    
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        className="h-full"
                        style={{ height: '70vh' }} items={menuItems} /></>
                    {/* <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        className='h-full'
                        style={{ height: '90vh' }}
                    >
                        <>
                            {collapsed ? (
                                <Link href="/admin/dashboard">
                                    <Image className='w-14 h-14 mt-4 ml-4' src={Logo.src} alt="icon" width={56} height={56} />
                                </Link>
                            ) : (
                                <Link href="/admin/dashboard">
                                    <Image className='mt-12 w-full h-11 px-4 mb-8' src={sidebarLogo.src} alt="logo" width={200} height={44} />
                                </Link>
                            )}

                            <Menu.Item
                                style={{
                                    color: currentLocation === '/admin/dashboard' ? Colors.sidebarActiveColor : Colors.nonActiveColor,
                                    borderRight: currentLocation === '/admin/dashboard' ?  `4px solid ${Colors.sidebarActiveColor}` : "",
                                    borderRadius: '0px', width:'100%' 
                                }}
                                className="menu-item"
                                key="1"
                                icon={<IoMdHome size={20} color={currentLocation === '/admin/dashboard' ? Colors.sidebarActiveColor : Colors.nonActiveColor} />}
                            >
                                <Link href="/admin/dashboard">Dashboard</Link>
                            </Menu.Item>
                            <Menu.Item
                                style={{
                                    color: currentLocation === '/admin/user' ? Colors.sidebarActiveColor : Colors.nonActiveColor,
                                    borderRight: currentLocation === '/admin/user' ?  `4px solid ${Colors.sidebarActiveColor}` : "",
                                    borderRadius: '0px', width:'100%' 
                                }}
                                className="menu-item"
                                key="2"
                                icon={<FaUser size={20} color={currentLocation === '/admin/user' ? Colors.sidebarActiveColor : Colors.nonActiveColor} />}
                            >
                                <Link href="/admin/user">Users Management</Link>
                            </Menu.Item>
                            <Menu.Item
                                style={{
                                    color: currentLocation === '/admin/feedback' ? Colors.sidebarActiveColor : Colors.nonActiveColor,
                                    borderRight: currentLocation === '/admin/feedback' ?  `4px solid ${Colors.sidebarActiveColor}` : "",
                                    borderRadius: '0px', width:'100%' 
                                }}
                                className="menu-item"
                                key="3"
                                icon={<LuNotebookPen size={20} color={currentLocation === '/admin/feedback' ? Colors.sidebarActiveColor : Colors.nonActiveColor} />}    >
                                <Link href="/admin/feedback">Feedback Management</Link>
                            </Menu.Item>
                            
                        </>
                    </Menu> */}
                </ConfigProvider>

                <div className='flex items-center justify-start ml-5 gap-1.5'>
                    <IoLogOutSharp size={25} color={Colors.Error} />
                    <span className='cursor-pointer' onClick={logoutModalViewer}>Log Out</span>
                </div>
            </Sider>

            <BasicModal
            className='p-12 text-[#9c9c9c]'
                centered='centered'
                width='600px'
                modalType='basicModal'
                title={'Logging Out'}
                text='Are you sure, you want to logout?'
                descriptionStyle={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: '400', marginTop: '10px', marginBottom: '20px' }}
                isModalOpen={logoutModal}
                isFooter={true}
                rightButtonText='Yes'
                leftButtonText="Cancel"
                rightButtonStyle={{ backgroundColor: '#ff3b30', color: 'white', fontWeight: '500', paddingTop: '1rem', paddingBottom: '1rem' }}
                leftButtonStyle={{ backgroundColor: '#e0e0e0', color: '#9c9c9c', fontWeight: '500' }}
                onClickLeft={() => setLogoutModal(false)}
                onClickRight={logOut}
                onCancel={() => setLogoutModal(false)}
            />
        </div>
    );
};

export default SideBar;