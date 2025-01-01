import React from "react";
import { Row, Col, Table, Empty, Button, TableProps } from "antd";
import { ConfigProvider } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Colors from "../../config/colors/index";
import Loader from "../Loader";
// eslint-disable-next-line
interface TableWrapperProps {
  tableData: TableProps<any>["dataSource"]; // Ant Design Table dataSource type
  tableColumns: TableProps<any>["columns"]; // Ant Design Table columns type
  onHandleChange?: (pagination: any, filters: any, sorter: any) => void;
  previousPage?: () => void;
  metaData?: any; // Replace with a specific type if metaData has a defined structure
  isLoader?: boolean;
  allowedAccountLoading?: boolean;
  fromOrder?: boolean;
  sorter?: any; // Replace with a specific type if sorter has a defined structure
  headerBg?: string;
  loading?: boolean;
  total?: number;
  pageSize?: number;
  currentPage?: number;
  handlePaginationChange?: (page: number, pageSize?: number) => void;
  rowClassName?: string;
  tableStyle?: React.CSSProperties;
  position?: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight";
  size?: "large" | "middle" | "small";
}

const TableWrapper: React.FC<TableWrapperProps> = ({
  tableData,
  tableColumns,
  onHandleChange,
  previousPage,
  metaData,
  isLoader,
  allowedAccountLoading,
  fromOrder,
  sorter,
  headerBg,
  loading,
  total, 
  pageSize,
  currentPage,
  handlePaginationChange,
  rowClassName,
  tableStyle,
  position,
  size,
}) => {
  const LoaderGif = ""; // Placeholder for loader gif if needed
  return (
    <>
      {/* // Basic setting for a table we are using. */}
      <ConfigProvider
        /* Component-specific token configuration */
        theme={{
          components: {
            Table: {
              headerColor: Colors.DarkGray,
              headerBg: Colors.White,
              cellPaddingBlock: 26,
              cellPaddingInline: 26,
              headerBorderRadius: 3,
              cellFontSize: 15,
            },
          },
        }}
      >
        <Table
          style={tableStyle}
          dataSource={tableData}
          columns={tableColumns}
          loading={loading}
          rowClassName={rowClassName}
          size={size}
          // pagination={{
          //   total: total,
          //   pageSize: pageSize,
          //   current: currentPage,
          //   onChange: handlePaginationChange,
          //   position: ["bottomLeft"], // Array for flexibility
          // }}
        />
      </ConfigProvider>
    </>
  );
};

export default TableWrapper;
