// import React from 'react'
// import { Layout, Avatar } from 'antd'
// import Colors from '../../config/colors'
// import Button from '../Button'
// import { useNavigate } from 'react-router'


// // REACT ICONS
// import { UserOutlined } from '@ant-design/icons';



// const NavHeader = () => {
//     const { Header } = Layout;
//     const navigate = useNavigate();
//     const userData = JSON.parse(localStorage.getItem('user'));
//     return (
//         <Header
//             className='flex justify-end items-center py-0 px-4'
//             style={{
//                 background: Colors.White,
//             }}
//         >

//             <Button.Basic
//                 onClick={() => navigate('/user-profile')}
//                 className="flex items-center gap-1"
//                 buttonStyle={{border:'1px solid #E2EECA',height:'50px'}}
//                 icon={userData?.imageUrl ? <Avatar size={'large'} src={userData?.imageUrl} /> : <Avatar size={'large'} icon={<UserOutlined />} />}
//                 text={userData?.username ? userData?.username : 'Admin'} 
//                 size={'large'} 
//             />

//         </Header>
//     )
// }

// export default NavHeader

// // user-button flex items-center justify-center h-14 gap-1.5

