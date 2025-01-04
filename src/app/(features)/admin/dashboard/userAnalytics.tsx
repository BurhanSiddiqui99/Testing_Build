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

const data = [
  { month: "Jan", android: 20, ios: 25 },
  { month: "Feb", android: 30, ios: 45 },
  { month: "Mar", android: 32, ios: 48 },
  { month: "Apr", android: 64, ios: 52 },
  { month: "May", android: 45, ios: 55 },
  { month: "Jun", android: 100, ios: 42 },
  { month: "Jul", android: 58, ios: 48 },
  { month: "Aug", android: 45, ios: 60 },
  { month: "Sep", android: 45, ios: 60 },
  { month: "Oct", android: 45, ios: 60 },
  { month: "Nov", android: 45, ios: 60 },
  { month: "Dec", android: 45, ios: 60 },
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
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Apple And Google Users</span>
        <Space>
          <span>
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
            Android Users
          </span>
          <span>
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
            iOS Users
          </span>
          <Select
            defaultValue={timeframe}
            style={{ width: 120 }}
            onChange={(value) => setTimeframe(value)}
          >
            <Option value="daily" key="daily">
              Daily
            </Option>
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
            data={data}
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
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="android"
              stroke="#ff4d4f"
              strokeWidth={2}
              dot={{ fill: "#ff4d4f", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="Android"
              key="android"
            />
            <Line
              type="monotone"
              dataKey="ios"
              stroke="#1890ff"
              strokeWidth={2}
              dot={{ fill: "#1890ff", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="iOS"
              key="ios"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default UserAnalytics;
