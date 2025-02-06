import React from 'react';
import { Col, Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { activeUser, ageImage, backButton, child1, completeQuiz, disableUser, feedbackImage, totalEarningDashboard,totalUsersDashboard, userDetail, userImage } from "../../../../../assets/images";

interface UserProfileProps {
  data: {
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
}

const UserProfile: React.FC<UserProfileProps> = ({ data }) => {
  const birthDate = new Date(data.dob ?? '');
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if the birthday hasn't occurred yet this year
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <Col xxl={7} xl={7} lg={8} md={8} sm={11} xs={24} className="bg-[#f2f2f2] p-2 rounded-lg flex items-center justify-center mr-4 xs:mr-0 mb-4 xs:mb-0">
      <div className="mr-4">
        {data?.media ? (
          <Image preview={false} src={data?.media[0]?.url} className="rounded-full" alt="Children" width={90} height={90} />
        ) : (
          <Avatar size={90} icon={<UserOutlined />} />
        )}
      </div>
      <div>
        <p className="font-normal text-xs text-[#B53689]">{data?.email}</p>
        <p className="font-extrabold text-lg text-[#0C1927]">
          {data?.firstName?.replace(/\b\w/g, (char: string) => char.toUpperCase())}{' '}
          {data?.lastName?.replace(/\b\w/g, (char: string) => char.toUpperCase())}
        </p>
        <div className="flex items-center">
          <Image preview={false} src={ageImage.src} alt="age" width={10} height={10} />
          <p className="font-normal text-xs">Age: {age}</p>
        </div>
        <div className="flex items-center">
          <Image preview={false} src={completeQuiz.src} alt="quiz" width={10} height={10} />
          <p className="font-normal text-xs">Quiz Completed: {data?.quizzesCompleted}</p>
        </div>
      </div>
    </Col>
  );
};

export default UserProfile;
