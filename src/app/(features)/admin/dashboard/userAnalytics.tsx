"use client";

import React, { useState } from "react";
import { Card, Select, Space, Typography } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthly = [
  { month: "Jan", subscription: 20 },
  { month: "Feb", subscription: 30 },
  { month: "Mar", subscription: 32 },
  { month: "Apr", subscription: 64 },
  { month: "May", subscription: 45 },
  { month: "Jun", subscription: 100 },
  { month: "Jul", subscription: 58 },
  { month: "Aug", subscription: 45 },
  { month: "Sep", subscription: 45 },
  { month: "Oct", subscription: 45 },
  { month: "Nov", subscription: 45 },
  { month: "Dec", subscription: 45 },
];

const yearly = [
  { month: "Jan", subscription: 20, },
  { month: "Feb", subscription: 45 },
  { month: "Mar", subscription: 48 },
  { month: "Apr", subscription: 52 },
  { month: "May", subscription: 55 },
  { month: "Jun", subscription: 42 },
  { month: "Jul", subscription: 48 },
  { month: "Aug", subscription: 60 },
  { month: "Sep", subscription: 60 },
  { month: "Oct", subscription: 60 },
  { month: "Nov", subscription: 102 },
  { month: "Dec", subscription: 60 },
];

// eslint-disable-next-line
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "white",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const UserAnalytics: React.FC = () => {
  const { Title } = Typography;
  const { Option } = Select;
  const [timeframe, setTimeframe] = useState<string>("monthly");
  const [selectSubs, setSelectSubs] = useState<boolean>(true);

  return (
    <Card
      style={{ width: "100%", margin: "0 auto", height: "100%" }}
      className="rounded-3xl"
    >
      <div
        style={{
          marginBottom: 20,
        }}
        className="md:flex block justify-between items-center"
      >
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Subscriptions</span>
        <Space>
          <span onClick={() => setSelectSubs(true)} className="cursor-pointer">
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#ff4d4f",
                marginRight: 5,
              }}
            ></span>
            Monthly
          </span>
          <span onClick={() => setSelectSubs(false)} className="cursor-pointer">
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#1890ff",
                marginRight: 5,
              }}
            ></span>
            Yearly
          </span>
          <Select
            defaultValue={timeframe}
            style={{ width: 120 }}
            onChange={(value) => setTimeframe(value)}
          >
            {/* <Option value="daily" key="daily">
              Daily
            </Option> */}
            <Option value="weekly" key="weekly">
              Weekly
            </Option>
            <Option value="monthly" key="monthly">
              Monthly
            </Option>
          </Select>
        </Space>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            data={selectSubs ? monthly : yearly}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              padding={{ left: 30 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            {selectSubs ? (
            <Line
              type="monotone"
              dataKey="subscription"
              stroke="#ff4d4f"
              strokeWidth={2}
              dot={{ fill: "#ff4d4f", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="Android"
              key="subscription"
            />) : (
            <Line
              type="monotone"
              dataKey="subscription"
              stroke="#1890ff"
              strokeWidth={2}
              dot={{ fill: "#1890ff", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="iOS"
              key="subscription"
            />)}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default UserAnalytics;
