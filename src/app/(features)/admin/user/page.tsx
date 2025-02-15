"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Image, Tooltip, TableProps, Input, Spin, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  deleteTableItem,
  SearchIcon,
  userImage,
  viewUserProfile,
} from "../../../../assets/images";
import Link from "next/link";
import DashboardLayout from "../../../../components/Layout/dashboardLayout";
import TableWrapper from "../../../../components/Grid";
import "../../../globals.css";
import Toggle from "../../../../components/Toggle/Toggle";
import {
  FaAngleDown,
  FaAngleUp,
  FaGreaterThan,
  FaLessThan,
  FaLock,
  FaUser,
} from "react-icons/fa";
import BasicModal from "./BasicModal";
import { redirect } from "next/navigation";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/index";
import {
  getUsers,
  decrement,
  increment,
  resetValue,
  userStatus,
  userDelete, userDetails, offsetSave
} from "../../../store/authSlice";
import { toast } from "react-toastify";
interface TableColumnsPropType {
  key: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilesCreated: number;
  media: { url: string }[];
  family: FamilyPropType;
}

interface FamilyPropType {
  isActive: boolean;
}

interface StateType {
  offset: number;
  limit: number;
  search: string;
}

export default function UserManagement() {
  const dispatch: AppDispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { user, userList, loader, value, offsetValue } = useAppSelector((state) => state.login);
  const [showHide, setShowHide] = useState("none");
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [userValue, setUserValue] = useState<TableColumnsPropType | null>();
  const [deactivateUserModal, setDeactivateUserModal] = useState(false);
  const [state, setState] = useState<StateType>({
    offset: 0,
    limit: 10,
    search: "",
  });

  useEffect(() => {
    if (offsetValue == null) {
    const payload = state;
    dispatch(
      getUsers({
        payload,
        cb: () => {
          dispatch(resetValue());
        },
      })
    );}
    else{
      const payload = {offset: offsetValue, limit: 10, search : ''};
    dispatch(
      getUsers({
        payload,
        cb: () => {
          setState((prev: StateType) => ({ ...prev, offset: offsetValue }));
          dispatch(offsetSave(null))
        },
      })
    );
    }
  }, []);
  

  const deleteUserModalViewer = (data: any) => {
    setUserValue(data);
    setDeleteUserModal(true);
  };

  // eslint-disable-next-line
  const SwitchChanger = (data: any) => {
    setUserValue(data);
    setDeactivateUserModal(true);
  };

  const statusModalClose = () => {
    setUserValue(null);
    setDeactivateUserModal(false);
    setDeleteUserModal(false);
  };

  const updateUserStatus = () => {
    const payload = state;
    const payloads = {
      id: userValue?.id,
      isActive: userValue?.family?.isActive ? false : true,
    }
    dispatch(userStatus({
        payloads,
        cb: () => {
          toast.success("Status Update Successfully", {
                  position: "top-center",});
          dispatch(
            getUsers({payload,
              cb: () => {
                setState((prev: StateType) => ({ ...prev, offset: state.offset + 10 }));
              },
            })
          );
          setDeactivateUserModal(false);
        },
      })
    );
  };


  // initiating debounce
  const searchHandler = (event : any) => {
    const query = event?.target?.value
    dispatch(resetValue())
    const payload = { limit: 10, search: query, offset: 0 };
    setTimeout(() => {
      dispatch(
        getUsers({payload,})
      );
    }, 2000);
    setState({ ...state, search: query, offset: 0 })
  }

  const deleteUser = () => {
    const payload = userList?.data?.users?.length === 1 ? { offset: state.offset - 10, limit: 10, search: state.search } : state;
    if (userList?.data?.users?.length === 1) {
      dispatch(decrement());
    }
    const payloads = userValue?.id;
    dispatch(userDelete({
        payloads,
        cb: () => {
          toast.success("User Deleted Successfully", {
                  position: "top-center",});
          dispatch(
            getUsers({payload, cb: () => {
              setState(payload);
            }})
          );
          setDeleteUserModal(false);
        },
      })
    );
  };


  const moreUserData = () => {
    const payload = { offset: value * 10, limit: 10, search: state.search };
    dispatch(
      getUsers({
        payload,
        cb: () => {
          setState((prev: StateType) => ({ ...prev, offset: value * 10 }));
          dispatch(increment());
        },
      })
    );
  };
  const lessUserData = () => {
      const payload = { offset: state.offset - 10, limit: 10, search: state.search };
      dispatch(
        getUsers({
          payload,
          cb: () => {
            setState((prev: StateType) => ({ ...prev, offset: state.offset - 10 }));
            dispatch(decrement());
          },
        })
      );
  };


  const columnsUsers: TableProps<TableColumnsPropType>["columns"] = [
    {
      title: "S.no",
      dataIndex: "id",
      align: "left",
      render: (text, record) => {
        return <span className="cursor-pointer">{record?.id}</span>;
      },
    },
    {
      title: "Name",
      dataIndex: "fullName",
      align: "left",

      render: (text, record) => {
        const maxLength = 13; // Maximum length for combined names
        const displayName = `${record?.firstName || ""} ${
          record?.lastName || ""
        }`.trim();
        const fullName =
          displayName.length > maxLength
            ? displayName.slice(0, maxLength - 3) + "..."
            : displayName;
        return displayName.length > maxLength ? (
          <Col
            lg={24}
            className="flex  items-center  sm:justify-start cursor-pointer"
          >
            {record?.media ? (
              <Image
                alt="UserImage"
                src={record?.media[0]?.url}
                preview={false}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <Avatar size={40} icon={<UserOutlined />} />
            )}
            <Tooltip placement="bottom" title={displayName}>
              <span className="pl-3">{fullName}</span>
            </Tooltip>
          </Col>
        ) : (
          <Col
            lg={24}
            className="flex items-center  sm:justify-start cursor-pointer"
          >
            {record?.media ? (
              <Image
                alt="UserImage"
                src={record?.media[0]?.url}
                preview={false}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <Image alt="UserImage" src={userImage.src} preview={false} />
            )}
            <span className="pl-3">{fullName}</span>
          </Col>
        );
      },
    },

    {
      title: "Email",
      dataIndex: "email",
      align: "left",
      render: (text, record) => {
        return (
          <Col>
            <span>{record?.email}</span>
          </Col>
        );
      },
    },
    {
      title: "Profiles Created",
      dataIndex: "profilesCreated",
      align: "left",
      render: (text, record) => {
        return (
          <Col>
            <span>
              {record?.profilesCreated ? record.profilesCreated : "0"}
            </span>
          </Col>
        );
      },
    },

    {
      title: "Status",
      dataIndex: "status",
      align: "left",

      render: (text, record) => {
        return (
          <Row
            justify={"start"}
            align="bottom"
            className="gap-2 flex items-center justify-between"
          >
            <Toggle
              checked={record?.family?.isActive === true ? true : false}
              onChange={() => SwitchChanger(record)}  
              className={`${
                record?.family?.isActive === true
                  ? "border-switch"
                  : "border-unswitch"
              }`}
            />
          </Row>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "",
      align: "left",

      render: (text, record) => {
        return (
          <Row className="flex">
            <div className="mr-3 cursor-pointer">
              <Image
                alt="UserDelete"
                src={deleteTableItem.src}
                preview={false}
                width={36}
                height={36}
                onClick={() => deleteUserModalViewer(record)}
              />
            </div>
            <Link href={`/admin/user/${record?.id}`} className="mr-3" onClick={()=> {dispatch(offsetSave(state.offset));}}>
              <Image
                alt="UserDetails"
                src={viewUserProfile.src}
                preview={false}
                width={36}
                height={36}
              />
            </Link>
          </Row>
        );
      },
    },
  ];

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
        <div className="p-8 ">
          <div className="bg-[#f5f5f5] z-50 mb-6 w-full flex justify-between items-center">
            <div>
              <p className="mb-2 text-[#afb2bd]">Pages / User Management</p>
              <p className="font-extrabold text-3xl">User Management</p>
            </div>
            <div
              className="bg-white flex items-center p-3 rounded-3xl cursor-pointer"
              onClick={() => {
                setShowHide(`${showHide === "none" ? "flex" : "none"}`);
              }}
            >
              {user?.media?.length ? <Image preview={false} alt="admin" src={user?.media[0]?.url} width={40} height={40} className="rounded-full" /> : <Avatar size={40} icon={<UserOutlined />} />}
              
              <p className="text-black flex justify-end items-center font-semibold text-sm mr-2 ml-2">
                {user?.firstName} {user?.lastName}
              </p>
              {showHide === "none" ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>

          <div style={{ display: `${showHide}` }} className="justify-end ">
            <div className="bg-white p-4 rounded-2xl absolute z-10 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => redirect("/admin/change-password")}
              >
                <FaLock color="#f25e7c" />
                <p className="font-medium text-sm ml-2 text-[#f25e7c]">
                  Change Password
                </p>
              </div>
              <div
                className="flex items-center mt-4 cursor-pointer"
                onClick={() => redirect("/admin/editprofile")}
              >
                <FaUser color="#f25e7c" />
                <p className="font-medium text-sm ml-2 text-[#f25e7c]">
                  Edit Profile
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <div className="sm:flex block justify-between">
              <p className="font-semibold text-2xl mb-8">
                All Users ({userList?.data?.usersCount})
              </p>
              <Input
                placeholder="Search by name"
                prefix={<Image preview={false} src={SearchIcon.src} />}
                className="h-8 w-60 bg-[#f5f8ff] border border-white"
                value={state.search} onChange={searchHandler}
              />
            </div>
            <Row className="w-full">
              <Col span={24}>
                <TableWrapper
                  tableColumns={columnsUsers}
                  tableData={userList?.data?.users}
                  rowClassName={"row-antd"}
                />
              </Col>
            </Row>
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <p className="font-semibold text-base text-[#4e4d6e]">
                Showing {value} of {Math.ceil((userList?.data?.usersCount ?? 0) / 10)}
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
                  value === Math.ceil((userList?.data?.usersCount ?? 0) / 10)
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                } `}
                onClick={moreUserData}
              >
                <FaGreaterThan
                  size={16}
                  className={`${
                    value === Math.ceil((userList?.data?.usersCount ?? 0) / 10)
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
        className="p-12 text-[#9c9c9c]"
        centered={true}
        width="600px"
        modalType="basicModal"
        title={"Delete User"}
        text="Are you sure you want to delete this User?"
        descriptionStyle={{
          textAlign: "center",
          fontSize: "1.3rem",
          fontWeight: "400",
          marginTop: "10px",
          marginBottom: "20px",
        }}
        isModalOpen={deleteUserModal}
        isFooter={true}
        rightButtonText="Yes"
        leftButtonText="Cancel"
        rightButtonStyle={{
          backgroundColor: "#ff3b30",
          color: "white",
          fontWeight: "500",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
        leftButtonStyle={{
          backgroundColor: "#e0e0e0",
          color: "#9c9c9c",
          fontWeight: "500",
        }}
        onClickLeft={() => statusModalClose()}
        onClickRight={() => deleteUser()}
        onCancel={() => statusModalClose()}
      />
      <BasicModal
        className="p-12 text-[#9c9c9c]"
        centered={true}
        width="600px"
        modalType="basicModal"
        title={`${userValue?.family?.isActive ? "Deactivate" : "Activate"} User`}
        text={`Are you sure you want to ${
          userValue?.family?.isActive ? "deactivate" : "activate"
        } this User?`}
        descriptionStyle={{
          textAlign: "center",
          fontSize: "1.3rem",
          fontWeight: "400",
          marginTop: "10px",
          marginBottom: "20px",
        }}
        isModalOpen={deactivateUserModal}
        isFooter={true}
        rightButtonText="Yes"
        leftButtonText="Cancel"
        rightButtonStyle={{
          backgroundColor: "#ff3b30",
          color: "white",
          fontWeight: "500",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
        leftButtonStyle={{
          backgroundColor: "#e0e0e0",
          color: "#9c9c9c",
          fontWeight: "500",
        }}
        onClickLeft={() => statusModalClose()}
        onClickRight={() => updateUserStatus()}
        onCancel={() => statusModalClose()}
      />
    </>
  );
}
