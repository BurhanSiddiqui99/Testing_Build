"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography, Image, Input, Modal, Spin, Avatar, Select } from "antd";
import { sendMsg } from "../../../../assets/images";
import { UserOutlined } from "@ant-design/icons";
import DashboardLayout from '../../../../components/Layout/dashboardLayout';
import BasicModal from "./BasicModal";
import { useRouter, redirect } from 'next/navigation';
import { FaAngleDown, FaAngleUp, FaGreaterThan, FaLessThan, FaLock, FaUser } from "react-icons/fa";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/index";
import { decrement, getUsersFeedback, increment, offsetSave, resetValue, userFeedbackDelete, getFeedbackReplies, userFeedbackHardDelete, userFeedbackReply } from "../../../store/authSlice";
import { toast } from "react-toastify";
import dayjs from "dayjs";


type Media = {
  url: string;
  id: number;
  type: string;
  format: string;
  createdAt: string;
  updatedAt: string;
  modelHasMedia: {
    mediaId: number;
    modelType: string;
    modelId: number;
    createdAt: string;
    updatedAt: string;
  };
};

type FeedbackUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  media: Media[];
};

type Feedback = {
  id: number;
  content: string;
  isReplied: boolean;
  createdAt: string;
  user: FeedbackUser;
};


interface FeedbackReply {
  id: number;
  content: string;
  createdAt: string;
}

interface payloadType {
  offset: number;
  limit: number;
  filterBy: string;
}
export default function Dashboard() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { feedbackList, loader, value, user, feedbackReplies, feedbackLoader } = useAppSelector((state) => state.login);
  const feedbackOptions = [
    { value: '', label: 'All' },
    { value: 'replied', label: 'Replied' },
    { value: 'deleted', label: 'Deleted' },
    { value: 'outstanding', label: 'Outstanding' },
  ]
  
  const [showHide, setShowHide] = useState('none');
  const [open, setOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteID, setDeleteID] = useState<number | null>(null);
  const [state, setState] = useState<payloadType>({
      offset: 0,
      limit: 10,
      filterBy: ''
    });
  const logoutModalViewer = (data:number) => {
    setDeleteID(data)
    setLogoutModal(true);
};

const deleteUser = () => {
    const payload = state;
    const payloads = deleteID;
    if (state?.filterBy === "deleted") {
      dispatch(
        userFeedbackHardDelete({
          payloads,
          cb: () => {
            toast.success("Feedback Permanently Deleted Successfully", {
              position: "top-center",
            });
            dispatch(getUsersFeedback({ payload }));
            setDeleteID(null);
            setLogoutModal(false);
          },
        })
      );
    } else {
      dispatch(
        userFeedbackDelete({
          payloads,
          cb: () => {
            toast.success("Feedback Deleted Successfully", {
              position: "top-center",
            });
            dispatch(getUsersFeedback({ payload }));
            setDeleteID(null);
            setLogoutModal(false);
          },
        })
      );
    }
    
  };


  useEffect(() => {
    const payload = state;
    dispatch(
      getUsersFeedback({
            payload,
            cb: () => {
              dispatch(resetValue());
              dispatch(offsetSave(null))
            },
          })
        )
  }, [])

  useEffect(() => {
    const payload = { offset: state.offset, limit: 10, filterBy: state.filterBy }
    dispatch(
      getUsersFeedback({
            payload,
            cb: () => {
              dispatch(resetValue());
              dispatch(offsetSave(null))
            },
          })
        )

  }, [state.filterBy])


