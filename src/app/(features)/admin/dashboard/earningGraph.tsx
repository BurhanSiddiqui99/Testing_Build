"use client"

import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, Select } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const { Option } = Select

const data = [
  { month: "Jan", earnings: 400 },
  { month: "Feb", earnings: 650 },
  { month: "Mar", earnings: 900 },
  { month: "Apr", earnings: 500 },
  { month: "May", earnings: 750 },
  { month: "Jun", earnings: 800 },
]

export default function EarningsChart() {
  return (
    <Card className='rounded-3xl'
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Earnings</span>
          <Select
            defaultValue="monthly"
            style={{ width: 120 }}
            suffixIcon={<DownOutlined />}
          >
            <Option value="monthly">Monthly</Option>
            <Option value="quarterly">Quarterly</Option>
            <Option value="yearly">Yearly</Option>
          </Select>
        </div>
      }
      style={{ width: '100%'}}
    >
      <div style={{ height: '300px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1890ff" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#1890ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              horizontal={true}
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(0, 0, 0, 0.45)' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(0, 0, 0, 0.45)' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #f0f0f0',
                borderRadius: '2px',
              }}
              formatter={(value) => [`$${value}`, 'Earnings']}
            />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#1890ff"
              strokeWidth={2}
              fill="url(#earningsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