const handleMessageInput = (e:any) => {
  setMessageInput(e.target.value);
}

  const showModal = (data: number) => {
    dispatch(getFeedbackReplies({payload: data}))
    setOpen(true);
  };

  const handleOk = (data: number) => {
    const payloads = { reply: messageInput, id: data }
    dispatch(userFeedbackReply({payloads, cb: () => {
      toast.success("Feedback Replied Successfully", {
              position: "top-center",});
      const payload = { offset: state.offset, limit: 10, filterBy: state.filterBy }
      dispatch(getUsersFeedback({payload}))
      setOpen(false);
      setMessageInput('');
    }}))
  };

  const handleCancel = () => {
    setOpen(false);
  };
    const moreUserData = () => {
      const payload = { offset: value * 10, limit: 10, filterBy: state.filterBy };
      dispatch(
        getUsersFeedback({
          payload,
          cb: () => {
            setState((prev: payloadType) => ({ ...prev, offset: value * 10 }));
            dispatch(increment());
          },
        })
      );
    };
    const lessUserData = () => {
        const payload = { offset: state.offset - 10, limit: 10, filterBy: state.filterBy };
        dispatch(
          getUsersFeedback({
            payload,
            cb: () => {
              setState((prev: payloadType) => ({ ...prev, offset: state.offset - 10 }));
              dispatch(decrement());
            },
          })
        );
    };

  if (loader) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
    <DashboardLayout>
        <div className="p-8 bg-[#f5f5f5]">
            
        
        <div className=" z-50 mb-6 w-full flex justify-between items-center">
            <div>
                <p className="mb-2 text-[#afb2bd]">Pages / Feedback Management</p>
                <p className="font-extrabold text-3xl">Feedback Management</p>
            </div>
            <div className="bg-white flex items-center p-3 rounded-3xl cursor-pointer" onClick={() => {setShowHide(`${showHide === 'none' ? 'flex' : 'none'}`)}}>
            {user?.media?.length ? <Image preview={false} alt="admin" src={user?.media[0]?.url} width={40} height={40} className="rounded-full" /> : <Avatar size={40} icon={<UserOutlined />} />}
                <p className="text-black flex justify-end items-center font-semibold text-sm mr-2 ml-2">{user?.firstName} {user?.lastName}</p>
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
          <div className="flex justify-between">
        <p className="font-semibold text-2xl mb-8">Feedbacks ({feedbackList?.data?.feedbacksCount})</p>
        <Select
            defaultValue={state.filterBy}
            onChange={(value) => setState((prev : payloadType) => ({ ...prev, filterBy: value }))}
            className="w-[130px]"
            options={feedbackOptions}
            size="small"
          /></div>
        <Row className="w-full flex mb-4 sm:mb-0 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-md justify-around" >
          {feedbackList?.data?.feedbacks?.map((data:Feedback) => {
          const formattedDate = dayjs(data?.createdAt).format('MMMM DD, YYYY')
          return(
            <Col key={data?.id} xxl={7} xl={7} lg={7} md={11} sm={11} xs={24}>
              <div className="bg-white p-4 rounded-xl mb-4">
                <div>
                  <div className="flex justify-end font-medium text-sm text-[#9e9e9e]">
                  {formattedDate}
                  </div>
                  <div className=" flex justify-start items-center">
                  <div className="flex">
                  {data?.user?.media?.length ? <Image preview={false} alt="admin" src={data?.user?.media[0]?.url} width={50} height={50} className="rounded-full" /> : <Avatar size={50} icon={<UserOutlined />} />}
                </div>
                <div className="ml-2">
                    <p className="font-bold text-sm text-[#2a3573]">{data?.user?.firstName?.replace(/\b\w/g, (char : string) => char.toUpperCase())} {data?.user?.lastName?.replace(/\b\w/g, (char : string) => char.toUpperCase())}</p>
                    <p className="text-[#9e9e9e] text-xs">{data?.user?.email}</p>
                </div>
                  </div>
                  <div className="text-[#9e9e9e] mt-6 font-light text-sm break-words whitespace-pre-wrap">
                    <p>{data?.content}</p>
                  </div>
                </div>
                <Row gutter={16}>
                  <Col span={state?.filterBy != 'deleted' ? 12 : 24}>
                    <button className="bg-[#ff3b30] text-white w-full mt-4 h-10 rounded-lg" onClick={() => logoutModalViewer(data?.id)}>Delete</button>
                  </Col>
                  {state?.filterBy != 'deleted' && <Col span={12}>
                    <button className={`${data?.isReplied ? 'bg-[#c9c9c9] text-white' : 'bg-gradient-to-r from-[#8052A0] to-[#55A0D7]  text-white'} bg-[#c9c9c9] text-white w-full mt-4 h-10 rounded-lg`}  onClick={() => showModal(data?.id)}>{data?.isReplied ? 'Replied' : 'Reply'}</button>
                  </Col>}
                </Row>
                </div>
            </Col>)})}
            
        </Row>
        </div>
        <div className="flex justify-between mt-3">
                    <div>
                      <p className="font-semibold text-base text-[#4e4d6e]">
                        Showing {value} of {Math.ceil((feedbackList?.data?.feedbacksCount ?? 0) / 10)}
                      </p>
                    </div>
                    <div className="flex border border-[#4e4d6e] bg-white w-14 px-1 items-center justify-between rounded-lg">
                      <div
                        className={`${
                          value === 1 ? "cursor-not-allowed" : "cursor-pointer"
                        } `}
                        onClick={lessUserData}
                      >
                        <FaLessThan
                          size={16}
                          className={`${
                            value === 1 ? "text-[#c9c9c9]" : "text-[#4e4d6e]"
                          }  mt-1 pb-1`}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-base text-[#4e4d6e] pb-1">|</p>
                      </div>
                      <div
                        className={`${
                          value === Math.ceil((feedbackList?.data?.feedbacksCount ?? 0) / 10)
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        } `}
                        onClick={moreUserData}
                      >
                        <FaGreaterThan
                          size={16}
                          className={`${
                            value === Math.ceil((feedbackList?.data?.feedbacksCount ?? 0) / 10)
                              ? "text-[#c9c9c9]"
                              : "text-[#4e4d6e]"
                          }  mt-1 pb-1`}
                        />
                      </div>
                    </div>
                  </div>
        </div>

    </DashboardLayout>
    <BasicModal
    className='p-12 text-[#9c9c9c]'
    centered={true} width='600px' modalType='basicModal' title={'Delete Feedback'}
    text='Are you sure you want to delete this User Feedback?'
    descriptionStyle={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: '400', marginTop: '10px', marginBottom: '20px' }}
    isModalOpen={logoutModal}
    isFooter={true} rightButtonText='Yes' leftButtonText="Cancel"
    rightButtonStyle={{ backgroundColor: '#ff3b30', color: 'white', fontWeight: '500', paddingTop: '1rem', paddingBottom: '1rem' }}
    leftButtonStyle={{ backgroundColor: '#e0e0e0', color: '#9c9c9c', fontWeight: '500' }}
    onClickLeft={() => setLogoutModal(false)}
    onClickRight={() => deleteUser()}
    onCancel={() => setLogoutModal(false)} />

    <Modal className="my-own-moodal"
        open={open}
        title={feedbackLoader ? 'Loading...' : feedbackReplies?.data?.user?.firstName?.replace(/\b\w/g, (char : string) => char.toUpperCase()) + ' ' + feedbackReplies?.data?.user?.lastName?.replace(/\b\w/g, (char : string) => char.toUpperCase())}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          
          <Input key="message-input" className="m-4" placeholder="Send Message..." suffix={
            
          <button key={"button"}
          className=" text-base font-semibold rounded-lg text-white flex"
          onClick={() => feedbackReplies?.data?.id && handleOk(feedbackReplies.data.id)}
          >
            <Image src={sendMsg.src} alt="sendMsg" preview={false} />
          </button>
          } required  value={messageInput} onChange={handleMessageInput} minLength={5} maxLength={300}/>
        ]}
      >
        {feedbackLoader ? <Spin size="large" /> : 
        (<>
        <div><p className="flex mx-4 text-sm mt-2 mb-2">{dayjs(feedbackReplies?.data?.createdAt).format('MMMM DD, YYYY hh:mm A')}</p></div>
        <div className="flex ml-2">
        {feedbackReplies?.data?.user?.media?.length ? <Image preview={false} alt="admin" src={feedbackReplies?.data?.user?.media[0]?.url} width={30} height={30} className="rounded-full" /> : <Avatar size={30} icon={<UserOutlined />} />}
        <div className="w-4/5 bg-slate-400 p-2 mx-4 rounded-lg">
          <p className="text-left text-sm">{feedbackReplies?.data?.content}</p>
        </div> 
        </div>
        {feedbackReplies?.data?.feedbackReplies && feedbackReplies?.data?.feedbackReplies?.map((data:FeedbackReply) => (
          <>
            <p className="flex justify-end mx-4 text-sm mt-2">{dayjs(data?.createdAt).format('MMMM DD, YYYY hh:mm A')}</p>
          <div className="flex justify-end mt-2">
          <div className="w-4/5 bg-slate-400 p-2 mx-4 rounded-lg">
          <p className="text-right text-sm">{data?.content}</p>
        </div> </div></>
        )
        )}
      </>)
        }
    </Modal>
    </>
  );
}
